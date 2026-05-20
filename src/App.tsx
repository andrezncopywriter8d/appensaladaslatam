import { useEffect, useMemo, useRef, useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { MenuInteligenteScreen, SaladBottomNav, SaladDressingsScreen, SaladGuideScreen, SaladHomeScreen, SaladOnboarding, SaladRecipeDetail, SaladRecipesScreen, SaladShoppingScreen, SaladWeekScreen } from "./components/SaladScreens";
import { recipes, type SaladRecipe, type ScreenId } from "./data/saladData";
import { getCurrentAuthSession, loadAuthSession, onAuthSessionChange, type AuthSession } from "./state/authState";
import { loadSaladState, saveSaladState, type SaladProfile, type SaladState } from "./state/saladState";

export interface PlayerSource {
  readonly kind: "main" | "routine" | "library" | "emergency";
  readonly reason?: string;
  readonly routineId?: string;
}

export interface ScreenOpenOptions {
  readonly recipeCategory?: string;
}

export interface RecipeCategoryRequest {
  readonly category: string;
  readonly version: number;
}

export function App() {
  const [authSession, setAuthSession] = useState<AuthSession | null>(() => loadAuthSession());
  const [state, setState] = useState<SaladState>(() => loadSaladState(authSession?.userId));
  const [activeScreen, setActiveScreen] = useState<ScreenId>("home");
  const [selectedRecipe, setSelectedRecipe] = useState<SaladRecipe>(recipes[0]);
  const [recipeDetailOpen, setRecipeDetailOpen] = useState(false);
  const [recipeCategoryRequest, setRecipeCategoryRequest] = useState<RecipeCategoryRequest>({ category: "Todas", version: 0 });
  const [screenTransitioning, setScreenTransitioning] = useState(false);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    saveSaladState(state, authSession?.userId);
  }, [state, authSession?.userId]);

  useEffect(() => () => {
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
  }, []);

  useEffect(() => {
    let mounted = true;
    getCurrentAuthSession().then((session) => {
      if (mounted) {
        setAuthSession(session);
        setState(loadSaladState(session?.userId));
      }
    });

    const unsubscribe = onAuthSessionChange((session) => {
      if (mounted) {
        setAuthSession(session);
        setState(loadSaladState(session?.userId));
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const hasOnboarding = state.onboardingCompleted && state.profile && state.onboardingUserId === authSession?.userId;

  const context = useMemo(() => ({
    state,
    setState,
    openScreen,
    openRecipe
  }), [state]);

  function openScreen(screen: ScreenId, options?: ScreenOpenOptions) {
    beginScreenTransition();
    if (screen === "recipes") {
      setRecipeCategoryRequest((current) => ({
        category: options?.recipeCategory ?? "Todas",
        version: current.version + 1
      }));
    }
    setRecipeDetailOpen(false);
    setActiveScreen(screen);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  }

  function openRecipe(recipe: SaladRecipe) {
    beginScreenTransition();
    setSelectedRecipe(recipe);
    setActiveScreen("recipes");
    setRecipeDetailOpen(true);
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.querySelector(".app-shell")?.scrollTo({ top: 0, behavior: "auto" });
    });
  }

  function beginScreenTransition() {
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    setScreenTransitioning(true);
    transitionTimer.current = window.setTimeout(() => {
      setScreenTransitioning(false);
      transitionTimer.current = null;
    }, 320);
  }

  function completeOnboarding(profile: SaladProfile) {
    setState((current) => ({
      ...current,
      onboardingCompleted: true,
      onboardingUserId: authSession?.userId ?? null,
      profile
    }));
  }

  if (!authSession) {
    return <LoginScreen onAuthenticated={setAuthSession} />;
  }

  if (!hasOnboarding) {
    return (
      <main className="app-shell">
        <div className="status-glow" />
        <SaladOnboarding onComplete={completeOnboarding} />
      </main>
    );
  }

  return (
    <main className={`app-shell ${screenTransitioning ? "screen-is-transitioning" : ""}`}>
      <div className="status-glow" />
      <SaladHomeScreen {...context} active={activeScreen === "home"} />
      <SaladRecipesScreen {...context} active={activeScreen === "recipes" && !recipeDetailOpen} recipeCategoryRequest={recipeCategoryRequest} />
      <SaladDressingsScreen {...context} active={activeScreen === "dressings"} />
      <SaladRecipeDetail active={activeScreen === "recipes" && recipeDetailOpen} recipe={selectedRecipe} state={state} setState={setState} openScreen={openScreen} />
      <SaladWeekScreen {...context} active={activeScreen === "week"} />
      <SaladShoppingScreen {...context} active={activeScreen === "shopping"} />
      <SaladGuideScreen {...context} active={activeScreen === "guide"} />
      <MenuInteligenteScreen {...context} active={activeScreen === "smartMenu"} />
      <SaladBottomNav activeScreen={activeScreen} activeRecipeCategory={recipeCategoryRequest.category} openScreen={openScreen} />
    </main>
  );
}
