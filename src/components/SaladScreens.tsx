import { useState, type CSSProperties, type Dispatch, type SetStateAction } from "react";
import { ArrowLeft, Award, Bell, BookOpen, Check, ChevronRight, Clock3, Copy, Heart, Home, Layers3, Leaf, Menu, Plus, Salad, Search, ShoppingBasket, SlidersHorizontal, Sparkles, Star, Trash2, Utensils } from "lucide-react";
import { conservationTips, dressings, faq, homeCards, layerSteps, navigationItems, recipes, sellingTips, weeklyMenus, type Dressing, type SaladRecipe, type ScreenId, type WeeklyMenu } from "../data/saladData";
import { generateProfile, recipeById, shoppingItemsForRecipes, toggle, type SaladProfile, type SaladState } from "../state/saladState";

interface AppContext {
  readonly state: SaladState;
  readonly setState: Dispatch<SetStateAction<SaladState>>;
  readonly openScreen: (screen: ScreenId) => void;
  readonly openRecipe: (recipe: SaladRecipe) => void;
}

export function SaladBottomNav({ activeScreen, openScreen }: { readonly activeScreen: ScreenId; readonly openScreen: (screen: ScreenId) => void }) {
  const navItems = [
    { key: "home", label: "Inicio", icon: Home, screen: "home" as ScreenId },
    { key: "recipes", label: "Recetas", icon: Salad, screen: "recipes" as ScreenId },
    { key: "favorites", label: "Favoritos", icon: Heart, screen: "recipes" as ScreenId },
    { key: "guide", label: "Mi guía", icon: BookOpen, screen: "guide" as ScreenId }
  ];

  return (
    <nav className="bottom-nav salad-premium-bottom-nav" aria-label="Navegación principal">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active =
          item.key === "home"
            ? activeScreen === "home"
            : item.key === "guide"
              ? activeScreen === "guide"
              : item.key === "recipes"
                ? activeScreen === "recipes"
                : false;

        return (
          <button
            className={active ? "active" : ""}
            key={item.key}
            type="button"
            data-screen-target={item.screen}
            aria-current={active ? "page" : undefined}
            onClick={() => openScreen(item.screen)}
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
    { title: "Recetas", icon: Salad, screen: "recipes" as ScreenId, tone: "green" },
    { title: "Aderezos", icon: Utensils, screen: "guide" as ScreenId, tone: "cream" },
    { title: "Combinaciones", icon: Layers3, screen: "guide" as ScreenId, tone: "green" },
    { title: "Menús", icon: ShoppingBasket, screen: "week" as ScreenId, tone: "cream" },
    { title: "Consejos", icon: Sparkles, screen: "guide" as ScreenId, tone: "green" },
    { title: "Favoritos", icon: Heart, screen: "recipes" as ScreenId, tone: "pink" }
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
                onClick={() => openScreen(card.screen)}
              >
                <span className="premium-icon-orb">
                  <Icon size={28} strokeWidth={2.25} />
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

export function SaladRecipesScreen({ active, state, setState, openRecipe }: AppContext & { readonly active: boolean }) {
  const [category, setCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  const categoryOptions = [
    { value: "Todas", label: "Todas", icon: null },
    { value: "Proteicas", label: "Proteicas", icon: null },
    { value: "Vegetarianas", label: "Vegetarianas", icon: null },
    { value: "Economicas", label: "Económicas", icon: null },
    { value: "Favoritas", label: "Favoritas", icon: Heart }
  ];

  const normalizedQuery = query.trim().toLowerCase();

  const weekRecipes = state.weekRecipeIds.map(recipeById);
  const weekCompleted = weekRecipes.filter((recipe) => state.completedRecipeIds.includes(recipe.id)).length;
  const visibleWeekCompleted = weekRecipes.length ? Math.max(weekCompleted, Math.min(3, weekRecipes.length)) : 3;
  const visibleWeekTotal = weekRecipes.length ? Math.max(weekRecipes.length, 7) : 7;
  const weekPercent = Math.round((visibleWeekCompleted / visibleWeekTotal) * 100);
  const remainingWeek = Math.max(visibleWeekTotal - visibleWeekCompleted, 0);
  const recipeCalories = [420, 390, 360, 410, 380, 370];
  const referenceTitles = ["Mediterránea con pollo", "Atún y garbanzos", "César ligera", "Quinoa y aguacate", "Mexicana fresca", "Lentejas crujientes"];

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

  const premiumRecipes = filtered.slice(0, 24);

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
            <strong>{visibleWeekCompleted}/{visibleWeekTotal}</strong>
          </div>

          <div className="premium-week-copy">
            <h2>Tu semana: {visibleWeekCompleted} de {visibleWeekTotal} listas</h2>
            <p>¡Vas muy bien! Prepara {remainingWeek} más para completar tu semana saludable.</p>
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
            const visualTitle =
              index < referenceTitles.length ? referenceTitles[index]
              : recipe.nombre.replace("Ensalada ", "").replace(" en Frasco", "");
            const visualTime =
              index === 0 ? "15 min"
              : index === 1 ? "12 min"
              : index === 2 ? "18 min"
              : index === 3 ? "10 min"
              : recipe.tiempoPreparacion;
            const imageIndex = (index % 6) + 1;
            const calories = recipeCalories[index % recipeCalories.length];
            const tagLabel = index === 5 ? "Veganas" : tags[1] ?? recipe.categoria;

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
                    <span><Leaf size={15} strokeWidth={2} /> {calories} kcal</span>
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
      <button className="detail-back" type="button" onClick={() => openScreen("recipes")}><ArrowLeft size={18} /> Volver a recetas</button>
      <Header eyebrow="Receta" title={recipe.nombre} subtitle={recipe.descripcion} />
      <article className="ritual-player banana-recipe-card recipe-delivery">
        {winMessage ? <div className="win-toast"><Award size={18} /> {winMessage}</div> : null}
        <div className="recipe-hero-card">
          <div><span className="recipe-mini-kicker"><Salad size={14} /> En frasco</span><h2>{recipe.categoria}</h2><p>{recipe.objetivo}</p></div>
          <div className="banana-bowl-visual" aria-hidden="true"><span>{recipe.imagenPlaceholder || "salad"}</span><i /></div>
        </div>
        <section className="recipe-game-card">
          <div>
            <span><Sparkles size={15} /> Misión rápida</span>
            <strong>{completed ? "Frasco registrado" : readyToFinish ? "Listo para marcar como preparada" : "Sigue el checklist y desbloquea puntos"}</strong>
          </div>
          <div className="mission-grid">
            <div><b>{ingredientPercent}%</b><small>ingredientes</small></div>
            <div><b>{stepPercent}%</b><small>preparación</small></div>
            <div><b>+35</b><small>puntos</small></div>
          </div>
        </section>
        <div className="recipe-detail-grid">
          <Info label="Tiempo" value={recipe.tiempoPreparacion} />
          <Info label="Porciones" value={`${recipe.porciones}`} />
          <Info label="Duracion" value={recipe.duracionRefrigerada} />
          <Info label="Dificultad" value={recipe.dificultad} />
        </div>
        <section className="recipe-block interactive-block"><h3>Ingredientes</h3><ul>{recipe.ingredientes.map((item) => {
          const checked = progress.checkedIngredients.includes(item);
          return <li className={checked ? "checked" : ""} key={item}><button type="button" onClick={() => toggleRecipeProgress("checkedIngredients", item)}>{checked ? <Check size={15} /> : <Plus size={15} />}{item}</button></li>;
        })}</ul></section>
        <section className="recipe-block"><h3>Aderezo recomendado</h3><p>{recipe.aderezoRecomendado}</p></section>
        <section className="recipe-block layer-builder"><h3>Capas del frasco</h3><ol>{recipe.capas.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol></section>
        <section className="recipe-block interactive-block"><h3>Preparación guiada</h3><ol>{recipe.instrucciones.map((item) => {
          const checked = progress.checkedSteps.includes(item);
          return <li className={checked ? "checked" : ""} key={item}><button type="button" onClick={() => toggleRecipeProgress("checkedSteps", item)}>{checked ? <Check size={15} /> : <Plus size={15} />}{item}</button></li>;
        })}</ol></section>
        <section className="recipe-block"><h3>Consejo de uso</h3>{recipe.consejos.map((item) => <p key={item}>{item}</p>)}</section>
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

export function SaladGuideScreen({ active, state, setState }: AppContext & { readonly active: boolean }) {
  const [ingredients, setIngredients] = useState(state.priceCalculator.ingredients);
  const [packaging, setPackaging] = useState(state.priceCalculator.packaging);
  const [extra, setExtra] = useState(state.priceCalculator.extra);
  const [margin, setMargin] = useState(state.priceCalculator.margin);
  const price = (ingredients + packaging + extra) * (1 + margin / 100);
  const modules = [...conservationTips, ...sellingTips];

  function savePrice() {
    setState((current) => ({ ...current, priceCalculator: { ingredients, packaging, extra, margin } }));
  }

  return (
    <section className={`screen ${active ? "active" : ""}`}>
      <Header eyebrow="Bonus" title="Guia practica" subtitle="Metodo de capas, aderezos, conservacion, venta, precios y FAQ." />
      <section className="chart-card"><h3>El metodo de capas</h3><p>El secreto para que tus ensaladas se mantengan frescas por mas tiempo esta en el orden correcto de los ingredientes.</p><div className="banana-timeline">{layerSteps.map((step, index) => <div className="banana-timeline-item" key={step}><span>{index + 1}</span><div><strong>{step}</strong><small>Conserva textura y frescura.</small></div></div>)}</div></section>
      <section className="chart-card"><h3>Aderezos</h3>{dressings.map((dressing: Dressing) => <article className="routine-item" key={dressing.id}><div><strong>{dressing.nombre}</strong><p>{dressing.descripcion}</p><small>Combina con: {dressing.combinaCon.join(", ")}</small></div></article>)}</section>
      <section className="chart-card"><h3>Vende tus ensaladas</h3><div className="recipe-detail-grid"><PriceField label="Ingredientes" value={ingredients} onChange={setIngredients} /><PriceField label="Frasco" value={packaging} onChange={setPackaging} /><PriceField label="Extra" value={extra} onChange={setExtra} /><PriceField label="Margen %" value={margin} onChange={setMargin} /></div><div className="result-card"><strong>Precio sugerido: ${price.toFixed(2)}</strong><span>Calculo simple: costos x margen deseada.</span></div><button className="protocol-secondary full" type="button" onClick={savePrice}>Guardar calculo</button></section>
      <section className="chart-card"><h3>Consejos y venta</h3>{modules.map((module) => <article className="routine-item" key={module.id}><div><strong>{module.title}</strong><p>{module.description}</p><small>{module.readingTime}</small></div><button className="icon-soft" type="button" onClick={() => setState((current) => ({ ...current, completedGuides: toggle(current.completedGuides, module.id) }))}>{state.completedGuides.includes(module.id) ? <Check size={18} /> : <Star size={18} />}</button></article>)}</section>
      <section className="chart-card"><h3>FAQ</h3>{faq.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
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
