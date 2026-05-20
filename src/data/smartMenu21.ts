export type SmartMenuTab = "semana-1" | "semana-2" | "semana-3" | "compras" | "preparacion" | "calendario";

export type MenuDay = {
  readonly day: number;
  readonly week: 1 | 2 | 3;
  readonly title: string;
  readonly tag: string;
  readonly time: string;
  readonly ingredients: readonly string[];
  readonly recipeHint: string;
};

export type ShoppingList = {
  readonly week: 1 | 2 | 3;
  readonly title: string;
  readonly verduras: readonly string[];
  readonly proteinas: readonly string[];
  readonly granos: readonly string[];
  readonly aderezos: readonly string[];
  readonly extras: readonly string[];
};

export type PrepStep = {
  readonly title: string;
  readonly duration: string;
  readonly description: string;
};

export const smartMenuWeeks = [
  {
    week: 1,
    tab: "semana-1",
    title: "Semana 1",
    fullTitle: "Semana 1 - Organización simple",
    goal: "Empezar con combinaciones fáciles, económicas y rápidas para crear el hábito."
  },
  {
    week: 2,
    tab: "semana-2",
    title: "Semana 2",
    fullTitle: "Semana 2 - Más variedad, menos antojos",
    goal: "Agregar proteínas, aderezos y texturas diferentes para evitar aburrirte."
  },
  {
    week: 3,
    tab: "semana-3",
    title: "Semana 3",
    fullTitle: "Semana 3 - Rutina completa",
    goal: "Consolidar una rutina práctica para mantener tus ensaladas listas sin depender del delivery."
  }
] as const;

export const smartMenuDays: readonly MenuDay[] = [
  { day: 1, week: 1, title: "Ensalada de pollo, maíz y aderezo cremoso", tag: "Alta en proteína", time: "10 min", ingredients: ["pollo", "lechuga", "maíz", "zanahoria", "aderezo de yogur"], recipeHint: "pollo maiz" },
  { day: 2, week: 1, title: "Ensalada de atún con garbanzos", tag: "Súper saciante", time: "8 min", ingredients: ["atún", "garbanzos", "tomate", "pepino", "hojas verdes"], recipeHint: "atun garbanzos" },
  { day: 3, week: 1, title: "Ensalada mediterránea en frasco", tag: "Fresca", time: "10 min", ingredients: ["queso", "tomate", "pepino", "aceitunas", "hojas verdes"], recipeHint: "mediterranea" },
  { day: 4, week: 1, title: "Ensalada de huevo con vegetales", tag: "Económica", time: "9 min", ingredients: ["huevo", "zanahoria", "repollo", "lechuga", "aderezo ligero"], recipeHint: "huevo vegetales" },
  { day: 5, week: 1, title: "Ensalada Big Mac saludable", tag: "Antojo controlado", time: "12 min", ingredients: ["carne magra o pollo", "lechuga", "pepinillos", "queso", "salsa Big Mac saludable"], recipeHint: "big mac pollo" },
  { day: 6, week: 1, title: "Ensalada de pollo con arroz integral", tag: "Completa", time: "12 min", ingredients: ["pollo", "arroz integral", "tomate", "zanahoria", "hojas verdes"], recipeHint: "arroz integral pollo" },
  { day: 7, week: 1, title: "Ensalada detox verde en frasco", tag: "Ligera", time: "8 min", ingredients: ["pepino", "manzana verde", "espinaca", "lechuga", "semillas"], recipeHint: "verde crujiente" },
  { day: 8, week: 2, title: "Ensalada de quinoa colorida", tag: "Energía estable", time: "15 min", ingredients: ["quinoa", "pepino", "zanahoria", "tomate", "maíz"], recipeHint: "quinoa colorida" },
  { day: 9, week: 2, title: "Ensalada César ligera en frasco", tag: "Clásica práctica", time: "12 min", ingredients: ["pollo", "lechuga romana", "parmesano", "tomate", "aderezo César ligero"], recipeHint: "cesar ligera" },
  { day: 10, week: 2, title: "Ensalada mexicana con frijoles", tag: "Para llevar", time: "10 min", ingredients: ["frijoles", "maíz", "tomate", "aguacate", "cilantro"], recipeHint: "mexicana frijoles" },
  { day: 11, week: 2, title: "Ensalada de pasta fría con pollo", tag: "Rendidora", time: "14 min", ingredients: ["pasta corta", "pollo", "maíz", "zanahoria", "hojas verdes"], recipeHint: "pasta fria" },
  { day: 12, week: 2, title: "Ensalada de garbanzos y pepino", tag: "Sin complicación", time: "8 min", ingredients: ["garbanzos", "pepino", "tomate", "cebolla morada", "perejil"], recipeHint: "garbanzos pepino" },
  { day: 13, week: 2, title: "Ensalada de pollo curry", tag: "Sabor diferente", time: "12 min", ingredients: ["pollo", "zanahoria", "repollo", "pasas", "aderezo de curry"], recipeHint: "pollo curry" },
  { day: 14, week: 2, title: "Ensalada caprese en frasco", tag: "Bonita y fresca", time: "9 min", ingredients: ["tomate cherry", "mozzarella", "albahaca", "hojas verdes", "pesto ligero"], recipeHint: "caprese" },
  { day: 15, week: 3, title: "Ensalada de lentejas organizada", tag: "Económica", time: "12 min", ingredients: ["lentejas", "tomate", "pepino", "cebolla", "zanahoria"], recipeHint: "lentejas" },
  { day: 16, week: 3, title: "Ensalada de pollo con mango", tag: "Dulce y fresca", time: "12 min", ingredients: ["pollo", "mango", "pepino", "repollo", "lechuga"], recipeHint: "pollo mango" },
  { day: 17, week: 3, title: "Ensalada vegana de frijoles", tag: "Vegetal completa", time: "10 min", ingredients: ["frijoles", "maíz", "tomate", "cebolla", "lechuga"], recipeHint: "vegana frijoles" },
  { day: 18, week: 3, title: "Ensalada de pavo y huevo", tag: "Alta en proteína", time: "11 min", ingredients: ["pavo", "huevo", "pepino", "tomate", "lechuga"], recipeHint: "pavo huevo" },
  { day: 19, week: 3, title: "Ensalada tropical con semillas", tag: "Antojo controlado", time: "10 min", ingredients: ["pollo", "piña", "zanahoria", "repollo morado", "semillas"], recipeHint: "tropical" },
  { day: 20, week: 3, title: "Ensalada de couscous y garbanzos", tag: "Rápida", time: "10 min", ingredients: ["couscous", "garbanzos", "pepino", "tomate", "perejil"], recipeHint: "couscous" },
  { day: 21, week: 3, title: "Ensalada especial de la semana", tag: "Rutina completa", time: "13 min", ingredients: ["pollo", "garbanzos", "tomate", "pepino", "queso"], recipeHint: "especial semana" }
];

export const smartMenuShoppingLists: readonly ShoppingList[] = [
  {
    week: 1,
    title: "Lista Semana 1",
    verduras: ["Lechuga", "Espinaca", "Pepino", "Tomate", "Zanahoria", "Repollo", "Manzana verde"],
    proteinas: ["Pollo", "Atún", "Huevo", "Garbanzos", "Queso", "Carne magra opcional"],
    granos: ["Arroz integral", "Maíz", "Semillas"],
    aderezos: ["Yogur natural", "Limón", "Aceite de oliva", "Mostaza", "Pepinillos", "Especias"],
    extras: ["Frascos limpios", "Etiquetas", "Recipientes pequeños para toppings"]
  },
  {
    week: 2,
    title: "Lista Semana 2",
    verduras: ["Lechuga romana", "Pepino", "Tomate cherry", "Zanahoria", "Repollo", "Cilantro", "Albahaca"],
    proteinas: ["Pollo", "Garbanzos", "Frijoles", "Mozzarella", "Queso parmesano"],
    granos: ["Quinoa", "Pasta corta", "Maíz"],
    aderezos: ["Yogur natural", "Limón", "Pesto ligero", "Curry", "Aceite de oliva", "Vinagre"],
    extras: ["Aguacate", "Pasas", "Crutones separados"]
  },
  {
    week: 3,
    title: "Lista Semana 3",
    verduras: ["Lechuga", "Pepino", "Tomate", "Cebolla", "Zanahoria", "Repollo morado", "Perejil"],
    proteinas: ["Pollo", "Pavo", "Huevo", "Frijoles", "Lentejas", "Queso"],
    granos: ["Couscous", "Garbanzos", "Maíz"],
    aderezos: ["Yogur natural", "Limón", "Aceite", "Mostaza", "Hierbas", "Salsa ligera"],
    extras: ["Mango", "Piña", "Semillas", "Frascos para 7 días"]
  }
];

export const smartMenuPrepSteps: readonly PrepStep[] = [
  { title: "Lava y seca las hojas", duration: "5 minutos", description: "Lava lechuga, espinaca y vegetales. Seca bien para que duren más." },
  { title: "Corta los vegetales", duration: "8 minutos", description: "Deja zanahoria, pepino, tomate y repollo listos en recipientes separados." },
  { title: "Prepara las proteínas", duration: "7 minutos", description: "Cocina o separa pollo, huevo, atún, garbanzos o queso según la semana." },
  { title: "Prepara los aderezos", duration: "5 minutos", description: "Haz 2 o 3 aderezos base para variar el sabor durante la semana." },
  { title: "Monta o deja preorganizado", duration: "5 minutos", description: "Coloca primero el aderezo, luego ingredientes firmes, proteínas, granos y al final las hojas." }
];
