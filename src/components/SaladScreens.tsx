import { useState, type Dispatch, type SetStateAction } from "react";
import { ArrowLeft, Bell, BookOpen, Check, ChevronRight, Copy, Heart, Home, Layers3, Menu, Plus, Salad, Search, ShoppingBasket, Sparkles, Star, Trash2, Utensils } from "lucide-react";
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
    { key: "search", label: "Buscar", icon: Search, screen: "recipes" as ScreenId },
    { key: "favorites", label: "Favoritos", icon: Heart, screen: "recipes" as ScreenId },
    { key: "guide", label: "Mi guia", icon: BookOpen, screen: "guide" as ScreenId }
  ];

  return (
    <nav className="bottom-nav" aria-label="Navegacion principal">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = item.key === "home" ? activeScreen === "home" : item.key === "guide" ? activeScreen === "guide" : item.key === "search" ? activeScreen === "recipes" : false;
        return (
          <button className={active ? "active" : ""} key={item.key} type="button" onClick={() => openScreen(item.screen)}>
            <Icon size={20} />
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
    { title: "Recetas", icon: Salad, screen: "recipes" as ScreenId },
    { title: "Aderezos", icon: Utensils, screen: "guide" as ScreenId },
    { title: "Combinaciones", icon: Layers3, screen: "guide" as ScreenId },
    { title: "Menús", icon: ShoppingBasket, screen: "week" as ScreenId },
    { title: "Consejos", icon: Sparkles, screen: "guide" as ScreenId },
    { title: "Favoritos", icon: Heart, screen: "recipes" as ScreenId }
  ];

  return (
    <section className={`screen salad-home ${active ? "active" : ""}`}>
      <header className="salad-header">
        <button className="salad-header-btn" type="button" aria-label="Abrir menu"><Menu size={22} /></button>
        <div className="salad-brand"><strong>Ensaladas</strong><span>EN FRASCO</span></div>
        <button className="salad-header-btn" type="button" aria-label="Notificaciones"><Bell size={20} /></button>
      </header>
      <section className="salad-hero">
        <div className="salad-jars" aria-label="Potes de ensalada">
          {[0, 1, 2, 3].map((item) => <span key={item}><i /><b /><em /><small /></span>)}
        </div>
        <div className="salad-welcome">
          <h1>¡Bienvenida!</h1>
          <p>Tu guía completa para preparar ensaladas en frasco deliciosas, saludables y prácticas.</p>
        </div>
        <div className="salad-personal-badge"><Sparkles size={15} /><strong>Aplicación personalizada</strong></div>
      </section>
      <section className="salad-explore">
        <div className="section-inline-head"><h3>Explorar</h3></div>
        <div className="salad-explore-grid">
          {exploreCards.map((card) => {
            const Icon = card.icon;
            return <button className="salad-explore-card" key={card.title} type="button" onClick={() => openScreen(card.screen)}><Icon size={25} /><strong>{card.title}</strong></button>;
          })}
        </div>
      </section>
    </section>
  );
}

export function SaladRecipesScreen({ active, state, setState, openRecipe }: AppContext & { readonly active: boolean }) {
  const [category, setCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = recipes.filter((recipe) => {
    const byCategory = category === "Todas"
      || recipe.categoria === category
      || (category === "Favoritas" && state.favoriteRecipeIds.includes(recipe.id))
      || (category === "Mi semana" && state.weekRecipeIds.includes(recipe.id));
    const searchable = [
      recipe.nombre,
      recipe.categoria,
      recipe.aderezoRecomendado,
      ...recipe.ingredientes,
      ...recipe.tags
    ].join(" ").toLowerCase();
    const byQuery = normalizedQuery.length === 0 || searchable.includes(normalizedQuery);
    return byCategory && byQuery;
  });
  const categories = ["Todas", "Favoritas", "Mi semana", "Clasicas", "Proteicas", "Vegetarianas", "Economicas", "Gourmet", "Para vender"];

  return (
    <section className={`screen ${active ? "active" : ""}`}>
      <Header eyebrow="Recetas" title="60 ensaladas en frasco" subtitle="Explora recetas listas para organizar tu semana, guardar favoritas o sumar a tu menu." />
      <label className="search-bar"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por receta o ingrediente..." /></label>
      <div className="category-row">{categories.map((item) => <button className={item === category ? "active" : ""} key={item} type="button" onClick={() => setCategory(item)}>{item}</button>)}</div>
      {filtered.length === 0 ? <EmptyState title="Nada guardado aqui todavia" text="Marca recetas como favoritas o agrega recetas a tu semana para verlas en este filtro." /> : null}
      <div className="session-list">
        {filtered.map((recipe) => {
          const favorite = state.favoriteRecipeIds.includes(recipe.id);
          return (
            <article className="session-row" key={recipe.id}>
              <div className="session-thumb">{recipe.imagenPlaceholder || "🥗"}</div>
              <div><strong>{recipe.nombre}</strong><p>{recipe.categoria} · {recipe.tiempoPreparacion} · dura {recipe.duracionRefrigerada}</p></div>
              <button type="button" className="icon-soft" aria-label="Guardar favorita" onClick={() => setState((current) => ({ ...current, favoriteRecipeIds: toggle(current.favoriteRecipeIds, recipe.id) }))}><Heart size={18} fill={favorite ? "currentColor" : "none"} /></button>
              <button type="button" className="icon-soft" aria-label="Ver receta" onClick={() => openRecipe(recipe)}><ChevronRight size={18} /></button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function SaladRecipeDetail({ active, recipe, state, setState, openScreen }: { readonly active: boolean; readonly recipe: SaladRecipe; readonly state: SaladState; readonly setState: Dispatch<SetStateAction<SaladState>>; readonly openScreen: (screen: ScreenId) => void }) {
  const favorite = state.favoriteRecipeIds.includes(recipe.id);
  const inWeek = state.weekRecipeIds.includes(recipe.id);
  const completed = state.completedRecipeIds.includes(recipe.id);

  return (
    <section className={`screen ${active ? "active" : ""}`}>
      <button className="detail-back" type="button" onClick={() => openScreen("recipes")}><ArrowLeft size={18} /> Volver a recetas</button>
      <Header eyebrow="Receta" title={recipe.nombre} subtitle={recipe.descripcion} />
      <article className="ritual-player banana-recipe-card recipe-delivery">
        <div className="recipe-hero-card">
          <div><span className="recipe-mini-kicker"><Salad size={14} /> En frasco</span><h2>{recipe.categoria}</h2><p>{recipe.objetivo}</p></div>
          <div className="banana-bowl-visual" aria-hidden="true"><span>{recipe.imagenPlaceholder || "🥗"}</span><i /></div>
        </div>
        <div className="recipe-detail-grid">
          <Info label="Tiempo" value={recipe.tiempoPreparacion} />
          <Info label="Porciones" value={`${recipe.porciones}`} />
          <Info label="Duracion" value={recipe.duracionRefrigerada} />
          <Info label="Dificultad" value={recipe.dificultad} />
        </div>
        <section className="recipe-block"><h3>Ingredientes</h3><ul>{recipe.ingredientes.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="recipe-block"><h3>Aderezo recomendado</h3><p>{recipe.aderezoRecomendado}</p></section>
        <section className="recipe-block"><h3>Capas del frasco</h3><ol>{recipe.capas.map((item) => <li key={item}>{item}</li>)}</ol></section>
        <section className="recipe-block"><h3>Instrucciones</h3><ol>{recipe.instrucciones.map((item) => <li key={item}>{item}</li>)}</ol></section>
        <section className="recipe-block"><h3>Consejo de uso</h3>{recipe.consejos.map((item) => <p key={item}>{item}</p>)}</section>
        <div className="action-stack">
          <button className="protocol-primary full" type="button" onClick={() => setState((current) => ({ ...current, completedRecipeIds: toggle(current.completedRecipeIds, recipe.id) }))}>{completed ? "Marcar como pendiente" : "Marcar como preparada"}</button>
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
          return <button className={`quick-card ${done ? "selected" : ""}`} key={recipe.id} type="button" onClick={() => openRecipe(recipe)}><span>{done ? <Check size={18} /> : recipe.imagenPlaceholder || "🥗"}</span><div><strong>{recipe.nombre}</strong><small>{recipe.aderezoRecomendado}</small></div><ChevronRight size={18} /></button>;
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
