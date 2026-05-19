export type SaladDressingCategory = "Cremosos" | "Citricos" | "Verdes" | "Picantes" | "Dulces" | "Clasicos";

export type SaladDressing = {
  readonly id: string;
  readonly name: string;
  readonly category: SaladDressingCategory;
  readonly shortDescription: string;
  readonly prepTime: string;
  readonly estimatedDuration: string;
  readonly difficulty: "Facil" | "Media";
  readonly ingredients: readonly string[];
  readonly preparation: readonly string[];
  readonly bestWith: readonly string[];
  readonly storageTip: string;
  readonly tags: readonly string[];
  readonly imagePrompt: string;
};

export const saladDressings: readonly SaladDressing[] = [
  {
    "id": "aderezo-big-mac-saludable",
    "name": "Aderezo Big Mac Saludable",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de yogur natural",
      "1 cucharada de mayonesa light o crema de ricota",
      "1 cucharadita de mostaza",
      "1 cucharadita de ketchup sin azucar",
      "1 cucharadita de pepino encurtido picado",
      "1/2 cucharadita de pimenton dulce",
      "1 pizca de ajo en polvo",
      "Sal y pimienta al gusto"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Ensaladas con pollo",
      "carne molida magra",
      "garbanzos",
      "lechuga",
      "tomate",
      "pepino y queso"
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Ensaladas con pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo big mac saludable en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-caesar-ligero",
    "name": "Aderezo Caesar Ligero",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de yogur natural",
      "1 cucharada de parmesano rallado",
      "1 cucharadita de mostaza",
      "1 cucharadita de jugo de limon",
      "1/2 diente de ajo rallado",
      "1 chorrito de aceite de oliva",
      "Pimienta negra al gusto"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo a la plancha",
      "lechuga romana",
      "crutones integrales",
      "tomate cherry y queso"
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo a la plancha"
    ],
    "imagePrompt": "Fotografia realista de aderezo caesar ligero en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-ranch-de-yogur",
    "name": "Aderezo Ranch de Yogur",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 cucharadas de yogur natural",
      "1 cucharadita de perejil picado",
      "1 cucharadita de cebollin",
      "1/2 cucharadita de ajo en polvo",
      "1/2 cucharadita de cebolla en polvo",
      "1 cucharadita de limon",
      "Sal al gusto"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Ensaladas con pollo",
      "maiz",
      "zanahoria",
      "camote",
      "pepino y hojas verdes."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Ensaladas con pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo ranch de yogur en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "vinagreta-clasico",
    "name": "Vinagreta Clasico",
    "category": "Clasicos",
    "shortDescription": "Aderezo clasico, economico y versatil para usar en recetas del dia a dia.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de aceite de oliva",
      "1 cucharada de vinagre",
      "1 cucharada de cebolla picado",
      "1 cucharada de tomate picado",
      "Perejil al gusto",
      "Sal y pimienta al gusto"
    ],
    "preparation": [
      "Coloca los ingredientes en un frasco pequeno.",
      "Agita hasta integrar bien.",
      "Usa en el fondo del frasco y manten refrigerado."
    ],
    "bestWith": [
      "Ensaladas brasilenas",
      "frijoles",
      "garbanzos",
      "huevos",
      "pollo y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Clasicos",
      "Frasco",
      "Rapido",
      "Ensaladas brasilenas"
    ],
    "imagePrompt": "Fotografia realista de vinagreta clasico en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-mostaza-e-miel",
    "name": "Aderezo de Mostaza E Miel",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de mostaza",
      "1 cucharadita de miel",
      "1 cucharada de limon",
      "Sal y pimienta al gusto"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Pollo",
      "hojas verdes",
      "nueces",
      "manzana",
      "zanahoria",
      "queso blanco y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de mostaza y miel en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-verde-de-ervas",
    "name": "Aderezo Verde de Ervas",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 xicara de yogur natural",
      "1 punado de perejil",
      "1 punado de cilantro o albahaca",
      "1 cucharada de limon",
      "1 chorrito de aceite de oliva",
      "1/2 diente de ajo",
      "Sal al gusto"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Ensaladas con pescado",
      "pollo",
      "papa",
      "garbanzos",
      "quinoa y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Ensaladas con pescado"
    ],
    "imagePrompt": "Fotografia realista de aderezo verde de ervas en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-aguacate-cremoso",
    "name": "Aderezo de Aguacate Cremoso",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 aguacate pequeno",
      "2 cucharadas de yogur natural",
      "1 cucharada de limon",
      "1 cucharada de agua",
      "Cilantro o perejil",
      "Sal y pimenta"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Ensaladas mexicanas",
      "frijol",
      "maiz",
      "pollo",
      "tomate",
      "pepino y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Ensaladas mexicanas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de aguacate cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-tahine-e-limon",
    "name": "Aderezo de Tahine E Limon",
    "category": "Citricos",
    "shortDescription": "Aderezo fresco y ligero, ideal para dar brillo a ensaladas preparadas para la semana.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de tahine",
      "2 cucharadas de agua",
      "1 cucharada de limon",
      "1/2 diente de ajo rallado",
      "Sal al gusto"
    ],
    "preparation": [
      "Mezcla el jugo citrico con aceite y condimentos.",
      "Bate con tenedor o agita en un frasco pequeno hasta emulsionar.",
      "Prueba antes de montar y ajusta sal o acidez."
    ],
    "bestWith": [
      "Grao-de-bico",
      "lenteja",
      "zanahoria",
      "remolacha",
      "pepino",
      "hojas y tofu."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Citricos",
      "Frasco",
      "Rapido",
      "Grao-de-bico"
    ],
    "imagePrompt": "Fotografia realista de aderezo de tahine y limon en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-balsamico-con-miel",
    "name": "Aderezo Balsamico con Miel",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre balsamico",
      "1 cucharadita de miel",
      "1 pizca de sal",
      "Pimienta negra"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Ensaladas con fresa",
      "manzana",
      "queso blanco",
      "castanhas y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Ensaladas con fresa"
    ],
    "imagePrompt": "Fotografia realista de aderezo balsamico con miel en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-limon-siciliano",
    "name": "Aderezo de Limon Siciliano",
    "category": "Citricos",
    "shortDescription": "Aderezo fresco y ligero, ideal para dar brillo a ensaladas preparadas para la semana.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de jugo de limon siciliano",
      "Raspas de limon",
      "1/2 cucharadita de mostaza",
      "Sal y pimenta"
    ],
    "preparation": [
      "Mezcla el jugo citrico con aceite y condimentos.",
      "Bate con tenedor o agita en un frasco pequeno hasta emulsionar.",
      "Prueba antes de montar y ajusta sal o acidez."
    ],
    "bestWith": [
      "Peixe",
      "pollo",
      "quinoa",
      "pepino",
      "tomate",
      "arugula y hojas delicadas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Citricos",
      "Frasco",
      "Rapido",
      "Peixe"
    ],
    "imagePrompt": "Fotografia realista de aderezo de limon siciliano en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-pesto-ligero",
    "name": "Aderezo Pesto Ligero",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 xicara de albahaca",
      "2 cucharadas de aceite de oliva",
      "1 cucharada de castanhas",
      "1 cucharada de parmesano",
      "1 cucharada de agua",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Tomate",
      "mussarela",
      "pollo",
      "manzanarrao integral frio y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Tomate"
    ],
    "imagePrompt": "Fotografia realista de aderezo pesto ligero en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-yogur-con-menta",
    "name": "Aderezo de Yogur con Menta",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 xicara de yogur natural",
      "1 cucharada de menta picado",
      "1 cucharada de limon",
      "1 chorrito de aceite de oliva",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Pepino",
      "pollo",
      "garbanzos",
      "zanahoria y ensaladas mediterraneas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Pepino"
    ],
    "imagePrompt": "Fotografia realista de aderezo de yogur con menta en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-naranja",
    "name": "Aderezo de Naranja",
    "category": "Citricos",
    "shortDescription": "Aderezo fresco y ligero, ideal para dar brillo a ensaladas preparadas para la semana.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de suco de naranja",
      "1 cucharada de aceite de oliva",
      "1 cucharadita de mostaza",
      "1 pizca de sal",
      "Pimenta"
    ],
    "preparation": [
      "Mezcla el jugo citrico con aceite y condimentos.",
      "Bate con tenedor o agita en un frasco pequeno hasta emulsionar.",
      "Prueba antes de montar y ajusta sal o acidez."
    ],
    "bestWith": [
      "Zanahoria",
      "remolacha",
      "pollo",
      "hojas",
      "quinoa y frutas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Citricos",
      "Frasco",
      "Rapido",
      "Zanahoria"
    ],
    "imagePrompt": "Fotografia realista de aderezo de naranja en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-mango-picante",
    "name": "Aderezo de Mango Picante",
    "category": "Picantes",
    "shortDescription": "Aderezo con personalidad para sumar un toque intenso y diferente a tus ensaladas.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 mango madura",
      "1 cucharada de limon",
      "1 cucharada de aceite de oliva",
      "Pimienta dedo-de-moca sem sementes",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base con el ingrediente picante poco a poco.",
      "Prueba y ajusta el nivel de picante segun tu gusto.",
      "Refrigera unos minutos antes de usar para que el sabor se integre."
    ],
    "bestWith": [
      "Pollo",
      "camarao",
      "hojas",
      "repollo morado y ensaladas tropicales."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Picantes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de mango picante en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-coco-e-curry",
    "name": "Aderezo de Coco E Curry",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de leite de coco",
      "1 cucharadita de curry",
      "1 cucharada de limon",
      "1 pizca de sal",
      "Cilantro opcional"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "garbanzos",
      "lenteja",
      "zanahoria y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de coco y curry en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-chipotle-fit",
    "name": "Aderezo Chipotle Fit",
    "category": "Picantes",
    "shortDescription": "Aderezo con personalidad para sumar un toque intenso y diferente a tus ensaladas.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de yogur",
      "1 cucharadita de pimenton ahumado",
      "1 cucharadita de aderezo de pimenta",
      "1 cucharada de limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base con el ingrediente picante poco a poco.",
      "Prueba y ajusta el nivel de picante segun tu gusto.",
      "Refrigera unos minutos antes de usar para que el sabor se integre."
    ],
    "bestWith": [
      "Ensaladas mexicanas",
      "pollo",
      "maiz",
      "frijol",
      "aguacate y lechuga."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Picantes",
      "Frasco",
      "Rapido",
      "Ensaladas mexicanas"
    ],
    "imagePrompt": "Fotografia realista de aderezo chipotle fit en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-ajo-asado",
    "name": "Aderezo de Ajo Asado",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 dientes de ajo asados",
      "4 cucharadas de yogur",
      "1 chorrito de aceite de oliva",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "papa",
      "granos",
      "zanahoria",
      "hojas y vegetales asados."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de ajo asado en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-oriental-de-jengibre",
    "name": "Aderezo Oriental de Jengibre",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de shoyu light",
      "1 cucharada de limon",
      "1 cucharadita de jengibre rallado",
      "1 cucharadita de miel",
      "1 cucharadita de sesamo"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "repollo",
      "zanahoria",
      "pepino",
      "pollo",
      "tofu y hojas crocantes."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "repollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo oriental de jengibre en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-teriyaki-ligero",
    "name": "Aderezo Teriyaki Ligero",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de shoyu light",
      "1 cucharada de agua",
      "1 cucharadita de miel",
      "1 cucharadita de jengibre",
      "1 cucharadita de amido diluido opcional"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "tofu",
      "quinoa",
      "repollo",
      "zanahoria y pepino."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo teriyaki ligero en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-mani",
    "name": "Aderezo de Mani",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 cucharada de pasta de mani",
      "2 cucharadas de agua",
      "1 cucharada de limon",
      "1 cucharadita de shoyu light",
      "Jengibre opcional"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "repollo",
      "zanahoria",
      "pepino",
      "edamame y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de mani en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-maracuya",
    "name": "Aderezo de Maracuya",
    "category": "Citricos",
    "shortDescription": "Aderezo fresco y ligero, ideal para dar brillo a ensaladas preparadas para la semana.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de polpa de maracuya",
      "2 cucharadas de aceite de oliva",
      "1 cucharadita de miel",
      "Sal",
      "Pimenta"
    ],
    "preparation": [
      "Mezcla el jugo citrico con aceite y condimentos.",
      "Bate con tenedor o agita en un frasco pequeno hasta emulsionar.",
      "Prueba antes de montar y ajusta sal o acidez."
    ],
    "bestWith": [
      "Hojas",
      "pollo",
      "mango",
      "zanahoria",
      "queso blanco y castanhas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Citricos",
      "Frasco",
      "Rapido",
      "Hojas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de maracuya en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-fresa-balsamico",
    "name": "Aderezo de Fresa Balsamico",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 fresas amassados",
      "1 cucharada de balsamico",
      "1 cucharada de aceite de oliva",
      "1 cucharadita de miel",
      "Sal"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Arugula",
      "queso blanco",
      "nueces",
      "pollo y hojas verdes."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Arugula"
    ],
    "imagePrompt": "Fotografia realista de aderezo de fresa balsamico en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-remolacha-cremoso",
    "name": "Aderezo de Remolacha Cremoso",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 remolacha cozida",
      "3 cucharadas de yogur",
      "1 cucharada de limon",
      "1 chorrito de aceite de oliva",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Quinoa",
      "pollo",
      "hojas",
      "garbanzos",
      "zanahoria y pepino."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Quinoa"
    ],
    "imagePrompt": "Fotografia realista de aderezo de remolacha cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-zanahoria-e-jengibre",
    "name": "Aderezo de Zanahoria E Jengibre",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 zanahoria cozida pequena",
      "1 cucharadita de jengibre",
      "1 cucharada de limon",
      "1 cucharada de aceite de oliva",
      "Agua y sal"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Hojas",
      "repollo",
      "pepino",
      "pollo",
      "pescado y tofu."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Hojas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de zanahoria y jengibre en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-tomate-seco",
    "name": "Aderezo de Tomate Seco",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 tomates secos",
      "3 cucharadas de yogur",
      "1 cucharada de agua",
      "1 cucharadita de aceite de oliva",
      "Oregano"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Mussarela",
      "pollo",
      "manzanarrao frio",
      "hojas y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Mussarela"
    ],
    "imagePrompt": "Fotografia realista de aderezo de tomate seco en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-aceituna",
    "name": "Aderezo de Aceituna",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "6 aceitunas sem caroco",
      "3 cucharadas de yogur",
      "1 cucharadita de limon",
      "1 chorrito de aceite de oliva",
      "Oregano"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Tomate",
      "pepino",
      "queso",
      "garbanzos",
      "pollo y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Tomate"
    ],
    "imagePrompt": "Fotografia realista de aderezo de aceituna en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-ricota-con-ervas",
    "name": "Aderezo de Ricota con Ervas",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de crema de ricota",
      "1 cucharada de agua",
      "Perejil",
      "Cebollin",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Pollo",
      "huevos",
      "vegetales",
      "hojas",
      "camote y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de ricota con ervas en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-queso-blanco",
    "name": "Aderezo de Queso Blanco",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "40 g de queso blanco",
      "3 cucharadas de leite o yogur",
      "1 cucharadita de aceite de oliva",
      "Pimenta",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Ensaladas con pollo",
      "tomate",
      "hojas",
      "maiz y zanahoria."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Ensaladas con pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de queso blanco en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-parmesano-ligero",
    "name": "Aderezo de Parmesano Ligero",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de yogur",
      "1 cucharada de parmesano",
      "1 cucharadita de limon",
      "1 pizca de ajo en polvo",
      "Pimenta"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Hojas",
      "pollo",
      "huevos",
      "crutones integrales y tomate."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Hojas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de parmesano ligero en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-pepino-cremoso",
    "name": "Aderezo de Pepino Cremoso",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 pepino rallado",
      "4 cucharadas de yogur",
      "Menta",
      "Limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "garbanzos",
      "quinoa",
      "hojas y ensaladas mediterraneas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de pepino cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-tzatziki",
    "name": "Aderezo Tzatziki",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 pepino rallado",
      "1/2 xicara de yogur grego",
      "1/2 diente de ajo",
      "1 cucharada de limon",
      "Menta o dill",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "carne magra",
      "vegetales",
      "garbanzos y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo tzatziki en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-cilantro-e-limon",
    "name": "Aderezo de Cilantro E Limon",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 punado de cilantro",
      "2 cucharadas de yogur",
      "1 cucharada de limon",
      "1 chorrito de aceite de oliva",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Maiz",
      "frijol",
      "pollo",
      "aguacate",
      "tomate y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Maiz"
    ],
    "imagePrompt": "Fotografia realista de aderezo de cilantro y limon en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-albahaca-cremoso",
    "name": "Aderezo de Albahaca Cremoso",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 punado de albahaca",
      "3 cucharadas de yogur",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Tomate",
      "mussarela",
      "pollo",
      "manzanarrao frio y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Tomate"
    ],
    "imagePrompt": "Fotografia realista de aderezo de albahaca cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-dill",
    "name": "Aderezo de Dill",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 cucharadas de yogur",
      "1 cucharadita de dill",
      "1 cucharada de limon",
      "1 cucharadita de aceite de oliva",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Atun",
      "salmao",
      "huevo",
      "pepino",
      "papa y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Atun"
    ],
    "imagePrompt": "Fotografia realista de aderezo de dill en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-atun-cremoso",
    "name": "Aderezo de Atun Cremoso",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de atun escorrido",
      "3 cucharadas de yogur",
      "1 cucharadita de mostaza",
      "Limon",
      "Pimenta"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Hojas",
      "huevos",
      "papa",
      "tomate",
      "pepino y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Hojas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de atun cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-huevo-cocido",
    "name": "Aderezo de Huevo Cocido",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 huevo cocido",
      "2 cucharadas de yogur",
      "1 cucharadita de mostaza",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Ensaladas de papa",
      "pollo",
      "hojas",
      "zanahoria y maiz."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Ensaladas de papa"
    ],
    "imagePrompt": "Fotografia realista de aderezo de huevo cocido en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-yogur-picante",
    "name": "Aderezo de Yogur Picante",
    "category": "Picantes",
    "shortDescription": "Aderezo con personalidad para sumar un toque intenso y diferente a tus ensaladas.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 cucharadas de yogur",
      "1 cucharadita de aderezo de pimenta",
      "1 cucharadita de limon",
      "Paprika",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base con el ingrediente picante poco a poco.",
      "Prueba y ajusta el nivel de picante segun tu gusto.",
      "Refrigera unos minutos antes de usar para que el sabor se integre."
    ],
    "bestWith": [
      "Pollo",
      "carne magra",
      "frijol",
      "maiz",
      "tomate y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Picantes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de yogur picante en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-pimenton-ahumado",
    "name": "Aderezo de Pimenton Ahumado",
    "category": "Picantes",
    "shortDescription": "Aderezo con personalidad para sumar un toque intenso y diferente a tus ensaladas.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de yogur",
      "1 cucharadita de pimenton ahumado",
      "1 cucharadita de mostaza",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base con el ingrediente picante poco a poco.",
      "Prueba y ajusta el nivel de picante segun tu gusto.",
      "Refrigera unos minutos antes de usar para que el sabor se integre."
    ],
    "bestWith": [
      "Pollo",
      "carne magra",
      "garbanzos",
      "maiz y ensaladas robustas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Picantes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de pimenton ahumado en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-chimichurri",
    "name": "Aderezo de Chimichurri",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre",
      "Perejil",
      "Oregano",
      "Alho picado",
      "Pimenta",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Carne magra",
      "pollo",
      "papa",
      "tomate",
      "granos y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Carne magra"
    ],
    "imagePrompt": "Fotografia realista de aderezo de chimichurri en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-salsa-mexicana",
    "name": "Aderezo de Salsa Mexicana",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 tomate picado",
      "1 cucharada de cebolla",
      "Cilantro",
      "Limon",
      "Pimenta",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Feijao",
      "maiz",
      "pollo",
      "aguacate",
      "lechuga y quinoa."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Feijao"
    ],
    "imagePrompt": "Fotografia realista de aderezo de salsa mexicana en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-guacamole-ligero",
    "name": "Aderezo Guacamole Ligero",
    "category": "Picantes",
    "shortDescription": "Aderezo con personalidad para sumar un toque intenso y diferente a tus ensaladas.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 aguacate",
      "Tomate picado",
      "Cebola picado",
      "Limon",
      "Cilantro",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base con el ingrediente picante poco a poco.",
      "Prueba y ajusta el nivel de picante segun tu gusto.",
      "Refrigera unos minutos antes de usar para que el sabor se integre."
    ],
    "bestWith": [
      "Ensaladas mexicanas",
      "pollo",
      "frijol",
      "maiz y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Picantes",
      "Frasco",
      "Rapido",
      "Ensaladas mexicanas"
    ],
    "imagePrompt": "Fotografia realista de aderezo guacamole ligero en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-hummus",
    "name": "Aderezo de Hummus",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de garbanzos cozido",
      "1 cucharada de tahine",
      "1 cucharada de limon",
      "1 chorrito de aceite de oliva",
      "Agua y sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Vegetales crus",
      "hojas",
      "pollo",
      "zanahoria",
      "pepino y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Vegetales crus"
    ],
    "imagePrompt": "Fotografia realista de aderezo de hummus en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-garbanzo-con-limon",
    "name": "Aderezo de Garbanzo con Limon",
    "category": "Citricos",
    "shortDescription": "Aderezo fresco y ligero, ideal para dar brillo a ensaladas preparadas para la semana.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 cucharadas de garbanzos",
      "1 cucharada de limon",
      "1 cucharadita de aceite de oliva",
      "Agua",
      "Sal y cominho"
    ],
    "preparation": [
      "Mezcla el jugo citrico con aceite y condimentos.",
      "Bate con tenedor o agita en un frasco pequeno hasta emulsionar.",
      "Prueba antes de montar y ajusta sal o acidez."
    ],
    "bestWith": [
      "Potes vegetarianos",
      "zanahoria",
      "remolacha",
      "hojas y pepino."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Citricos",
      "Frasco",
      "Rapido",
      "Potes vegetarianos"
    ],
    "imagePrompt": "Fotografia realista de aderezo de garbanzo con limon en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-lenteja-cremoso",
    "name": "Aderezo de Lenteja Cremoso",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 cucharadas de lenteja cozida",
      "1 cucharada de limon",
      "1 cucharadita de aceite de oliva",
      "Cominho",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Ensaladas vegetarianas",
      "pollo",
      "quinoa",
      "hojas y vegetales."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Ensaladas vegetarianas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de lenteja cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-frijol-blanco",
    "name": "Aderezo de Frijol Blanco",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "4 cucharadas de frijol blanco cozido",
      "1 cucharada de limon",
      "1 cucharadita de aceite de oliva",
      "Alho",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Vegetales",
      "granos",
      "pollo",
      "hojas",
      "tomate y pepino."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Vegetales"
    ],
    "imagePrompt": "Fotografia realista de aderezo de frijol blanco en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-maiz-cremoso",
    "name": "Aderezo de Maiz Cremoso",
    "category": "Cremosos",
    "shortDescription": "Aderezo cremoso y practico para dejar tus ensaladas en frasco mas sabrosas sin complicarte.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de maiz",
      "3 cucharadas de yogur",
      "1 cucharadita de limon",
      "Sal",
      "Pimenta"
    ],
    "preparation": [
      "Mezcla la base cremosa con los condimentos hasta integrar.",
      "Ajusta sal, acidez y textura poco a poco.",
      "Refrigera unos minutos antes de usar para que el sabor quede mas uniforme."
    ],
    "bestWith": [
      "Pollo",
      "hojas",
      "zanahoria",
      "tomate",
      "frijol y quinoa."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Cremosos",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de maiz cremoso en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-pina-con-menta",
    "name": "Aderezo de Pina con Menta",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de pina picado",
      "1 cucharada de limon",
      "1 cucharadita de aceite de oliva",
      "Menta",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Pollo",
      "repollo",
      "zanahoria",
      "hojas",
      "pepino y ensaladas tropicales."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de pina con menta en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-manzana-con-mostaza",
    "name": "Aderezo de Manzana con Mostaza",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/4 de manzana rallada",
      "1 cucharada de yogur",
      "1 cucharadita de mostaza",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Pollo",
      "hojas",
      "zanahoria",
      "repollo",
      "nueces y queso."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de manzana con mostaza en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-sandia-con-limon",
    "name": "Aderezo de Sandia con Limon",
    "category": "Citricos",
    "shortDescription": "Aderezo fresco y ligero, ideal para dar brillo a ensaladas preparadas para la semana.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de sandia amassada",
      "1 cucharada de limon",
      "1 cucharadita de aceite de oliva",
      "Menta",
      "Sal"
    ],
    "preparation": [
      "Mezcla el jugo citrico con aceite y condimentos.",
      "Bate con tenedor o agita en un frasco pequeno hasta emulsionar.",
      "Prueba antes de montar y ajusta sal o acidez."
    ],
    "bestWith": [
      "Hojas",
      "pepino",
      "queso blanco",
      "menta y ensaladas ligeras."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Citricos",
      "Frasco",
      "Rapido",
      "Hojas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de sandia con limon en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-cafe-con-balsamico",
    "name": "Aderezo de Cafe con Balsamico",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 cucharada de cafe forte frio",
      "1 cucharada de balsamico",
      "2 cucharadas de aceite de oliva",
      "1 cucharadita de miel",
      "Sal"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Carne magra",
      "hojas amargas",
      "tomate",
      "queso y castanhas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Carne magra"
    ],
    "imagePrompt": "Fotografia realista de aderezo de cafe con balsamico en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-miel-e-sesamo",
    "name": "Aderezo de Miel E Sesamo",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 cucharada de shoyu light",
      "1 cucharada de limon",
      "1 cucharadita de miel",
      "1 cucharadita de sesamo",
      "1 cucharadita de aceite de oliva"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Pollo",
      "tofu",
      "repollo",
      "zanahoria",
      "pepino y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de miel y sesamo en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-agridoce-de-tomate",
    "name": "Aderezo Agridoce de Tomate",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de aderezo de tomate",
      "1 cucharadita de miel",
      "1 cucharadita de vinagre",
      "Paprika",
      "Sal"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Pollo",
      "garbanzos",
      "maiz",
      "papa",
      "huevos y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo agridoce de tomate en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-limon-con-alho",
    "name": "Aderezo de Limon con Alho",
    "category": "Clasicos",
    "shortDescription": "Aderezo clasico, economico y versatil para usar en recetas del dia a dia.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de limon",
      "1/2 diente de ajo rallado",
      "Sal",
      "Pimenta"
    ],
    "preparation": [
      "Coloca los ingredientes en un frasco pequeno.",
      "Agita hasta integrar bien.",
      "Usa en el fondo del frasco y manten refrigerado."
    ],
    "bestWith": [
      "Casi todas las ensaladas",
      "especialmente pollo",
      "hojas y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Clasicos",
      "Frasco",
      "Rapido",
      "Casi todas las ensaladas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de limon con alho en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-cebolla-caramielizada",
    "name": "Aderezo de Cebolla Caramielizada",
    "category": "Dulces",
    "shortDescription": "Aderezo agridulce y equilibrado para combinar con frutas, pollo, hojas y granos.",
    "prepTime": "5 min",
    "estimatedDuration": "4 a 5 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "2 cucharadas de cebolla caramielizada",
      "3 cucharadas de yogur",
      "1 cucharadita de limon",
      "Pimenta",
      "Sal"
    ],
    "preparation": [
      "Mezcla la parte dulce con el acido y la base del aderezo.",
      "Agita o bate hasta que todo quede integrado.",
      "Prueba el equilibrio entre dulce, sal y acidez antes de servir."
    ],
    "bestWith": [
      "Carne",
      "pollo",
      "vegetales asados",
      "camote y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Dulces",
      "Frasco",
      "Rapido",
      "Carne"
    ],
    "imagePrompt": "Fotografia realista de aderezo de cebolla caramielizada en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-pimiento-asado",
    "name": "Aderezo de Pimiento Asado",
    "category": "Picantes",
    "shortDescription": "Aderezo con personalidad para sumar un toque intenso y diferente a tus ensaladas.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 pimiento assado",
      "3 cucharadas de yogur",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Mezcla la base con el ingrediente picante poco a poco.",
      "Prueba y ajusta el nivel de picante segun tu gusto.",
      "Refrigera unos minutos antes de usar para que el sabor se integre."
    ],
    "bestWith": [
      "Pollo",
      "garbanzos",
      "quinoa",
      "hojas",
      "zanahoria y tomate."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Picantes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de pimiento asado en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-arveja-con-menta",
    "name": "Aderezo de Arveja con Menta",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "3 cucharadas de arveja cozida",
      "2 cucharadas de yogur",
      "Menta",
      "Limon",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Hojas",
      "pepino",
      "pollo",
      "granos y vegetales."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Hojas"
    ],
    "imagePrompt": "Fotografia realista de aderezo de arveja con menta en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-arugula",
    "name": "Aderezo de Arugula",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 punado de arugula",
      "3 cucharadas de yogur",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de limon",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Pollo",
      "tomate",
      "queso",
      "quinoa",
      "pastas frias y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de arugula en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-espinaca",
    "name": "Aderezo de Espinaca",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 punado de espinaca",
      "3 cucharadas de yogur",
      "1 cucharadita de limon",
      "Alho en polvo",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Pollo",
      "huevos",
      "granos",
      "camote",
      "vegetales y hojas."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de espinaca en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-kale-con-limon",
    "name": "Aderezo de Kale con Limon",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1 hoja de kale picado",
      "3 cucharadas de yogur",
      "1 cucharada de limon",
      "1 chorrito de aceite de oliva",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Ensaladas detox",
      "pollo",
      "pepino",
      "zanahoria y granos."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Ensaladas detox"
    ],
    "imagePrompt": "Fotografia realista de aderezo de kale con limon en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  },
  {
    "id": "aderezo-de-perejil-con-yogur",
    "name": "Aderezo de Perejil con Yogur",
    "category": "Verdes",
    "shortDescription": "Aderezo verde, aromatico y fresco para variar tus frascos con sabor natural.",
    "prepTime": "5 min",
    "estimatedDuration": "2 a 3 dias refrigerado",
    "difficulty": "Facil",
    "ingredients": [
      "1/2 xicara de yogur",
      "Perejil picado",
      "Limon",
      "Alho en polvo",
      "Sal"
    ],
    "preparation": [
      "Lava y seca bien las hierbas antes de preparar el aderezo.",
      "Licua o mezcla con la base indicada hasta obtener una salsa verde uniforme.",
      "Refrigera y agita antes de usar."
    ],
    "bestWith": [
      "Pollo",
      "huevos",
      "papa",
      "hojas",
      "zanahoria y pepino."
    ],
    "storageTip": "Manten refrigerado en un frasco limpio y cerrado. Colocalo en el fondo del frasco o llevalo separado si quieres hojas mas crujientes.",
    "tags": [
      "Verdes",
      "Frasco",
      "Rapido",
      "Pollo"
    ],
    "imagePrompt": "Fotografia realista de aderezo de perejil con yogur en frasco pequeno de vidrio, estilo cocina natural, fondo crema, luz suave."
  }
] as const;

