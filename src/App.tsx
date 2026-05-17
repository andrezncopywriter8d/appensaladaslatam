import { useEffect, useMemo, useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { SaladBottomNav, SaladGuideScreen, SaladHomeScreen, SaladOnboarding, SaladRecipeDetail, SaladRecipesScreen, SaladShoppingScreen, SaladWeekScreen } from "./components/SaladScreens";
import { recipes, type SaladRecipe, type ScreenId } from "./data/saladData";
import { loadAuthSession, type AuthSession } from "./state/authState";
import { loadSaladState, saveSaladState, type SaladProfile, type SaladState } from "./state/saladState";

export interface PlayerSource {
  readonly kind: "main" | "routine" | "library" | "emergency";
  readonly reason?: string;
  readonly routineId?: string;
}

export function App() {
  const [state, setState] = useState<SaladState>(() => loadSaladState());
  const [authSession, setAuthSession] = useState<AuthSession | null>(() => loadAuthSession());
  const [activeScreen, setActiveScreen] = useState<ScreenId>("home");
  const [selectedRecipe, setSelectedRecipe] = useState<SaladRecipe>(recipes[0]);
  const [recipeDetailOpen, setRecipeDetailOpen] = useState(false);

  useEffect(() => {
    saveSaladState(state);
  }, [state]);

  const hasOnboarding = state.onboardingCompleted && state.profile && state.onboardingUserId === authSession?.userId;

  const context = useMemo(() => ({
    state,
    setState,
    openScreen,
    openRecipe
  }), [state]);

  function openScreen(screen: ScreenId) {
    setRecipeDetailOpen(false);
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function openRecipe(recipe: SaladRecipe) {
    setSelectedRecipe(recipe);
    setActiveScreen("recipes");
    setRecipeDetailOpen(true);
    window.scrollTo({ top: 0, behavior: "auto" });
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
    <main className="app-shell">
      <div className="status-glow" />
      <SaladHomeScreen {...context} active={activeScreen === "home"} />
      <SaladRecipesScreen {...context} active={activeScreen === "recipes" && !recipeDetailOpen} />
      <SaladRecipeDetail active={activeScreen === "recipes" && recipeDetailOpen} recipe={selectedRecipe} state={state} setState={setState} openScreen={openScreen} />
      <SaladWeekScreen {...context} active={activeScreen === "week"} />
      <SaladShoppingScreen {...context} active={activeScreen === "shopping"} />
      <SaladGuideScreen {...context} active={activeScreen === "guide"} />
      <SaladBottomNav activeScreen={activeScreen} openScreen={openScreen} />
    </main>
  );
}
