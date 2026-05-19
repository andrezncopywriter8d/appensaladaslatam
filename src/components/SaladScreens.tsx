import { useEffect, useState, type CSSProperties, type Dispatch, type SetStateAction } from "react";
import { ArrowLeft, Award, Bell, Check, ChevronRight, Clock3, Copy, Gift, Heart, Home, Layers3, Leaf, LockKeyhole, Menu, Plus, Salad, Search, ShieldCheck, ShoppingBasket, SlidersHorizontal, Sparkles, Trash2, Utensils } from "lucide-react";
import { recipes, weeklyMenus, type SaladRecipe, type ScreenId, type WeeklyMenu } from "../data/saladData";
import { generateProfile, recipeById, shoppingItemsForRecipes, toggle, type SaladProfile, type SaladState } from "../state/saladState";

interface AppContext {
  readonly state: SaladState;
  readonly setState: Dispatch<SetStateAction<SaladState>>;
  readonly openScreen: (screen: ScreenId, options?: { readonly recipeCategory?: string }) => void;
  readonly openRecipe: (recipe: SaladRecipe) => void;
}

export function SaladBottomNav({ activeScreen, activeRecipeCategory, openScreen }: { readonly activeScreen: ScreenId; readonly activeRecipeCategory: string; readonly openScreen: (screen: ScreenId, options?: { readonly recipeCategory?: string }) => void }) {
  const navItems = [
    { key: "home", label: "Inicio", icon: Home, screen: "home" as ScreenId },
    { key: "recipes", label: "Recetas", icon: Salad, screen: "recipes" as ScreenId, recipeCategory: "Todas" },
    { key: "bonus", label: "Bonos", icon: Gift, screen: "guide" as ScreenId },
    { key: "favorites", label: "Favoritos", icon: Heart, screen: "recipes" as ScreenId, recipeCategory: "Favoritas" }
  ];

  return (
    <nav className="bottom-nav salad-premium-bottom-nav" aria-label="Navegación principal">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active =
          item.key === "home"
            ? activeScreen === "home"
            : item.key === "bonus"
              ? activeScreen === "guide"
              : item.key === "recipes"
                ? activeScreen === "recipes" && activeRecipeCategory !== "Favoritas"
                : item.key === "favorites"
                  ? activeScreen === "recipes" && activeRecipeCategory === "Favoritas"
                : false;

        return (
          <button
            className={active ? "active" : ""}
            key={item.key}
            type="button"
            data-screen-target={item.screen}
            aria-current={active ? "page" : undefined}
            onClick={() => openScreen(item.screen, "recipeCategory" in item ? { recipeCategory: item.recipeCategory } : undefined)}
          >
            <Icon size={25} strokeWidth={active ? 2.8 : 2.2} fill={active && item.key === "home" ? "currentColor" : "none"} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export function SaladOnboarding({ onComplete }: { readonly onComplete: (profile: SaladProfile) => void }) {
  const questions = [
    { key: "objective", title: "Cual es tu objetivo principal?", options: ["Comer mas saludable", "Organizar mis comidas", "Ahorrar tiempo", "Llevar almuerzos al trabajo", "Vender ensaladas en frasco", "Aprender nuevas recetas"] },
    { key: "days", title: "Para cuantos dias quieres preparar?", options: ["3 dias", "5 dias", "7 dias"] },
    { key: "preferences", title: "Que tipo de recetas prefieres?", options: ["Con pollo", "Vegetarianas", "Economicas", "Altas en proteina", "Sin lacteos", "Para vender"], multi: true },
    { key: "wantsShoppingList", title: "Quieres generar una lista de compras?", options: ["Si, quiero mi lista", "No, solo quiero ver recetas"] }
  ] as const;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({ preferences: [] });
  const question = questions[step];
  const isLast = step === questions.length;

  function choose(value: string) {
    if (!question) return;
    if ("multi" in question) {
      const current = Array.isArray(answers[question.key]) ? answers[question.key] as string[] : [];
      setAnswers({ ...answers, [question.key]: toggle(current, value) });
      return;
    }
    setAnswers({ ...answers, [question.key]: value });
    window.setTimeout(() => setStep((current) => Math.min(questions.length, current + 1)), 140);
  }

  function buildProfile() {
    return generateProfile({
      objective: typeof answers.objective === "string" ? answers.objective : "Organizar mis comidas",
      days: typeof answers.days === "string" ? answers.days : "5 dias",
      preferences: Array.isArray(answers.preferences) ? answers.preferences : [],
      wantsShoppingList: typeof answers.wantsShoppingList === "string" ? answers.wantsShoppingList : "Si, quiero mi lista"
    });
  }

  if (isLast) {
    const profile = buildProfile();
    return (
      <section className="onboarding-card">
        <span className="protocol-eyebrow"><Salad size={14} /> Ensaladas en Frasco</span>
        <h1>Tu plan esta listo</h1>
        <p>Creamos una seleccion de recetas, aderezos y consejos para ayudarte a organizar tu semana.</p>
        <div className="result-card">
          <strong>{profile.profileName}</strong>
          <span>{profile.days} · {profile.preferences.length ? profile.preferences.join(", ") : "recetas variadas"}</span>
        </div>
        <button className="protocol-primary full" type="button" onClick={() => onComplete(profile)}>Entrar a mi app</button>
      </section>
    );
  }

  return (
    <section className="onboarding-card">
      <span className="protocol-eyebrow"><Salad size={14} /> Guia + App Personalizada</span>
      <h1>{question.title}</h1>
      <p>Responde rapido para adaptar tus recetas, menus y lista de compras.</p>
      <div className="progress-track"><span style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
      <div className="option-grid">
        {question.options.map((option) => {
          const selected = Array.isArray(answers[question.key]) ? (answers[question.key] as string[]).includes(option) : answers[question.key] === option;
          return <button className={selected ? "selected" : ""} key={option} type="button" onClick={() => choose(option)}>{option}</button>;
        })}
      </div>
      {"multi" in question ? <button className="protocol-primary full" type="button" onClick={() => setStep(step + 1)}>Continuar</button> : null}
      {step > 0 ? <button className="protocol-secondary full" type="button" onClick={() => setStep(step - 1)}>Volver</button> : null}
    </section>
  );
}

export function SaladHomeScreen({ active, openScreen }: AppContext & { readonly active: boolean }) {
  const exploreCards = [
    { title: "Recetas", icon: Salad, image: "recipes", screen: "recipes" as ScreenId, tone: "green", recipeCategory: "Todas" },
    { title: "Aderezos", icon: Utensils, image: "dressings", screen: "guide" as ScreenId, tone: "cream" },
    { title: "Combinaciones", icon: Layers3, image: "combinations", screen: "guide" as ScreenId, tone: "green" },
    { title: "Menús", icon: ShoppingBasket, image: "menus", screen: "week" as ScreenId, tone: "cream" },
    { title: "Consejos", icon: Sparkles, image: "tips", screen: "guide" as ScreenId, tone: "green" },
    { title: "Favoritos", icon: Heart, image: "favorites", screen: "recipes" as ScreenId, tone: "pink", recipeCategory: "Favoritas" }
  ];

  return (
    <section className={`screen salad-home salad-premium-home ${active ? "active" : ""}`}>
      <header className="premium-salad-header">
        <button className="premium-header-button" type="button" aria-label="Abrir menú">
          <Menu size={28} strokeWidth={2.5} />
        </button>

        <div className="premium-salad-brand" aria-label="Ensaladas en Frasco">
          <span className="premium-brand-leaf" aria-hidden="true">
            <Leaf size={18} strokeWidth={2.2} />
          </span>
          <strong>ensaladas</strong>
          <small>EN FRASCO</small>
        </div>

        <button className="premium-header-button" type="button" aria-label="Notificaciones">
          <Bell size={25} strokeWidth={2.3} />
        </button>
      </header>

      <section className="premium-jars-hero" aria-label="Ensaladas en frasco listas">
        <picture>
          <source
            type="image/webp"
            srcSet="/assets/salad-jars-hero-430.webp 430w, /assets/salad-jars-hero-860.webp 860w, /assets/salad-jars-hero-1290.webp 1290w"
            sizes="(max-width: 430px) 100vw, 430px"
          />
          <source
            type="image/jpeg"
            srcSet="/assets/salad-jars-hero-430.jpg 430w, /assets/salad-jars-hero-860.jpg 860w, /assets/salad-jars-hero-1290.jpg 1290w"
            sizes="(max-width: 430px) 100vw, 430px"
          />
          <img
            className="premium-jars-photo"
            src="/assets/salad-jars-hero-860.jpg"
            width="860"
            height="484"
            alt="Cuatro ensaladas en frasco preparadas con verduras frescas"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </section>

      <section className="premium-welcome">
        <h1>¡Bienvenida!</h1>
        <p>
          Tu guía completa para preparar ensaladas
          <br />
          en frasco deliciosas, saludables y prácticas.
        </p>
      </section>

      <section className="premium-explore-wrap">
        <div className="premium-explore-divider" />

        <div className="premium-section-row">
          <h2>
            <span aria-hidden="true">
              <Leaf size={22} strokeWidth={2.2} />
            </span>
            Explorar
          </h2>

          <button className="premium-custom-badge" type="button" onClick={() => openScreen("guide")}>
            <Sparkles size={18} strokeWidth={2.4} />
            <strong>APLICACIÓN</strong>
            <small>PERSONALIZADA</small>
          </button>
        </div>

        <div className="premium-explore-grid">
          {exploreCards.map((card) => {
            const Icon = card.icon;

            return (
              <button
                className={`premium-explore-card tone-${card.tone}`}
                key={card.title}
                type="button"
                onClick={() => openScreen(card.screen, "recipeCategory" in card ? { recipeCategory: card.recipeCategory } : undefined)}
              >
                <span className="premium-icon-orb">
                  <picture>
                    <source srcSet={`/assets/home-icons/${card.image}.webp`} type="image/webp" />
                    <img src={`/assets/home-icons/${card.image}.png`} alt="" loading="eager" decoding="async" />
                  </picture>
                  <Icon size={28} strokeWidth={2.25} aria-hidden="true" />
                </span>

                <span className="premium-card-label">{card.title}</span>

                <span className="premium-card-arrow" aria-hidden="true">
                  <ChevronRight size={15} strokeWidth={3} />
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export function SaladRecipesScreen({ active, state, setState, openRecipe, recipeCategoryRequest }: AppContext & { readonly active: boolean; readonly recipeCategoryRequest: { readonly category: string; readonly version: number } }) {
  const [category, setCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  const categoryOptions = [
    { value: "Todas", label: "Todas", icon: null },
    { value: "Proteicas", label: "Proteicas", icon: null },
    { value: "Vegetarianas", label: "Vegetarianas", icon: null },
    { value: "Economicas", label: "Económicas", icon: null },
    { value: "Favoritas", label: "Favoritas", icon: Heart }
  ];

  useEffect(() => {
    if (!active) return;
    setCategory(recipeCategoryRequest.category);
    setQuery("");
  }, [active, recipeCategoryRequest.category, recipeCategoryRequest.version]);

  const normalizedQuery = query.trim().toLowerCase();

  const weekRecipes = state.weekRecipeIds.map(recipeById);
  const visibleWeekTotal = 7;
  const trackedWeekRecipes = weekRecipes.slice(0, visibleWeekTotal);
  const weekCompleted = trackedWeekRecipes.filter((recipe) => state.completedRecipeIds.includes(recipe.id)).length;
  const partialWeekProgress = trackedWeekRecipes.reduce((total, recipe) => {
    if (state.completedRecipeIds.includes(recipe.id)) return total + 1;
    const progress = state.recipeProgress[recipe.id];
    if (!progress) return total;
    const ingredientRatio = recipe.ingredientes.length ? progress.checkedIngredients.length / recipe.ingredientes.length : 0;
    const stepRatio = recipe.instrucciones.length ? progress.checkedSteps.length / recipe.instrucciones.length : 0;
    return total + Math.min(1, (ingredientRatio + stepRatio) / 2);
  }, 0);
  const weekPercent = Math.round((Math.min(partialWeekProgress, visibleWeekTotal) / visibleWeekTotal) * 100);
  const remainingWeek = Math.max(visibleWeekTotal - weekCompleted, 0);
  const weekProgressMessage = weekCompleted >= visibleWeekTotal
    ? "¡Semana completa! Ya tienes tus 7 ensaladas listas."
    : weekCompleted === 0
      ? "Empieza preparando tu primera ensalada para activar tu semana."
      : `¡Vas muy bien! Prepara ${remainingWeek} más para completar tu semana saludable.`;

  const normalizeText = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filtered = recipes.filter((recipe) => {
    const normalizedCategory = normalizeText(recipe.categoria);

    const byCategory =
      category === "Todas"
      || recipe.categoria === category
      || normalizedCategory === category.toLowerCase()
      || (category === "Proteicas" && ["proteicas", "proteica", "altas en proteina"].some((term) => normalizedCategory.includes(term)))
      || (category === "Vegetarianas" && ["vegetarianas", "vegetariana", "vegetal"].some((term) => normalizedCategory.includes(term)))
      || (category === "Economicas" && ["economicas", "economica"].some((term) => normalizedCategory.includes(term)))
      || (category === "Favoritas" && state.favoriteRecipeIds.includes(recipe.id));

    const searchable = normalizeText([
      recipe.nombre,
      recipe.categoria,
      recipe.aderezoRecomendado,
      ...recipe.ingredientes,
      ...recipe.tags
    ].join(" "));

    const byQuery = normalizedQuery.length === 0 || searchable.includes(normalizeText(normalizedQuery));

    return byCategory && byQuery;
  });

  const premiumRecipes = filtered;

  const displayTags = (recipe: SaladRecipe, index: number) => {
    if (index === 0) return ["Fresca", "Equilibrada", "Clásica"];
    if (index === 1) return ["Proteica", "Clásica"];
    if (index === 2) return ["Picante", "Proteica", "Colorida"];
    if (index === 3) return ["Vegetariana", "Fresca", "Ligera"];
    if (recipe.tags.length >= 3) return recipe.tags.slice(0, 3);
    if (recipe.tags.length === 2) return recipe.tags;
    return ["Fresca", "Práctica", "Semana"];
  };

  return (
    <section className={`screen recipe-browser premium-recipes-screen ${active ? "active" : ""}`}>
      <header className="premium-salad-header premium-recipes-header">
        <button className="premium-header-button" type="button" aria-label="Abrir menú">
          <Menu size={28} strokeWidth={2.5} />
        </button>

        <div className="premium-salad-brand" aria-label="Ensaladas en Frasco">
          <span className="premium-brand-leaf" aria-hidden="true">
            <Leaf size={18} strokeWidth={2.2} />
          </span>
          <strong>ensaladas</strong>
          <small>EN FRASCO</small>
        </div>

        <button className="premium-header-button" type="button" aria-label="Notificaciones">
          <Bell size={25} strokeWidth={2.3} />
        </button>
      </header>

      <div className="premium-recipes-content">
        <section className="premium-week-progress-card">
          <div className="premium-week-circle" style={{ "--recipeProgress": `${weekPercent * 3.6}deg` } as CSSProperties}>
            <strong>{weekCompleted}/{visibleWeekTotal}</strong>
          </div>

          <div className="premium-week-copy">
            <h2>Tu semana: {weekCompleted} de {visibleWeekTotal} listas</h2>
            <p>{weekProgressMessage}</p>
          </div>

          <span className="premium-week-calendar" aria-hidden="true">
            <Check size={28} strokeWidth={2.4} />
          </span>
        </section>

        <section className="premium-recipes-title recipe-gallery-title">
          <div>
            <h1>
              <span aria-hidden="true">
                <Leaf size={30} strokeWidth={2.2} />
              </span>
              60 recetas
            </h1>
            <p>Elige tu próxima ensalada en frasco</p>
          </div>

          <button className="recipe-filter-button" type="button" onClick={() => setCategory(category === "Todas" ? "Proteicas" : "Todas")}>
            <SlidersHorizontal size={19} strokeWidth={2.5} />
            Filtrar
          </button>
        </section>

        <label className="premium-recipe-search recipe-gallery-search">
          <Search size={22} strokeWidth={2.2} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar receta o ingrediente..."
          />
        </label>

        <div className="premium-recipe-chip-row recipe-gallery-chips" aria-label="Filtros de recetas">
          {categoryOptions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                className={item.value === category ? "active" : ""}
                key={item.value}
                type="button"
                onClick={() => setCategory(item.value)}
              >
                {Icon ? <Icon size={17} strokeWidth={2.4} /> : null}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {premiumRecipes.length === 0 ? (
          <EmptyState
            title="Nada guardado aquí todavía"
            text="Marca recetas como favoritas o prueba otro filtro para ver más opciones."
          />
        ) : null}

        <div className="premium-recipe-list">
          {premiumRecipes.map((recipe, index) => {
            const favorite = state.favoriteRecipeIds.includes(recipe.id);
            const tags = displayTags(recipe, index);
            const visualTitle = recipe.nombre;
            const visualTime = recipe.tiempoPreparacion;
            const imageIndex = (index % 6) + 1;
            const calories = recipe.tags.find((tag) => tag.includes("kcal")) ?? "";
            const tagLabel = tags[0] ?? recipe.categoria;

            return (
              <article className="premium-recipe-card recipe-gallery-card" key={recipe.id}>
                <button
                  className="premium-recipe-photo recipe-gallery-photo"
                  type="button"
                  aria-label={`Abrir ${recipe.nombre}`}
                  onClick={() => openRecipe(recipe)}
                >
                  <picture>
                    <source srcSet={`/assets/recipes/recipe-card-${imageIndex}.webp`} type="image/webp" />
                    <img
                      src={`/assets/recipes/recipe-card-${imageIndex}.jpg`}
                      alt={visualTitle}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </picture>
                </button>

                <button
                  className={`recipe-gallery-heart ${favorite ? "active" : ""}`}
                  type="button"
                  aria-label="Guardar favorita"
                  onClick={() => setState((current) => ({
                    ...current,
                    favoriteRecipeIds: toggle(current.favoriteRecipeIds, recipe.id)
                  }))}
                >
                  <Heart size={22} strokeWidth={2.2} fill={favorite ? "currentColor" : "none"} />
                </button>

                <div className="premium-recipe-info recipe-gallery-info">
                  <button className="premium-recipe-title-button" type="button" onClick={() => openRecipe(recipe)}>
                    {visualTitle}
                  </button>

                  <span className="recipe-gallery-tag">
                    {tagLabel}
                    {index === 5 ? <Leaf size={13} strokeWidth={2.2} /> : null}
                  </span>

                  <div className="recipe-gallery-meta">
                    <span><Clock3 size={15} strokeWidth={2} /> {visualTime}</span>
                    {calories ? <span><Leaf size={15} strokeWidth={2} /> {calories.replace(" aprox.", "")}</span> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button className="recipe-weekly-banner" type="button">
          <span><Leaf size={22} strokeWidth={2.2} /></span>
          <strong>Nuevas recetas cada semana</strong>
          <small>Siempre hay algo nuevo y delicioso para ti.</small>
          <ChevronRight size={21} strokeWidth={2.8} />
        </button>
      </div>
    </section>
  );
}

export function SaladRecipeDetail({ active, recipe, state, setState, openScreen }: { readonly active: boolean; readonly recipe: SaladRecipe; readonly state: SaladState; readonly setState: Dispatch<SetStateAction<SaladState>>; readonly openScreen: (screen: ScreenId) => void }) {
  const favorite = state.favoriteRecipeIds.includes(recipe.id);
  const inWeek = state.weekRecipeIds.includes(recipe.id);
  const completed = state.completedRecipeIds.includes(recipe.id);
  const [winMessage, setWinMessage] = useState("");
  const progress = state.recipeProgress[recipe.id] ?? { checkedIngredients: [], checkedSteps: [] };
  const ingredientPercent = Math.round((progress.checkedIngredients.length / recipe.ingredientes.length) * 100);
  const stepPercent = Math.round((progress.checkedSteps.length / recipe.instrucciones.length) * 100);
  const readyToFinish = progress.checkedIngredients.length >= Math.min(3, recipe.ingredientes.length) && progress.checkedSteps.length >= Math.min(2, recipe.instrucciones.length);
  const recipeIndex = Math.max(0, recipes.findIndex((item) => item.id === recipe.id));
  const imageIndex = (recipeIndex % 6) + 1;

  function toggleRecipeProgress(kind: "checkedIngredients" | "checkedSteps", value: string) {
    setState((current) => {
      const currentProgress = current.recipeProgress[recipe.id] ?? { checkedIngredients: [], checkedSteps: [] };
      return {
        ...current,
        recipeProgress: {
          ...current.recipeProgress,
          [recipe.id]: {
            ...currentProgress,
            [kind]: toggle(currentProgress[kind], value)
          }
        }
      };
    });
  }

  function completeRecipe() {
    setState((current) => {
      const alreadyDone = current.completedRecipeIds.includes(recipe.id);
      if (alreadyDone) {
        return { ...current, completedRecipeIds: current.completedRecipeIds.filter((id) => id !== recipe.id) };
      }
      return {
        ...current,
        points: current.points + 35,
        completedRecipeIds: [...current.completedRecipeIds, recipe.id],
        weekRecipeIds: current.weekRecipeIds.includes(recipe.id) ? current.weekRecipeIds : [...current.weekRecipeIds, recipe.id].slice(0, 7),
        preparedLog: [
          ...current.preparedLog,
          { id: `${recipe.id}-${Date.now()}`, recipeId: recipe.id, date: getTodayKey() }
        ]
      };
    });
    setWinMessage(completed ? "Receta marcada como pendiente." : "¡+35 puntos! Tu frasco quedó registrado.");
    window.setTimeout(() => setWinMessage(""), 2600);
  }

  return (
    <section className={`screen recipe-detail-screen ${active ? "active" : ""}`}>
      <button className="detail-back kitchen-back" type="button" onClick={() => openScreen("recipes")}><ArrowLeft size={18} /> Volver a recetas</button>
      <article className="kitchen-recipe-card">
        {winMessage ? <div className="win-toast"><Award size={18} /> {winMessage}</div> : null}
        <header className="kitchen-hero">
          <picture className="kitchen-hero-photo">
            <source srcSet={`/assets/recipes/recipe-card-${imageIndex}.webp`} type="image/webp" />
            <img src={`/assets/recipes/recipe-card-${imageIndex}.jpg`} alt={recipe.nombre} loading="eager" decoding="async" />
          </picture>
          <div>
            <span className="kitchen-eyebrow"><Salad size={15} /> Receta guiada</span>
            <h1>{recipe.nombre}</h1>
            <p>{recipe.descripcion}</p>
          </div>
        </header>
        <section className="kitchen-progress-card">
          <div>
            <span><Sparkles size={15} /> Preparación paso a paso</span>
            <strong>{completed ? "Ya registraste esta receta" : readyToFinish ? "Lista para preparar y registrar" : "Marca ingredientes y pasos mientras cocinas"}</strong>
          </div>
          <div className="kitchen-progress-grid">
            <div><b>{ingredientPercent}%</b><small>ingredientes</small></div>
            <div><b>{stepPercent}%</b><small>pasos</small></div>
          </div>
        </section>
        <div className="recipe-detail-grid kitchen-summary">
          <Info label="Tiempo" value={recipe.tiempoPreparacion} />
          <Info label="Porciones" value={`${recipe.porciones} frasco`} />
          <Info label="Duración" value={recipe.duracionRefrigerada} />
          <Info label="Nivel" value={recipe.dificultad} />
        </div>
        <section className="recipe-block interactive-block kitchen-section kitchen-check-section"><h3>Ingredientes</h3><ul>{recipe.ingredientes.map((item) => {
          const checked = progress.checkedIngredients.includes(item);
          return <li className={checked ? "checked" : ""} key={item}><button type="button" onClick={() => toggleRecipeProgress("checkedIngredients", item)}>{checked ? <Check size={15} /> : <Plus size={15} />}{item}</button></li>;
        })}</ul></section>
        <section className="recipe-block kitchen-section kitchen-dressing-card"><h3>Aderezo recomendado</h3><p>{recipe.aderezoRecomendado}</p><small>Colócalo al fondo del frasco o llévalo separado si prefieres las hojas más crujientes.</small></section>
        <section className="recipe-block layer-builder kitchen-section kitchen-layer-section"><h3>Capas del frasco</h3><ol>{recipe.capas.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol></section>
        <section className="recipe-block interactive-block kitchen-section kitchen-step-section"><h3>Preparación guiada</h3><ol>{recipe.instrucciones.map((item) => {
          const checked = progress.checkedSteps.includes(item);
          return <li className={checked ? "checked" : ""} key={item}><button type="button" onClick={() => toggleRecipeProgress("checkedSteps", item)}>{checked ? <Check size={15} /> : <Plus size={15} />}{item}</button></li>;
        })}</ol></section>
        <section className="recipe-block kitchen-section kitchen-tip-card"><h3>Consejo para que dure más</h3>{recipe.consejos.map((item) => <p key={item}>{item}</p>)}</section>
        <div className="action-stack">
          <button className="protocol-primary full dopamine-button" type="button" onClick={completeRecipe}>{completed ? "Marcar como pendiente" : readyToFinish ? "Registrar frasco preparado" : "Registrar de todos modos"}</button>
          <button className="protocol-secondary full" type="button" onClick={() => setState((current) => ({ ...current, weekRecipeIds: inWeek ? current.weekRecipeIds : [...current.weekRecipeIds, recipe.id] }))}>{inWeek ? "Ya esta en mi semana" : "Agregar a mi semana"}</button>
          <button className="protocol-secondary full" type="button" onClick={() => setState((current) => ({ ...current, favoriteRecipeIds: toggle(current.favoriteRecipeIds, recipe.id) }))}>{favorite ? "Quitar de favoritas" : "Marcar como favorita"}</button>
        </div>
      </article>
    </section>
  );
}

export function SaladWeekScreen({ active, state, setState, openRecipe, openScreen }: AppContext & { readonly active: boolean }) {
  const weekRecipes = state.weekRecipeIds.map(recipeById);
  const completed = weekRecipes.filter((recipe) => state.completedRecipeIds.includes(recipe.id)).length;

  function useMenu(menu: WeeklyMenu) {
    setState((current) => ({ ...current, weekRecipeIds: Array.from(new Set(menu.dias.map((day) => day.recetaId))), favoriteMenuIds: toggle(current.favoriteMenuIds, menu.id) }));
  }

  return (
    <section className={`screen ${active ? "active" : ""}`}>
      <Header eyebrow="Mi semana" title="Menus semanales" subtitle="Elige un menu de 3, 5 o 7 dias y prepara todo con mas facilidad." />
      <section className="week-summary">
        <strong>{completed}/{weekRecipes.length}</strong>
        <span>frascos preparados esta semana</span>
        <small>Marca cada receta como preparada para seguir tu organizacion.</small>
      </section>
      <div className="session-list">
        {weeklyMenus.map((menu) => (
          <article className="routine-item" key={menu.id}>
            <div><strong>{menu.titulo}</strong><p>{menu.descripcion}</p><small>{menu.dias.length} preparaciones sugeridas</small></div>
            <button className="protocol-secondary" type="button" onClick={() => useMenu(menu)}>Usar menu</button>
          </article>
        ))}
      </div>
      <section className="chart-card">
        <div className="section-inline-head"><h3>Recetas en tu semana</h3><button type="button" onClick={() => openScreen("shopping")}>Ver lista</button></div>
        {weekRecipes.map((recipe) => {
          const done = state.completedRecipeIds.includes(recipe.id);
          return <button className={`quick-card ${done ? "selected" : ""}`} key={recipe.id} type="button" onClick={() => openRecipe(recipe)}><span>{done ? <Check size={18} /> : recipe.imagenPlaceholder || "salad"}</span><div><strong>{recipe.nombre}</strong><small>{recipe.aderezoRecomendado}</small></div><ChevronRight size={18} /></button>;
        })}
      </section>
    </section>
  );
}

export function SaladShoppingScreen({ active, state, setState }: AppContext & { readonly active: boolean }) {
  const [custom, setCustom] = useState("");
  const items = shoppingItemsForRecipes(state.weekRecipeIds, state.customShoppingItems);
  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => ({ ...acc, [item.category]: [...(acc[item.category] ?? []), item] }), {});

  function addCustom() {
    if (!custom.trim()) return;
    setState((current) => ({ ...current, customShoppingItems: [...current.customShoppingItems, custom.trim()] }));
    setCustom("");
  }

  function copyList() {
    navigator.clipboard?.writeText(items.map((item) => `- ${item.name}`).join("\n"));
  }

  return (
    <section className={`screen ${active ? "active" : ""}`}>
      <Header eyebrow="Lista de compras" title="Compra lo necesario" subtitle="Genera una lista practica segun las recetas que elijas." />
      <div className="shopping-add"><input value={custom} onChange={(event) => setCustom(event.target.value)} placeholder="Agregar item manual" /><button onClick={addCustom} type="button"><Plus size={18} /></button></div>
      <button className="protocol-primary full" type="button" onClick={copyList}><Copy size={18} /> Copiar lista</button>
      {Object.entries(grouped).map(([category, group]) => (
        <section className="chart-card" key={category}>
          <h3>{category}</h3>
          {group.map((item) => {
            const checked = state.checkedShoppingItems.includes(item.id);
            const isCustom = item.id.startsWith("custom-");
            return (
              <div className="shopping-row" key={item.id}>
                <button className={`check-option ${checked ? "selected" : ""}`} type="button" onClick={() => setState((current) => ({ ...current, checkedShoppingItems: toggle(current.checkedShoppingItems, item.id) }))}>{checked ? <Check size={16} /> : null}{item.name}</button>
                {isCustom ? <button className="icon-soft danger" type="button" onClick={() => setState((current) => ({ ...current, customShoppingItems: current.customShoppingItems.filter((customItem) => `custom-${customItem.toLowerCase()}` !== item.id) }))}><Trash2 size={16} /></button> : null}
              </div>
            );
          })}
        </section>
      ))}
    </section>
  );
}

type BonusStatus = "idle" | "loading" | "error";

type BonusOffer = {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly badge: "BONO PREMIUM" | "POPULAR";
  readonly description: string;
  readonly benefits: readonly string[];
  readonly checkoutUrl: string;
  readonly contentUrl: string;
  readonly icon: "avocado" | "sauce" | "calendar" | "list" | "shop" | "family";
  readonly image: string;
  readonly defaultUnlocked?: boolean;
};

const bonusOffers: readonly BonusOffer[] = [
  {
    id: "antojos-cero",
    name: "Pack Antojos Cero",
    price: "$2",
    badge: "POPULAR",
    description: "Snacks saludables para controlar antojos sin culpa.",
    benefits: ["Snacks saludables", "Fáciles y rápidos", "Sin culpa"],
    checkoutUrl: "https://pay.ensaladasenfrasco.com/antojos-cero",
    contentUrl: "https://app.ensaladasenfrasco.com/bonos/antojos-cero",
    icon: "avocado",
    image: "bonus-snacks"
  },
  {
    id: "salsas-premium",
    name: "Pack Salsas Premium",
    price: "$1",
    badge: "BONO PREMIUM",
    description: "Salsas caseras para llevar tus ensaladas al siguiente nivel.",
    benefits: ["Salsas caseras", "Más sabor", "Combina todo"],
    checkoutUrl: "https://pay.ensaladasenfrasco.com/salsas-premium",
    contentUrl: "https://app.ensaladasenfrasco.com/bonos/salsas-premium",
    icon: "sauce",
    image: "bonus-sauces"
  },
  {
    id: "menu-7-dias",
    name: "Menú 7 Días en Frasco",
    price: "$2",
    badge: "POPULAR",
    description: "Planifica tu semana con ensaladas fáciles y balanceadas.",
    benefits: ["7 días completos", "Balanceado y rico", "Ahorra tiempo"],
    checkoutUrl: "https://pay.ensaladasenfrasco.com/menu-7-dias",
    contentUrl: "https://app.ensaladasenfrasco.com/bonos/menu-7-dias",
    icon: "calendar",
    image: "bonus-jars"
  },
  {
    id: "lista-inteligente",
    name: "Lista de Compras Inteligente",
    price: "$1",
    badge: "BONO PREMIUM",
    description: "Lista de compra automática para cada receta.",
    benefits: ["Organizada por recetas", "Optimiza tu compra", "Ahorra dinero"],
    checkoutUrl: "https://pay.ensaladasenfrasco.com/lista-inteligente",
    contentUrl: "https://app.ensaladasenfrasco.com/bonos/lista-inteligente",
    icon: "list",
    image: "bonus-shopping"
  },
  {
    id: "vender-ensaladas",
    name: "Guía para vender ensaladas",
    price: "$3",
    badge: "BONO PREMIUM",
    description: "Guía práctica para emprender y vender ensaladas.",
    benefits: ["Paso a paso", "Precios y márgenes", "Haz crecer tu negocio"],
    checkoutUrl: "https://pay.ensaladasenfrasco.com/vender-ensaladas",
    contentUrl: "https://app.ensaladasenfrasco.com/bonos/vender-ensaladas",
    icon: "shop",
    image: "bonus-sell"
  },
  {
    id: "plan-familiar",
    name: "Plan familiar saludable",
    price: "$2",
    badge: "BONO PREMIUM",
    description: "Ideas y porciones para alimentar a toda tu familia.",
    benefits: ["Menús para toda la familia", "Nutritivo y delicioso", "Todos lo disfrutan"],
    checkoutUrl: "https://pay.ensaladasenfrasco.com/plan-familiar",
    contentUrl: "https://app.ensaladasenfrasco.com/bonos/plan-familiar",
    icon: "family",
    image: "bonus-family"
  }
];

export function SaladGuideScreen({ active, state }: AppContext & { readonly active: boolean }) {
  const [bonusStatus, setBonusStatus] = useState<Record<string, BonusStatus>>({});
  const unlockedBonusIds = state.unlockedBonusIds ?? [];
  const comboUnlocked = ["antojos-cero", "salsas-premium", "menu-7-dias"].every((id) => unlockedBonusIds.includes(id) || bonusOffers.find((bonus) => bonus.id === id)?.defaultUnlocked);

  function isUnlocked(bonus: BonusOffer) {
    return Boolean(bonus.defaultUnlocked || unlockedBonusIds.includes(bonus.id));
  }

  function setStatus(id: string, status: BonusStatus) {
    setBonusStatus((current) => ({ ...current, [id]: status }));
  }

  function openExternal(id: string, url: string) {
    if (!url) {
      setStatus(id, "error");
      return;
    }

    setStatus(id, "loading");
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setStatus(id, opened ? "idle" : "error"), 520);
  }

  return (
    <section className={`screen bonus-screen ${active ? "active" : ""}`}>
      <header className="premium-salad-header bonus-topbar">
        <button className="premium-header-button" type="button" aria-label="Abrir menú">
          <Menu size={28} strokeWidth={2.5} />
        </button>

        <div className="premium-salad-brand" aria-label="Ensaladas en Frasco">
          <strong>ensaladas</strong>
          <small>EN FRASCO</small>
        </div>

        <button className="premium-header-button" type="button" aria-label="Notificaciones">
          <Bell size={25} strokeWidth={2.3} />
        </button>
      </header>

      <div className="bonus-content">
        <BonusHeader />

        <div className="bonus-grid" id="bonos-disponibles">
          {bonusOffers.map((bonus, index) => (
            <BonusCard
              bonus={bonus}
              index={index + 1}
              key={bonus.id}
              status={bonusStatus[bonus.id] ?? "idle"}
              unlocked={isUnlocked(bonus)}
              onOpen={() => openExternal(bonus.id, bonus.contentUrl)}
              onUnlock={() => openExternal(bonus.id, bonus.checkoutUrl)}
            />
          ))}
        </div>

        <BonusComboCard
          status={bonusStatus.combo ?? "idle"}
          unlocked={comboUnlocked}
          onOpen={() => openExternal("combo", "https://app.ensaladasenfrasco.com/bonos/combo-recomendado")}
          onUnlock={() => openExternal("combo", "https://pay.ensaladasenfrasco.com/combo-recomendado")}
        />
        <BonusPaymentTrust />
      </div>
    </section>
  );
}

function BonusHeader() {
  return (
    <section className="bonus-page-head">
      <article className="bonus-hero-card">
        <div className="bonus-hero-copy">
          <h1>Bonos especiales</h1>
          <span className="bonus-title-line" />
          <p>Extras prácticos desde $1 para mejorar tu experiencia y ahorrar tiempo.</p>
          <ul>
            <li><Leaf size={18} /> Contenido digital inmediato</li>
          </ul>
        </div>

        <picture>
          <source srcSet="/assets/bonos/bonus-jars.webp" type="image/webp" />
          <img src="/assets/bonos/bonus-jars.jpg" alt="Ensaladas en frasco frescas para preparar bonos especiales" loading="eager" decoding="async" />
        </picture>
      </article>
    </section>
  );
}

function BonusCard({ bonus, index, status, unlocked, onOpen, onUnlock }: { readonly bonus: BonusOffer; readonly index: number; readonly status: BonusStatus; readonly unlocked: boolean; readonly onOpen: () => void; readonly onUnlock: () => void }) {
  return (
    <article className={`bonus-store-card ${unlocked ? "unlocked" : ""}`}>
      <picture className="bonus-card-media">
        <source srcSet={`/assets/bonos/${bonus.image}.webp`} type="image/webp" />
        <img src={`/assets/bonos/${bonus.image}.jpg`} alt={bonus.name} loading="lazy" decoding="async" />
      </picture>

      <div className="bonus-card-copy">
        <h3>{index}. {bonus.name}</h3>
        <ul>
          {bonus.benefits.map((benefit) => (
            <li key={benefit}><Check size={13} /> {benefit}</li>
          ))}
        </ul>

        <strong className="bonus-price">{unlocked ? "Listo" : bonus.price}</strong>

        <button className={unlocked ? "bonus-secondary-action" : "bonus-primary-action"} type="button" onClick={unlocked ? onOpen : onUnlock}>
          {status === "loading" ? "Procesando..." : unlocked ? "Abrir" : "Añadir"}
          {unlocked ? <ChevronRight size={15} /> : null}
        </button>
        {status === "error" ? <small className="bonus-error">No se pudo completar. Intenta de nuevo.</small> : null}
      </div>
    </article>
  );
}

function BonusComboCard({ status, unlocked, onOpen, onUnlock }: { readonly status: BonusStatus; readonly unlocked: boolean; readonly onOpen: () => void; readonly onUnlock: () => void }) {
  return (
    <section className="bonus-combo-card bonus-combo-card-image">
      <picture className="bonus-combo-reference">
        <source srcSet="/assets/bonos/bonus-combo-card.webp" type="image/webp" />
        <img src="/assets/bonos/bonus-combo-card.jpg" alt="Combo recomendado: lleva más, ahorra más por $7" loading="lazy" decoding="async" />
      </picture>

      <button className="bonus-combo-hotspot" type="button" onClick={unlocked ? onOpen : onUnlock}>
        {status === "loading" ? "Procesando..." : unlocked ? "Abrir combo" : "Quiero el combo"}
        <ChevronRight size={16} />
      </button>

      {status === "error" ? <small className="bonus-error">No se pudo completar. Intenta de nuevo.</small> : null}
    </section>
  );
}

function BonusPaymentTrust() {
  return (
    <section className="bonus-payment-trust">
      <div className="bonus-secure-copy">
        <ShieldCheck size={30} />
        <span><strong>Pago 100% seguro</strong><small>Tus datos están protegidos</small></span>
      </div>
      <picture><source srcSet="/assets/bonos/bonus-secure.webp" type="image/webp" /><img src="/assets/bonos/bonus-secure.jpg" alt="Visa" /></picture>
      <picture><source srcSet="/assets/bonos/bonus-mastercard.webp" type="image/webp" /><img src="/assets/bonos/bonus-mastercard.jpg" alt="Mastercard" /></picture>
      <picture><source srcSet="/assets/bonos/bonus-amex.webp" type="image/webp" /><img src="/assets/bonos/bonus-amex.jpg" alt="American Express" /></picture>
      <picture><source srcSet="/assets/bonos/bonus-paypal.webp" type="image/webp" /><img src="/assets/bonos/bonus-paypal.jpg" alt="PayPal" /></picture>
      <div className="bonus-ssl-copy"><LockKeyhole size={18} /><span>SSL<br />Encriptado</span></div>
    </section>
  );
}

function Header({ eyebrow, title, subtitle }: { readonly eyebrow: string; readonly title: string; readonly subtitle: string }) {
  return <header className="screen-head"><span className="protocol-eyebrow"><Salad size={14} /> {eyebrow}</span><h1>{title}</h1><p>{subtitle}</p></header>;
}

function MiniStat({ icon, label, value }: { readonly icon: React.ReactNode; readonly label: string; readonly value: string }) {
  return <div className="banana-mini-stat">{icon}<span>{label}</span><strong>{value}</strong></div>;
}

function Shortcut({ icon, tone, title, subtitle, onClick }: { readonly icon: React.ReactNode; readonly tone: string; readonly title: string; readonly subtitle: string; readonly onClick: () => void }) {
  return <button className="banana-shortcut" type="button" onClick={onClick}><span className={tone}>{icon}</span><div><strong>{title}</strong><small>{subtitle}</small></div><ChevronRight size={20} /></button>;
}

function Info({ label, value }: { readonly label: string; readonly value: string }) {
  return <div className="metric-card compact"><small>{label}</small><strong>{value}</strong></div>;
}

function PriceField({ label, value, onChange }: { readonly label: string; readonly value: number; readonly onChange: (value: number) => void }) {
  return <label className="floating-field"><span>{label}</span><input value={value} type="number" step="0.1" onChange={(event) => onChange(Number(event.target.value))} /></label>;
}

function EmptyState({ title, text }: { readonly title: string; readonly text: string }) {
  return <div className="empty-state"><strong>{title}</strong><p>{text}</p></div>;
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}
