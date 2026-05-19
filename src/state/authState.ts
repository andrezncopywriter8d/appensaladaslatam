import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";

export const AUTH_SESSION_KEY = "ensaladasEnFrascoAuthSession";

export interface AuthSession {
  readonly userId: string;
  readonly email: string;
  readonly name: string;
  readonly provider?: "password" | "google";
  readonly picture?: string;
  readonly startedAt: string;
}

export interface AuthResult {
  readonly ok: boolean;
  readonly message: string;
  readonly session?: AuthSession;
}

export function loadAuthSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(AUTH_SESSION_KEY);
    return raw ? JSON.parse(raw) as AuthSession : null;
  } catch {
    return null;
  }
}

export async function getCurrentAuthSession(): Promise<AuthSession | null> {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) {
    clearAuthSession();
    return null;
  }

  return saveAuthSession(mapSupabaseSession(data.session));
}

export function onAuthSessionChange(callback: (session: AuthSession | null) => void) {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session ? saveAuthSession(mapSupabaseSession(session)) : null);
    if (!session) clearAuthSession();
  });

  return () => data.subscription.unsubscribe();
}

export function saveAuthSession(session: AuthSession) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
  return session;
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_SESSION_KEY);
}

export async function loginWithPassword(email: string, password: string): Promise<AuthResult> {
  const normalized = normalizeEmail(email);
  if (!isValidEmail(normalized)) return { ok: false, message: "Escribe un correo válido." };
  if (!password) return { ok: false, message: "Escribe tu contraseña." };

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalized,
    password
  });

  if (error || !data.session) {
    return { ok: false, message: authErrorMessage(error?.message) };
  }

  return { ok: true, message: "Sesión iniciada.", session: saveAuthSession(mapSupabaseSession(data.session)) };
}

export async function registerWithPassword(name: string, email: string, password: string): Promise<AuthResult> {
  const normalized = normalizeEmail(email);
  if (!name.trim()) return { ok: false, message: "Escribe tu nombre." };
  if (!isValidEmail(normalized)) return { ok: false, message: "Escribe un correo válido." };
  if (password.length < 8) return { ok: false, message: "Usa al menos 8 caracteres." };

  const { data, error } = await supabase.auth.signUp({
    email: normalized,
    password,
    options: {
      data: {
        full_name: name.trim(),
        name: name.trim()
      }
    }
  });

  if (error) return { ok: false, message: authErrorMessage(error.message) };
  if (!data.session) {
    return {
      ok: false,
      message: "Cuenta creada. Revisa tu correo para confirmar el acceso antes de entrar."
    };
  }

  return { ok: true, message: "Cuenta creada.", session: saveAuthSession(mapSupabaseSession(data.session)) };
}

function mapSupabaseSession(session: Session): AuthSession {
  const user = session.user;

  return {
    userId: user.id,
    email: user.email ?? "",
    name: userDisplayName(user),
    provider: authProvider(user),
    picture: user.user_metadata?.avatar_url ?? user.user_metadata?.picture,
    startedAt: new Date().toISOString()
  };
}

function userDisplayName(user: User) {
  const metadata = user.user_metadata ?? {};
  const candidate = metadata.full_name ?? metadata.name ?? metadata.display_name;
  if (typeof candidate === "string" && candidate.trim()) return candidate.trim();
  return user.email?.split("@")[0] ?? "Usuario";
}

function authProvider(user: User): "password" | "google" {
  return user.app_metadata?.provider === "google" ? "google" : "password";
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function authErrorMessage(message?: string) {
  const normalized = (message ?? "").toLowerCase();
  if (normalized.includes("invalid login credentials")) return "Correo o contraseña incorrectos.";
  if (normalized.includes("email not confirmed")) return "Confirma tu correo antes de entrar.";
  if (normalized.includes("user already registered") || normalized.includes("already registered")) return "Ese correo ya tiene una cuenta.";
  if (normalized.includes("password")) return "Revisa la contraseña e intenta otra vez.";
  return "No pudimos completar el acceso ahora. Intenta nuevamente.";
}
