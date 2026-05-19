import { useState } from "react";
import { LoginForm, SmokeyBackground } from "./ui/login-form";
import { loginWithPassword, registerWithPassword, type AuthSession } from "../state/authState";

interface LoginScreenProps {
  readonly onAuthenticated: (session: AuthSession) => void;
}

export function LoginScreen({ onAuthenticated }: LoginScreenProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(data: { email: string; name: string; password: string }) {
    setLoading(true);
    setError("");
    const result = mode === "register"
      ? await registerWithPassword(data.name, data.email, data.password)
      : await loginWithPassword(data.email, data.password);
    setLoading(false);
    if (!result.ok || !result.session) {
      setError(result.message);
      return;
    }
    onAuthenticated(result.session);
  }

  return (
    <main className="login-shell">
      <SmokeyBackground color="#f6c83f" backdropBlurAmount="sm" />
      <div className="login-brand">
        <strong>Ensaladas en Frasco</strong>
        <span>Guía + App Personalizada</span>
      </div>
      <div className="login-center">
        <LoginForm
          error={error}
          loading={loading}
          mode={mode}
          onModeChange={setMode}
          onSubmit={submit}
        />
      </div>
      <p className="login-footnote">Usa el mismo e-mail de tu compra para acceder a tu guía y app personalizada.</p>
    </main>
  );
}
