import { BookOpen, Calculator, CalendarDays, ClipboardCheck, Gift, Heart, Home, Layers3, ListChecks, Salad, ShoppingBasket, Sparkles } from "lucide-react";
import { saladRecipes, type SaladRecipe as CanonicalSaladRecipe } from "./saladRecipes";

export type ScreenId = "home" | "recipes" | "dressings" | "week" | "shopping" | "guide" | "smartMenu";
export type RecipeCategory = "Clasicas" | "Proteicas" | "Vegetarianas" | "Economicas" | "Gourmet" | "Para vender";
export interface SaladRecipe { readonly id:string; readonly nombre:string; readonly categoria:RecipeCategory; readonly objetivo:string; readonly descripcion:string; readonly tiempoPreparacion:string; readonly porciones:number; readonly duracionRefrigerada:string; readonly dificultad:"Facil"|"Media"; readonly ingredientes:readonly string[]; readonly aderezoRecomendado:string; readonly capas:readonly string[]; readonly instrucciones:readonly string[]; readonly consejos:readonly string[]; readonly tags:readonly string[]; readonly imagenPlaceholder:string; }
export interface Dressing { readonly id:string; readonly nombre:string; readonly tipo:string; readonly descripcion:string; readonly ingredientes:readonly string[]; readonly preparacion:readonly string[]; readonly combinaCon:readonly string[]; readonly duracionRefrigerada:string; readonly tags:readonly string[]; }
export interface WeeklyMenu { readonly id:string; readonly titulo:string; readonly descripcion:string; readonly dias:readonly {readonly dia:string; readonly recetaId:string; readonly aderezo:string}[]; }
export interface GuideModule { readonly id:string; readonly title:string; readonly description:string; readonly readingTime:string; readonly paragraphs:readonly string[]; }
export const navigationItems = [{id:"home",label:"Inicio",icon:Home},{id:"recipes",label:"Recetas",icon:Salad},{id:"dressings",label:"Aderezos",icon:ShoppingBasket},{id:"guide",label:"Bonos",icon:Gift},{id:"smartMenu",label:"Menú 21 Días",icon:CalendarDays}] as const;
const categoryToApp: Record<CanonicalSaladRecipe["category"], RecipeCategory> = {
  "Clásicas": "Clasicas",
  Proteicas: "Proteicas",
  Vegetarianas: "Vegetarianas",
  "Económicas": "Economicas",
  Gourmet: "Gourmet",
  "Para vender": "Para vender"
};

const recipeVisuals = ["🥗", "🥙", "🍅", "🥒", "🥬", "🫙", "🌿", "🥕", "🫘", "🍋"] as const;

function slugifyRecipeName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const recipes: readonly SaladRecipe[] = saladRecipes.map((recipe, index) => ({
  id: slugifyRecipeName(recipe.name),
  nombre: recipe.name,
  categoria: categoryToApp[recipe.category],
  objetivo: recipe.shortDescription,
  descripcion: recipe.shortDescription,
  tiempoPreparacion: recipe.prepTime,
  porciones: 1,
  duracionRefrigerada: recipe.estimatedDuration,
  dificultad: recipe.difficulty === "Fácil" ? "Facil" : "Media",
  ingredientes: recipe.ingredients,
  aderezoRecomendado: recipe.dressing,
  capas: recipe.layers,
  instrucciones: [
    recipe.dressingPreparation,
    `Ingredientes del aderezo: ${recipe.dressingIngredients.join(", ")}.`,
    ...recipe.preparation
  ],
  consejos: [recipe.conservationTip],
  tags: recipe.tags,
  imagenPlaceholder: recipeVisuals[index % recipeVisuals.length]
}));
export const dressings: readonly Dressing[] = [
  {
    "id": "aderezo-de-yogur-con-limon",
    "nombre": "Aderezo de yogur con limon",
    "tipo": "Cremoso ligero",
    "descripcion": "Aderezo cremoso ligero para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "yogur natural",
      "limon",
      "sal",
      "pimienta",
      "aceite de oliva"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pollo",
      "atn",
      "ensaladas verdes"
    ],
    "duracionRefrigerada": "3 a 4 dias",
    "tags": [
      "Cremoso ligero",
      "pollo",
      "atn"
    ]
  },
  {
    "id": "vinagreta-clsica",
    "nombre": "Vinagreta clsica",
    "tipo": "Vinagreta",
    "descripcion": "Aderezo vinagreta para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "aceite de oliva",
      "vinagre",
      "sal",
      "pimienta",
      "mostaza"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "garbanzos",
      "lentejas",
      "verduras"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Vinagreta",
      "garbanzos",
      "lentejas"
    ]
  },
  {
    "id": "aderezo-de-mostaza-y-miel",
    "nombre": "Aderezo de mostaza y miel",
    "tipo": "Dulce suave",
    "descripcion": "Aderezo dulce suave para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "mostaza",
      "miel",
      "limon",
      "aceite de oliva"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pollo",
      "manzana",
      "nueces"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Dulce suave",
      "pollo",
      "manzana"
    ]
  },
  {
    "id": "aderezo-verde-de-hierbas",
    "nombre": "Aderezo verde de hierbas",
    "tipo": "Herbal",
    "descripcion": "Aderezo herbal para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "perejil",
      "cilantro",
      "limon",
      "aceite",
      "yogur opcional"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "garbanzos",
      "pollo",
      "quinoa"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Herbal",
      "garbanzos",
      "pollo"
    ]
  },
  {
    "id": "aderezo-ranch-ligero",
    "nombre": "Aderezo ranch ligero",
    "tipo": "Cremoso ligero",
    "descripcion": "Aderezo cremoso ligero para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "yogur",
      "ajo",
      "cebolln",
      "limon",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pollo",
      "pasta",
      "maz"
    ],
    "duracionRefrigerada": "3 a 4 dias",
    "tags": [
      "Cremoso ligero",
      "pollo",
      "pasta"
    ]
  },
  {
    "id": "pesto-ligero",
    "nombre": "Pesto ligero",
    "tipo": "Gourmet",
    "descripcion": "Aderezo gourmet para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "albahaca",
      "aceite de oliva",
      "limon",
      "queso opcional"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "caprese",
      "tomate",
      "mozzarella"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Gourmet",
      "caprese",
      "tomate"
    ]
  },
  {
    "id": "aderezo-de-aguacate",
    "nombre": "Aderezo de aguacate",
    "tipo": "Cremoso verde",
    "descripcion": "Aderezo cremoso verde para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "aguacate",
      "limon",
      "cilantro",
      "agua",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "ensaladas mexicanas",
      "frijoles",
      "pollo"
    ],
    "duracionRefrigerada": "3 a 4 dias",
    "tags": [
      "Cremoso verde",
      "ensaladas mexicanas",
      "frijoles"
    ]
  },
  {
    "id": "aderezo-chipotle",
    "nombre": "Aderezo chipotle",
    "tipo": "Picante suave",
    "descripcion": "Aderezo picante suave para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "yogur",
      "chipotle",
      "limon",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pollo",
      "maz",
      "frijoles"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Picante suave",
      "pollo",
      "maz"
    ]
  },
  {
    "id": "aderezo-curry",
    "nombre": "Aderezo curry",
    "tipo": "Especiado",
    "descripcion": "Aderezo especiado para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "yogur",
      "curry",
      "limon",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pollo",
      "zanahoria",
      "pasas"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Especiado",
      "pollo",
      "zanahoria"
    ]
  },
  {
    "id": "aderezo-balsamico-con-miel",
    "nombre": "Aderezo balsamico con miel",
    "tipo": "Dulce cido",
    "descripcion": "Aderezo dulce cido para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "vinagre balsamico",
      "miel",
      "aceite",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "fresas",
      "espinaca",
      "queso"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Dulce cido",
      "fresas",
      "espinaca"
    ]
  },
  {
    "id": "aderezo-de-cilantro-y-limon",
    "nombre": "Aderezo de cilantro y limon",
    "tipo": "Fresco",
    "descripcion": "Aderezo fresco para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "cilantro",
      "limon",
      "aceite",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "frijoles",
      "garbanzos",
      "aguacate"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Fresco",
      "frijoles",
      "garbanzos"
    ]
  },
  {
    "id": "aderezo-de-soya-ligera",
    "nombre": "Aderezo de soya ligera",
    "tipo": "Oriental",
    "descripcion": "Aderezo oriental para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "salsa de soya",
      "limon",
      "aceite",
      "semillas"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "tofu",
      "pollo oriental",
      "repollo"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Oriental",
      "tofu",
      "pollo oriental"
    ]
  },
  {
    "id": "aderezo-de-yogur-con-hierbas",
    "nombre": "Aderezo de yogur con hierbas",
    "tipo": "Cremoso herbal",
    "descripcion": "Aderezo cremoso herbal para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "yogur",
      "perejil",
      "cebolln",
      "limon",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pasta",
      "pollo",
      "papas"
    ],
    "duracionRefrigerada": "3 a 4 dias",
    "tags": [
      "Cremoso herbal",
      "pasta",
      "pollo"
    ]
  },
  {
    "id": "aderezo-de-limon-y-oregano",
    "nombre": "Aderezo de limon y oregano",
    "tipo": "Mediterraneo",
    "descripcion": "Aderezo mediterrneo para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "limon",
      "aceite",
      "oregano",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "ensalada griega",
      "mediterrnea"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Mediterraneo",
      "ensalada griega",
      "mediterrnea"
    ]
  },
  {
    "id": "aderezo-dulce-picante",
    "nombre": "Aderezo dulce-picante",
    "tipo": "Dulce picante",
    "descripcion": "Aderezo dulce picante para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "miel",
      "limon",
      "chile",
      "aceite"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "garbanzos",
      "zanahoria",
      "pollo"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Dulce picante",
      "garbanzos",
      "zanahoria"
    ]
  },
  {
    "id": "aderezo-de-ajo-suave",
    "nombre": "Aderezo de ajo suave",
    "tipo": "Cremoso suave",
    "descripcion": "Aderezo cremoso suave para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "yogur",
      "ajo",
      "limon",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "pollo",
      "papa",
      "vegetales"
    ],
    "duracionRefrigerada": "3 a 4 dias",
    "tags": [
      "Cremoso suave",
      "pollo",
      "papa"
    ]
  },
  {
    "id": "aderezo-de-naranja",
    "nombre": "Aderezo de naranja",
    "tipo": "Citrico",
    "descripcion": "Aderezo ctrico para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "jugo de naranja",
      "limon",
      "aceite",
      "mostaza"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "ensaladas tropicales"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Citrico",
      "ensaladas tropicales"
    ]
  },
  {
    "id": "aderezo-cremoso-de-queso",
    "nombre": "Aderezo cremoso de queso",
    "tipo": "Cremoso gourmet",
    "descripcion": "Aderezo cremoso gourmet para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "queso fresco",
      "yogur",
      "limon",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "ensaladas gourmet"
    ],
    "duracionRefrigerada": "3 a 4 dias",
    "tags": [
      "Cremoso gourmet",
      "ensaladas gourmet"
    ]
  },
  {
    "id": "aderezo-de-tahini-ligero",
    "nombre": "Aderezo de tahini ligero",
    "tipo": "Vegano cremoso",
    "descripcion": "Aderezo vegano cremoso para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "tahini",
      "limon",
      "agua",
      "sal"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "garbanzos",
      "quinoa",
      "verduras"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Vegano cremoso",
      "garbanzos",
      "quinoa"
    ]
  },
  {
    "id": "aderezo-simple-de-limon",
    "nombre": "Aderezo simple de limon",
    "tipo": "Bsico",
    "descripcion": "Aderezo basico para dar sabor sin complicar la preparacion.",
    "ingredientes": [
      "limon",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "preparacion": [
      "Mezcla todos los ingredientes en un frasco pequeo.",
      "Agita bien antes de usar.",
      "Refrigera y prueba la sal al momento de servir."
    ],
    "combinaCon": [
      "casi todas las ensaladas"
    ],
    "duracionRefrigerada": "5 a 7 dias",
    "tags": [
      "Bsico",
      "casi todas las ensaladas"
    ]
  }
] as readonly Dressing[];
export const weeklyMenus: readonly WeeklyMenu[] = [
  {
    "id": "menu-3",
    "titulo": "Menu de 3 dias",
    "descripcion": "Tres frascos faciles para empezar sin complicarte.",
    "dias": [
      {
        "dia": "Da 1",
        "recetaId": "ensalada-mediterranea-en-frasco",
        "aderezo": "Aderezo simple de limon"
      },
      {
        "dia": "Da 2",
        "recetaId": "ensalada-de-atun-y-maiz",
        "aderezo": "Aderezo de yogur con limon"
      },
      {
        "dia": "Da 3",
        "recetaId": "ensalada-de-garbanzos-y-pepino",
        "aderezo": "Vinagreta clsica"
      }
    ]
  },
  {
    "id": "menu-5",
    "titulo": "Menu de 5 dias",
    "descripcion": "Ideal para organizar almuerzos de lunes a viernes.",
    "dias": [
      {
        "dia": "Lunes",
        "recetaId": "ensalada-cesar-ligera-en-frasco",
        "aderezo": "Aderezo ranch ligero"
      },
      {
        "dia": "Martes",
        "recetaId": "ensalada-de-quinoa-colorida",
        "aderezo": "Aderezo verde de hierbas"
      },
      {
        "dia": "Mircoles",
        "recetaId": "ensalada-mexicana-en-frasco",
        "aderezo": "Aderezo de cilantro y limon"
      },
      {
        "dia": "Jueves",
        "recetaId": "ensalada-de-pasta-fria",
        "aderezo": "Aderezo de yogur con hierbas"
      },
      {
        "dia": "Viernes",
        "recetaId": "ensalada-griega",
        "aderezo": "Aderezo de limon y oregano"
      }
    ]
  },
  {
    "id": "menu-7",
    "titulo": "Menu de 7 dias",
    "descripcion": "Una semana completa con variedad y buena rotacin.",
    "dias": [
      {
        "dia": "Da 1",
        "recetaId": "ensalada-de-pollo-con-aguacate",
        "aderezo": "Aderezo simple de limon"
      },
      {
        "dia": "Da 2",
        "recetaId": "ensalada-de-lentejas",
        "aderezo": "Vinagreta clsica"
      },
      {
        "dia": "Da 3",
        "recetaId": "ensalada-tropical",
        "aderezo": "Aderezo de mostaza y miel"
      },
      {
        "dia": "Da 4",
        "recetaId": "ensalada-de-arroz-integral",
        "aderezo": "Aderezo de limon y oregano"
      },
      {
        "dia": "Da 5",
        "recetaId": "ensalada-de-pollo-chipotle",
        "aderezo": "Aderezo chipotle"
      },
      {
        "dia": "Da 6",
        "recetaId": "ensalada-caprese-en-frasco",
        "aderezo": "Pesto ligero"
      },
      {
        "dia": "Da 7",
        "recetaId": "ensalada-verde-crujiente",
        "aderezo": "Aderezo de naranja"
      }
    ]
  },
  {
    "id": "economico",
    "titulo": "Menu economico",
    "descripcion": "Frascos rendidores con ingredientes faciles de encontrar.",
    "dias": [
      {
        "dia": "Da 1",
        "recetaId": "ensalada-de-huevo-y-papa",
        "aderezo": "Aderezo de yogur con hierbas"
      },
      {
        "dia": "Da 2",
        "recetaId": "ensalada-economica-de-maiz",
        "aderezo": "Aderezo de yogur con limon"
      },
      {
        "dia": "Da 3",
        "recetaId": "ensalada-de-pasta-con-atun",
        "aderezo": "Aderezo de yogur con hierbas"
      }
    ]
  },
  {
    "id": "vegetariano",
    "titulo": "Menu vegetariano",
    "descripcion": "Opciones vegetales coloridias y saciantes.",
    "dias": [
      {
        "dia": "Da 1",
        "recetaId": "ensalada-de-garbanzos-y-pepino",
        "aderezo": "Vinagreta clsica"
      },
      {
        "dia": "Da 2",
        "recetaId": "ensalada-de-tofu-y-vegetales",
        "aderezo": "Aderezo de soya ligera"
      },
      {
        "dia": "Da 3",
        "recetaId": "ensalada-de-quinoa-y-frijoles",
        "aderezo": "Aderezo de cilantro y limon"
      }
    ]
  },
  {
    "id": "proteico",
    "titulo": "Menu alto en proteina",
    "descripcion": "Para almuerzos mas completos y practicos.",
    "dias": [
      {
        "dia": "Da 1",
        "recetaId": "ensalada-proteica-de-pavo",
        "aderezo": "Aderezo de yogur con limon"
      },
      {
        "dia": "Da 2",
        "recetaId": "ensalada-de-quinoa-proteica",
        "aderezo": "Aderezo de yogur con hierbas"
      },
      {
        "dia": "Da 3",
        "recetaId": "ensalada-proteica-para-gimnasio",
        "aderezo": "Aderezo simple de limon"
      }
    ]
  },
  {
    "id": "vender",
    "titulo": "Menu para vender",
    "descripcion": "Ideas bonitas, rendidoras y faciles de ofrecer por WhatsApp.",
    "dias": [
      {
        "dia": "Combo 1",
        "recetaId": "ensalada-colorida-para-vender",
        "aderezo": "Vinagreta clsica"
      },
      {
        "dia": "Combo 2",
        "recetaId": "ensalada-de-pollo-para-clientes",
        "aderezo": "Aderezo ranch ligero"
      },
      {
        "dia": "Combo 3",
        "recetaId": "ensalada-premium-caprese-para-vender",
        "aderezo": "Pesto ligero"
      }
    ]
  }
] as readonly WeeklyMenu[];
export const layerSteps = [
  "Aderezo en el fondo o separado",
  "Ingredientes firmes",
  "Granos y proteinas",
  "Vegetales medios",
  "Quesos, semillas y toppings",
  "Hojas verdes en la parte superior"
] as const;
export const conservationTips: readonly GuideModule[] = [
  {
    "id": "higienizar",
    "title": "Cmo higienizar las hojas",
    "description": "Lava, desinfecta y seca antes de montar.",
    "readingTime": "3 min",
    "paragraphs": [
      "Lava las hojas con agua corriente y usa el mtodo de desinfeccin recomendado en tu pas.",
      "El secado es clave: hojas hmedias se marchitan mas rapido dentro del frasco."
    ]
  },
  {
    "id": "secar",
    "title": "Cmo secar correctamente",
    "description": "La humedad acorta la duracion.",
    "readingTime": "2 min",
    "paragraphs": [
      "Usa centrifugadora de hojas o paos limpios.",
      "Guarda las hojas arriba, lejos del aderezo y de ingredientes muy jugosos."
    ]
  },
  {
    "id": "duracion",
    "title": "Qu ingredientes duran ms",
    "description": "Bases firmes conservan mejor textura.",
    "readingTime": "3 min",
    "paragraphs": [
      "Garbanzos, lentejas, quinoa, zanahoria, pepino y repollo suelen aguantar mejor.",
      "Aguacate, fresas y crutones son mejores para consumir rapido o llevar separados."
    ]
  },
  {
    "id": "transporte",
    "title": "Cmo transportar los frascos",
    "description": "Evita derrames y prdida de textura.",
    "readingTime": "2 min",
    "paragraphs": [
      "Usa frascos con tapa firme y mantenlos verticales.",
      "Para venta o trabajo, lleva el frasco en bolsa trmica si pasar tiempo fuera del refrigerador."
    ]
  }
] as readonly GuideModule[];
export const sellingTips: readonly GuideModule[] = [
  {
    "id": "empaques",
    "title": "Frascos y empaques",
    "description": "Elige presentaciones bonitas y seguras.",
    "readingTime": "4 min",
    "paragraphs": [
      "Usa frascos transparentes para que las capas vendan visualmente.",
      "Etiqueta sabor, fecha de preparacion, duracion sugerida y aderezo."
    ]
  },
  {
    "id": "precios",
    "title": "Cmo calcular precios",
    "description": "Costo + empaque + margen.",
    "readingTime": "3 min",
    "paragraphs": [
      "Suma costo de ingredientes, frasco, etiqueta, bolsa y extras.",
      "Aplica margen y revisa precios de tu zona antes de publicar."
    ]
  },
  {
    "id": "whatsapp",
    "title": "Cmo ofrecer por WhatsApp",
    "description": "Fotos simples, combos claros y entrega organizada.",
    "readingTime": "5 min",
    "paragraphs": [
      "Publica 3 combos semanales en vez de demasiadias opciones.",
      "Toma foto con luz natural, fondo limpio y nombre del sabor visible."
    ]
  }
] as readonly GuideModule[];
export const faq = [
  [
    "Cmo recibo la gua",
    "Despus de confirmar tu compra, recibirs el acceso directamente en tu correo electrnico. Puedes entrar desde celular, tablet o computadora."
  ],
  [
    "Por cunto tiempo tengo acceso",
    "El acceso es de por vida. Puedes consultar tus recetas, mens y actualizaciones siempre que quieras."
  ],
  [
    "Puedo imprimir el material",
    "S. Puedes imprimir recetas, listas y mens para organizar tu semana con mas facilidad."
  ],
  [
    "Las recetas son faciles de preparar",
    "S. Todias las recetas fueron pensadias para ser simples, practicas y con ingredientes faciles de encontrar."
  ],
  [
    "Las ensaladas realmente duran toda la semana",
    "La gua ensea el orden correcto de las capas, la conservacion ideal y los cuidados para mantener las ensaladas frescas por mas tiempo. La duracion puede variar segun los ingredientes y la refrigeracion."
  ],
  [
    "Puedo usar para vender",
    "S. Incluimos ideas de presentacin, combinaciones, organizacion y una gua simple para fijar precios."
  ],
  [
    "Tiene garanta",
    "S. Tienes 7 dias para probar. Si no te gusta, puedes solicitar el reembolso dentro del plazo de garanta."
  ]
] as const;
export const homeCards = [{title:'Recetas',text:'Explora recetas listas para organizar tu semana.',icon:Salad,screen:'recipes' as ScreenId},{title:'Aderezos',text:'Dale mas sabor a tus ensaladas con aderezos simples y ligeros.',icon:Sparkles,screen:'dressings' as ScreenId},{title:'Menus',text:'Elige un menu de 3, 5 o 7 dias y prepara todo con mas facilidad.',icon:ListChecks,screen:'week' as ScreenId},{title:'Lista de compras',text:'Genera una lista practica segun las recetas que elijas.',icon:ShoppingBasket,screen:'shopping' as ScreenId},{title:'Conservacion',text:'Aprende como mantener textura, sabor y frescura por mas tiempo.',icon:Layers3,screen:'guide' as ScreenId},{title:'Vender',text:'Ideas simples para presentar, organizar y fijar precios.',icon:Calculator,screen:'guide' as ScreenId},{title:'Favoritas',text:'Guarda tus recetas preferidas para encontrarlas rapido.',icon:Heart,screen:'recipes' as ScreenId},{title:'Guia practica',text:'Metodo de capas, conservacion, menus y FAQ en un solo lugar.',icon:BookOpen,screen:'guide' as ScreenId}] as const;



