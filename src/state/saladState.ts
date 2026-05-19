import { recipes, type SaladRecipe } from "../data/saladData";
import { saladDressings } from "../data/saladDressings";

export const SALAD_STORAGE_KEY = "ensaladasEnFrascoStateV2";
const userSaladStorageKey = (userId: string) => `${SALAD_STORAGE_KEY}:${userId}`;

export interface SaladProfile {
  readonly objective: string;
  readonly days: string;
  readonly preferences: readonly string[];
  readonly wantsShoppingList: string;
  readonly profileName: string;
}

export interface SaladState {
  readonly onboardingCompleted: boolean;
  readonly onboardingUserId: string | null;
  readonly profile: SaladProfile | null;
  readonly points: number;
  readonly preparedLog: readonly { readonly id: string; readonly recipeId: string; readonly date: string }[];
  readonly recipeProgress: Record<string, {
    readonly checkedIngredients: readonly string[];
    readonly checkedSteps: readonly string[];
  }>;
  readonly favoriteRecipeIds: readonly string[];
  readonly favoriteDressingIds: readonly string[];
  readonly favoriteMenuIds: readonly string[];
  readonly weekRecipeIds: readonly string[];
  readonly completedRecipeIds: readonly string[];
  readonly checkedShoppingItems: readonly string[];
  readonly customShoppingItems: readonly string[];
  readonly completedGuides: readonly string[];
  readonly unlockedBonusIds: readonly string[];
  readonly priceCalculator: {
    readonly ingredients: number;
    readonly packaging: number;
    readonly extra: number;
    readonly margin: number;
  };
}

export const defaultSaladState: SaladState = {
  onboardingCompleted: false,
  onboardingUserId: null,
  profile: null,
  points: 0,
  preparedLog: [],
  recipeProgress: {},
  favoriteRecipeIds: [],
  favoriteDressingIds: [],
  favoriteMenuIds: [],
  weekRecipeIds: recipes.slice(0, 3).map((recipe) => recipe.id),
  completedRecipeIds: [],
  checkedShoppingItems: [],
  customShoppingItems: [],
  completedGuides: [],
  unlockedBonusIds: [],
  priceCalculator: { ingredients: 3.5, packaging: 0.8, extra: 0.5, margin: 45 }
};

export function loadSaladState(userId?: string | null): SaladState {
  try {
    if (userId) {
      const userRaw = localStorage.getItem(userSaladStorageKey(userId));
      if (userRaw) return normalizeState(JSON.parse(userRaw) as Partial<SaladState>, userId);

      const legacyRaw = localStorage.getItem(SALAD_STORAGE_KEY);
      if (legacyRaw) return normalizeState(JSON.parse(legacyRaw) as Partial<SaladState>, userId);
    }

    const raw = localStorage.getItem(SALAD_STORAGE_KEY);
    return raw ? normalizeState(JSON.parse(raw) as Partial<SaladState>, userId) : defaultSaladState;
  } catch {
    return defaultSaladState;
  }
}

export function saveSaladState(state: SaladState, userId?: string | null) {
  const stateToSave = userId && state.onboardingCompleted
    ? { ...state, onboardingUserId: state.onboardingUserId ?? userId }
    : state;

  if (userId) {
    localStorage.setItem(userSaladStorageKey(userId), JSON.stringify(stateToSave));
    return;
  }

  localStorage.setItem(SALAD_STORAGE_KEY, JSON.stringify(stateToSave));
}

export function normalizeState(partial: Partial<SaladState>, userId?: string | null): SaladState {
  const validRecipeIds = new Set(recipes.map((recipe) => recipe.id));
  const validDressingIds = new Set(saladDressings.map((dressing) => dressing.id));
  const safeWeekRecipeIds = (partial.weekRecipeIds ?? defaultSaladState.weekRecipeIds).filter((id) => validRecipeIds.has(id));
  const safeCompletedRecipeIds = (partial.completedRecipeIds ?? defaultSaladState.completedRecipeIds).filter((id) => validRecipeIds.has(id));
  const safeFavoriteRecipeIds = (partial.favoriteRecipeIds ?? defaultSaladState.favoriteRecipeIds).filter((id) => validRecipeIds.has(id));
  const safeFavoriteDressingIds = (partial.favoriteDressingIds ?? defaultSaladState.favoriteDressingIds).filter((id) => validDressingIds.has(id));
  const safePreparedLog = (partial.preparedLog ?? defaultSaladState.preparedLog).filter((entry) => validRecipeIds.has(entry.recipeId));
  const safeUnlockedBonusIds = (partial.unlockedBonusIds ?? defaultSaladState.unlockedBonusIds).filter((id) => typeof id === "string" && id.length > 0);
  const safeRecipeProgress = Object.fromEntries(
    Object.entries(partial.recipeProgress ?? {})
      .filter(([recipeId]) => validRecipeIds.has(recipeId))
      .map(([recipeId, progress]) => [
        recipeId,
        {
          checkedIngredients: Array.from(new Set(progress.checkedIngredients ?? [])),
          checkedSteps: Array.from(new Set(progress.checkedSteps ?? []))
        }
      ])
  );

  const onboardingUserId = partial.onboardingUserId ?? (partial.onboardingCompleted && userId ? userId : null);

  return {
    ...defaultSaladState,
    ...partial,
    onboardingUserId,
    points: Number.isFinite(partial.points) ? Math.max(0, Number(partial.points)) : defaultSaladState.points,
    preparedLog: Array.from(new Map(safePreparedLog.map((entry) => [entry.id, entry])).values()),
    recipeProgress: safeRecipeProgress,
    weekRecipeIds: safeWeekRecipeIds.length ? Array.from(new Set(safeWeekRecipeIds)) : defaultSaladState.weekRecipeIds,
    completedRecipeIds: Array.from(new Set(safeCompletedRecipeIds)),
    favoriteRecipeIds: Array.from(new Set(safeFavoriteRecipeIds)),
    favoriteDressingIds: Array.from(new Set(safeFavoriteDressingIds)),
    unlockedBonusIds: Array.from(new Set(safeUnlockedBonusIds)),
    priceCalculator: {
      ...defaultSaladState.priceCalculator,
      ...(partial.priceCalculator ?? {})
    }
  };
}

export function recipeById(id: string): SaladRecipe {
  return recipes.find((recipe) => recipe.id === id) ?? recipes[0];
}

export function generateProfile(profile: Omit<SaladProfile, "profileName">): SaladProfile {
  const profileName = profile.objective.includes("Vender") || profile.preferences.includes("Para vender")
    ? "Plan practico para vender ensaladas"
    : profile.preferences.includes("Economicas")
      ? "Semana organizada y economica"
      : profile.preferences.includes("Vegetarianas")
        ? "Menu fresco con recetas vegetarianas"
        : "Organizacion saludable para tu semana";
  return { ...profile, profileName };
}

export function toggle(list: readonly string[], id: string) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

export function shoppingItemsForRecipes(recipeIds: readonly string[], custom: readonly string[] = []) {
  const ingredients = new Set<string>();
  recipeIds.map(recipeById).forEach((recipe) => recipe.ingredientes.forEach((item) => ingredients.add(item)));
  const categorized = Array.from(ingredients)
    .sort((a, b) => a.localeCompare(b, "es"))
    .map((name) => ({ id: name.toLowerCase(), name, category: categoryForItem(name) }));
  return [
    ...categorized,
    ...custom.map((name) => ({ id: `custom-${name.toLowerCase()}`, name, category: "Extras" }))
  ];
}

function categoryForItem(item: string) {
  const value = item.toLowerCase();
  if (["lechuga", "pepino", "tomate", "zanahoria", "cebolla", "repollo", "espinaca", "apio", "perejil", "cilantro", "albahaca", "hojas", "remolacha"].some((word) => value.includes(word))) return "Verduras";
  if (["pollo", "atún", "huevo", "pavo", "camarones", "salmón", "tofu", "queso"].some((word) => value.includes(word))) return "Proteínas";
  if (["garbanzos", "frijoles", "lentejas"].some((word) => value.includes(word))) return "Legumbres";
  if (["arroz", "quinoa", "pasta", "couscous", "papa"].some((word) => value.includes(word))) return "Granos y cereales";
  if (["limón", "yogur", "aceite", "mostaza", "miel", "vinagre", "pesto", "salsa"].some((word) => value.includes(word))) return "Aderezos";
  if (["frasco", "empaque", "etiqueta", "bolsa"].some((word) => value.includes(word))) return "Frascos y empaques";
  return "Extras";
}
