export type SaladRecipe = {
  id: number;
  name: string;
  category: "Clásicas" | "Proteicas" | "Vegetarianas" | "Económicas" | "Gourmet" | "Para vender";
  shortDescription: string;
  prepTime: string;
  servings: string;
  estimatedDuration: string;
  difficulty: "Fácil" | "Media";
  ingredients: string[];
  dressing: string;
  dressingIngredients: string[];
  dressingPreparation: string;
  layers: string[];
  preparation: string[];
  conservationTip: string;
  tags: string[];
  imagePrompt: string;
};

export const saladRecipes: SaladRecipe[] = [
  {
    "id": 1,
    "name": "Mediterránea con pollo",
    "category": "Proteicas",
    "shortDescription": "Almuerzo completo con sabor fresco. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "120 g de pechuga de pollo cocida en cubos",
      "1/2 taza de garbanzos cocidos",
      "1/2 taza de pepino en cubos",
      "1/2 taza de tomate cherry cortado",
      "1/3 taza de zanahoria rallada",
      "1 taza de lechuga romana bien seca",
      "1 cucharada de aceitunas negras picadas",
      "1 cucharada de queso feta o queso fresco desmoronado"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de jugo de limón",
      "1 cucharadita de mostaza",
      "1/2 diente de ajo rallado",
      "orégano, sal y pimienta al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pechuga de pollo cocida en cubos",
      "1/2 taza de garbanzos cocidos",
      "1/2 taza de pepino en cubos",
      "1/2 taza de tomate cherry cortado",
      "1/3 taza de zanahoria rallada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Sazona el pollo cocido con una pizca de sal, pimienta y orégano. Si está recién hecho, deja enfriar antes de montar el frasco.",
      "Mezcla todos los ingredientes de la salsa hasta que quede homogénea y coloca la salsa en el fondo del frasco.",
      "Agrega los garbanzos sobre la salsa para que absorban sabor sin mojar las hojas.",
      "Añade pepino, tomate, zanahoria, pollo, aceitunas y queso. Termina con la lechuga seca arriba.",
      "Cierra y refrigera. Para servir, agita el frasco o vierte todo en un plato hondo."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "almuerzo completo con sabor fresco",
      "420 kcal aprox.",
      "3 días",
      "de pechuga de pollo cocida en cubo",
      "de garbanzos cocidos",
      "de pepino en cubos",
      "de tomate cherry cortado"
    ],
    "imagePrompt": "Foto realista vertical de mediterránea con pollo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 2,
    "name": "Atún y garbanzos",
    "category": "Proteicas",
    "shortDescription": "Comida rápida, económica y alta en proteína. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 lata de atún en agua escurrido",
      "1/2 taza de garbanzos cocidos",
      "1/2 taza de pepino en medias lunas",
      "1/3 taza de cebolla morada en pluma fina",
      "1/2 taza de tomate en cubos",
      "1 taza de hojas verdes secas",
      "1 cucharada de perejil picado",
      "1 cucharada de semillas de girasol opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural sin azúcar",
      "1 cucharada de jugo de limón",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de mostaza",
      "sal, pimienta y perejil al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 lata de atún en agua escurrido",
      "1/2 taza de garbanzos cocidos",
      "1/2 taza de pepino en medias lunas",
      "1/3 taza de cebolla morada en pluma fina",
      "1/2 taza de tomate en cubos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Escurre muy bien el atún para que la ensalada no quede aguada. Desmenúzalo con un tenedor.",
      "Prepara la salsa mezclando yogur, limón, aceite, mostaza, sal, pimienta y perejil. Colócala en el fondo.",
      "Añade garbanzos, pepino, tomate y cebolla, formando capas firmes.",
      "Agrega el atún y termina con hojas verdes secas y semillas.",
      "Mantén refrigerado. Si quieres llevarlo al trabajo, conserva el frasco frío hasta la hora de comer."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "comida rápida, económica y alta en proteína",
      "390 kcal aprox.",
      "2 días",
      "de atún en agua escurrido",
      "de garbanzos cocidos",
      "de pepino en medias lunas",
      "de cebolla morada en pluma fina"
    ],
    "imagePrompt": "Foto realista vertical de atún y garbanzos en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 3,
    "name": "César ligera con pollo",
    "category": "Proteicas",
    "shortDescription": "Antojo de ensalada cremosa sin sentirse pesada. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pollo a la plancha en tiras",
      "1 taza y 1/2 de lechuga romana seca",
      "1/3 taza de crutones integrales o garbanzos tostados",
      "2 cucharadas de parmesano rallado",
      "1/2 taza de pepino en cubos",
      "1 huevo cocido opcional",
      "pimienta negra al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur griego natural",
      "1 cucharadita de mostaza Dijon o amarilla",
      "1 cucharadita de jugo de limón",
      "1 cucharadita de aceite de oliva",
      "1 cucharada de parmesano",
      "1/2 cucharadita de ajo en polvo"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pollo a la plancha en tiras",
      "1 taza y 1/2 de lechuga romana seca",
      "1/3 taza de crutones integrales o garbanzos tostados",
      "2 cucharadas de parmesano rallado",
      "1/2 taza de pepino en cubos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina el pollo con sal, pimienta y ajo en polvo. Deja enfriar y corta en tiras.",
      "Mezcla yogur, mostaza, limón, aceite, parmesano y ajo hasta formar una salsa cremosa.",
      "Coloca la salsa en el fondo del frasco y encima agrega el pepino.",
      "Añade pollo, huevo si lo usas, parmesano y lechuga bien seca. Guarda los crutones aparte si quieres que queden crujientes.",
      "Al comer, agrega los crutones, agita y sirve."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "antojo de ensalada cremosa sin sentirse pesada",
      "430 kcal aprox.",
      "2 días",
      "de pollo a la plancha en tiras",
      "y 1/2 de lechuga romana seca",
      "de crutones integrales o garbanzos",
      "s de parmesano rallado"
    ],
    "imagePrompt": "Foto realista vertical de césar ligera con pollo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 4,
    "name": "Tex-Mex de pollo y frijoles",
    "category": "Proteicas",
    "shortDescription": "Sabor mexicano, saciante y colorido. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pollo deshebrado",
      "1/2 taza de frijoles negros cocidos",
      "1/3 taza de maíz cocido",
      "1/2 taza de tomate en cubos",
      "1/3 taza de pimiento rojo en cubos",
      "1 taza de lechuga picada seca",
      "2 cucharadas de aguacate en cubos para el día de consumo",
      "cilantro picado al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de jugo de limón",
      "1 cucharadita de paprika o pimentón",
      "1/2 cucharadita de comino",
      "sal, pimienta y chile suave opcional"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pollo deshebrado",
      "1/2 taza de frijoles negros cocidos",
      "1/3 taza de maíz cocido",
      "1/2 taza de tomate en cubos",
      "1/3 taza de pimiento rojo en cubos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Sazona el pollo con comino, paprika, sal y un chorrito de limón.",
      "Mezcla la salsa cremosa y colócala al fondo del frasco.",
      "Añade frijoles, maíz, tomate y pimiento en ese orden.",
      "Agrega el pollo y finaliza con lechuga y cilantro.",
      "Añade el aguacate justo antes de comer para que no se oxide."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "sabor mexicano, saciante y colorido",
      "455 kcal aprox.",
      "3 días",
      "de pollo deshebrado",
      "de frijoles negros cocidos",
      "de maíz cocido",
      "de tomate en cubos"
    ],
    "imagePrompt": "Foto realista vertical de tex-mex de pollo y frijoles en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 5,
    "name": "Quinoa, pavo y aguacate",
    "category": "Proteicas",
    "shortDescription": "Comida completa para días de rutina intensa. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días sin aguacate refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de quinoa cocida y fría",
      "100 g de pechuga de pavo cocida o jamón de pavo en cubos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/4 taza de zanahoria rallada",
      "1 taza de espinaca baby seca",
      "1/4 de aguacate en cubos para agregar al servir",
      "1 cucharada de semillas de calabaza"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre de manzana",
      "1 cucharadita de miel o endulzante",
      "1 cucharadita de mostaza",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de quinoa cocida y fría",
      "100 g de pechuga de pavo cocida o jamón de pavo en cubos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/4 taza de zanahoria rallada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la quinoa, enjuágala y deja enfriar completamente antes de usarla.",
      "Mezcla los ingredientes de la vinagreta y viértela en el fondo.",
      "Coloca la quinoa sobre la salsa, luego pepino, tomate y zanahoria.",
      "Añade el pavo y la espinaca seca arriba.",
      "Agrega aguacate y semillas al momento de comer."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "comida completa para días de rutina intensa",
      "440 kcal aprox.",
      "3 días sin aguacate",
      "de quinoa cocida y fría",
      "de pechuga de pavo cocida o jamón ",
      "de pepino",
      "de tomate cherry"
    ],
    "imagePrompt": "Foto realista vertical de quinoa, pavo y aguacate en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 6,
    "name": "Salmón, arroz integral y pepino",
    "category": "Proteicas",
    "shortDescription": "Sabor tipo sushi bowl en versión frasco. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "22 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "100 g de salmón cocido en láminas o atún fresco cocido",
      "1/2 taza de arroz integral cocido y frío",
      "1/2 taza de pepino en cubos",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de edamame o chícharos cocidos",
      "1 taza de espinaca o lechuga seca",
      "1 cucharadita de ajonjolí"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de salsa de soya baja en sodio",
      "1 cucharada de jugo de limón",
      "1 cucharadita de aceite de ajonjolí opcional",
      "1 cucharadita de miel",
      "jengibre rallado al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "100 g de salmón cocido en láminas o atún fresco cocido",
      "1/2 taza de arroz integral cocido y frío",
      "1/2 taza de pepino en cubos",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de edamame o chícharos cocidos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina el salmón a la plancha con sal mínima y deja enfriar.",
      "Prepara la salsa mezclando soya, limón, aceite, miel y jengibre.",
      "Pon la salsa al fondo y después el arroz integral, que soporta bien la humedad.",
      "Añade pepino, zanahoria, edamame y salmón.",
      "Termina con hojas secas y ajonjolí. Refrigera y consume frío."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "sabor tipo sushi bowl en versión frasco",
      "470 kcal aprox.",
      "2 días",
      "de salmón cocido en láminas o atún",
      "de arroz integral cocido y frío",
      "de pepino en cubos",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de salmón, arroz integral y pepino en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 7,
    "name": "Pasta integral con pollo al pesto",
    "category": "Proteicas",
    "shortDescription": "Sustituir una pasta pesada por una versión fresca. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de pasta integral cocida al dente",
      "110 g de pollo cocido en cubos",
      "1/2 taza de tomate cherry",
      "1/2 taza de calabacín en cubos salteado",
      "1 taza de rúcula o lechuga seca",
      "2 cucharadas de mozzarella en cubos opcional",
      "1 cucharada de nueces picadas opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "1 cucharada de pesto",
      "1 cucharada de yogur natural",
      "1 cucharadita de jugo de limón",
      "1 cucharadita de agua para aligerar",
      "pimienta al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de pasta integral cocida al dente",
      "110 g de pollo cocido en cubos",
      "1/2 taza de tomate cherry",
      "1/2 taza de calabacín en cubos salteado",
      "1 taza de rúcula o lechuga seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la pasta al dente, enjuaga con agua fría y escurre bien.",
      "Mezcla pesto, yogur, limón y agua hasta obtener una salsa ligera.",
      "Coloca salsa, pasta y calabacín al fondo para que absorban sabor.",
      "Añade tomate, pollo, mozzarella y nueces.",
      "Finaliza con rúcula seca. Agita antes de servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "sustituir una pasta pesada por una versión fresca",
      "480 kcal aprox.",
      "3 días",
      "de pasta integral cocida al dente",
      "de pollo cocido en cubos",
      "de tomate cherry",
      "de calabacín en cubos salteado"
    ],
    "imagePrompt": "Foto realista vertical de pasta integral con pollo al pesto en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 8,
    "name": "Thai de pollo con maní",
    "category": "Proteicas",
    "shortDescription": "Sabor dulce, ácido y cremoso. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pollo cocido deshebrado",
      "1/2 taza de repollo morado rallado",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino en tiras",
      "1/3 taza de pimiento amarillo",
      "1 taza de lechuga o espinaca seca",
      "1 cucharada de maní tostado picado",
      "cilantro al gusto"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de mantequilla de maní",
      "1 cucharada de salsa de soya baja en sodio",
      "1 cucharada de jugo de limón",
      "1 cucharadita de miel",
      "1 a 2 cucharadas de agua para ajustar textura"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pollo cocido deshebrado",
      "1/2 taza de repollo morado rallado",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino en tiras",
      "1/3 taza de pimiento amarillo",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Mezcla la salsa hasta que quede cremosa y fluida. Si está espesa, agrega agua poco a poco.",
      "Sazona el pollo con una cucharadita de la salsa para darle más sabor.",
      "Coloca el resto de la salsa al fondo del frasco.",
      "Monta repollo, zanahoria, pepino, pimiento y pollo.",
      "Termina con hojas secas, cilantro y maní justo antes de comer."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "sabor dulce, ácido y cremoso",
      "465 kcal aprox.",
      "3 días",
      "de pollo cocido deshebrado",
      "de repollo morado rallado",
      "de zanahoria rallada",
      "de pepino en tiras"
    ],
    "imagePrompt": "Foto realista vertical de thai de pollo con maní en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 9,
    "name": "Huevo, papa y ejotes estilo niçoise",
    "category": "Proteicas",
    "shortDescription": "Ensalada clásica, llenadora y fácil de preparar. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "2 huevos cocidos en cuartos",
      "1 papa pequeña cocida en cubos",
      "1/2 taza de ejotes o judías verdes cocidos",
      "1/2 taza de tomate cherry",
      "1/4 taza de aceitunas",
      "1 taza de lechuga seca",
      "1 cucharada de cebolla morada opcional"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre de vino o manzana",
      "1 cucharadita de mostaza",
      "1 cucharadita de jugo de limón",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "2 huevos cocidos en cuartos",
      "1 papa pequeña cocida en cubos",
      "1/2 taza de ejotes o judías verdes cocidos",
      "1/2 taza de tomate cherry",
      "1/4 taza de aceitunas",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece la papa en cubos hasta que esté suave pero firme. Cuece los ejotes y enfría.",
      "Hierve los huevos, pélalos y córtalos cuando estén fríos.",
      "Coloca la vinagreta en el fondo del frasco.",
      "Añade papa, ejotes, tomate, aceitunas y huevo.",
      "Finaliza con lechuga seca. Evita agitar con fuerza para no deshacer el huevo."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "ensalada clásica, llenadora y fácil de preparar",
      "410 kcal aprox.",
      "2 días",
      "huevos cocidos en cuartos",
      "papa pequeña cocida en cubos",
      "de ejotes o judías verdes cocidos",
      "de tomate cherry"
    ],
    "imagePrompt": "Foto realista vertical de huevo, papa y ejotes estilo niçoise en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 10,
    "name": "Camarones cítricos con mango",
    "category": "Proteicas",
    "shortDescription": "Una ensalada fresca para clima caliente. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "1 día refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de camarones cocidos y fríos",
      "1/2 taza de mango en cubos",
      "1/2 taza de pepino",
      "1/3 taza de pimiento rojo",
      "1/4 taza de cebolla morada",
      "1 taza de lechuga o espinaca seca",
      "1 cucharada de cilantro picado"
    ],
    "dressing": "Salsa de cucharadas, jugo, naranja",
    "dressingIngredients": [
      "2 cucharadas de jugo de naranja",
      "1 cucharada de jugo de limón",
      "1 cucharadita de aceite de oliva",
      "1/2 cucharadita de chile suave opcional",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de camarones cocidos y fríos",
      "1/2 taza de mango en cubos",
      "1/2 taza de pepino",
      "1/3 taza de pimiento rojo",
      "1/4 taza de cebolla morada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina los camarones solo hasta que cambien de color. Enfría rápidamente para que queden firmes.",
      "Mezcla la salsa cítrica y colócala al fondo.",
      "Agrega pepino, pimiento, cebolla y mango en capas.",
      "Añade camarones y cilantro.",
      "Termina con hojas secas y consume preferentemente el mismo día."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "una ensalada fresca para clima caliente",
      "395 kcal aprox.",
      "1 día",
      "de camarones cocidos y fríos",
      "de mango en cubos",
      "de pepino",
      "de pimiento rojo"
    ],
    "imagePrompt": "Foto realista vertical de camarones cítricos con mango en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 11,
    "name": "Carne magra con chimichurri",
    "category": "Proteicas",
    "shortDescription": "Para quien quiere sabor fuerte y comida contundente. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de carne magra a la plancha en tiras",
      "1/2 taza de papa cambray o papa cocida en cubos",
      "1/2 taza de tomate cherry",
      "1/2 taza de pimiento asado",
      "1 taza de hojas verdes secas",
      "1 cucharada de cebolla morada",
      "1 cucharada de semillas o nueces opcional"
    ],
    "dressing": "Chimichurri fresco",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de vinagre",
      "1 cucharada de perejil picado",
      "1/2 cucharadita de ajo picado",
      "orégano, sal, pimienta y chile seco opcional"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de carne magra a la plancha en tiras",
      "1/2 taza de papa cambray o papa cocida en cubos",
      "1/2 taza de tomate cherry",
      "1/2 taza de pimiento asado",
      "1 taza de hojas verdes secas",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la carne a la plancha, deja reposar y corta en tiras finas.",
      "Mezcla el chimichurri y ponlo al fondo del frasco.",
      "Añade papa cocida, tomate y pimiento.",
      "Coloca la carne y la cebolla morada.",
      "Finaliza con hojas verdes secas. Calienta solo la carne aparte si prefieres comerla tibia."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "para quien quiere sabor fuerte y comida contundente",
      "500 kcal aprox.",
      "2 días",
      "de carne magra a la plancha en tir",
      "de papa cambray o papa cocida en c",
      "de tomate cherry",
      "de pimiento asado"
    ],
    "imagePrompt": "Foto realista vertical de carne magra con chimichurri en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 12,
    "name": "Pollo al curry con manzana",
    "category": "Proteicas",
    "shortDescription": "Sabor cremoso, ligeramente dulce y diferente. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pollo cocido deshebrado",
      "1/2 manzana verde en cubos pequeños",
      "1/3 taza de apio picado",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de pasas opcional",
      "1 taza de espinaca o lechuga seca",
      "1 cucharada de almendras picadas"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de curry en polvo",
      "1 cucharadita de jugo de limón",
      "1 cucharadita de mostaza",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pollo cocido deshebrado",
      "1/2 manzana verde en cubos pequeños",
      "1/3 taza de apio picado",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de pasas opcional",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Mezcla el pollo con una cucharada de salsa para que tome sabor.",
      "Rocía la manzana con unas gotas de limón para evitar oxidación.",
      "Coloca el resto de la salsa en el fondo.",
      "Añade apio, zanahoria, manzana, pollo y pasas si usas.",
      "Termina con hojas secas y almendras al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "sabor cremoso, ligeramente dulce y diferente",
      "430 kcal aprox.",
      "2 días",
      "de pollo cocido deshebrado",
      "manzana verde en cubos pequeños",
      "de apio picado",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de pollo al curry con manzana en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 13,
    "name": "Griega con pavo",
    "category": "Proteicas",
    "shortDescription": "Ensalada práctica con ingredientes fáciles. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "110 g de pechuga de pavo en cubos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/3 taza de garbanzos",
      "1/4 taza de cebolla morada",
      "1 taza de lechuga romana seca",
      "2 cucharadas de queso feta o fresco",
      "aceitunas al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de jugo de limón",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de eneldo o perejil",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "110 g de pechuga de pavo en cubos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/3 taza de garbanzos",
      "1/4 taza de cebolla morada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Corta el pavo en cubos y seca el exceso de humedad con papel de cocina.",
      "Mezcla la salsa de yogur con limón, aceite y hierbas.",
      "Coloca salsa, garbanzos, pepino, tomate y cebolla.",
      "Añade pavo, queso y aceitunas.",
      "Termina con lechuga bien seca para conservar textura."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "ensalada práctica con ingredientes fáciles",
      "405 kcal aprox.",
      "3 días",
      "de pechuga de pavo en cubos",
      "de pepino",
      "de tomate cherry",
      "de garbanzos"
    ],
    "imagePrompt": "Foto realista vertical de griega con pavo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 14,
    "name": "Tofu teriyaki con vegetales",
    "category": "Proteicas",
    "shortDescription": "Opción vegetariana alta en proteína. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "130 g de tofu firme en cubos",
      "1/2 taza de arroz integral o quinoa cocida",
      "1/2 taza de brócoli cocido al vapor",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "1 cucharadita de ajonjolí"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de salsa de soya baja en sodio",
      "1 cucharadita de miel",
      "1 cucharadita de vinagre de arroz o manzana",
      "1 cucharadita de jengibre rallado",
      "1 cucharadita de agua"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "130 g de tofu firme en cubos",
      "1/2 taza de arroz integral o quinoa cocida",
      "1/2 taza de brócoli cocido al vapor",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Presiona el tofu con papel de cocina para retirar agua. Dora en sartén antiadherente.",
      "Mezcla la salsa teriyaki ligera y baña el tofu ya dorado.",
      "Pon un poco de salsa al fondo del frasco y agrega arroz o quinoa.",
      "Añade brócoli, zanahoria, pepino y tofu.",
      "Termina con espinaca seca y ajonjolí al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "opción vegetariana alta en proteína",
      "410 kcal aprox.",
      "3 días",
      "de tofu firme en cubos",
      "de arroz integral o quinoa cocida",
      "de brócoli cocido al vapor",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de tofu teriyaki con vegetales en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 15,
    "name": "Lentejas, huevo y zanahoria",
    "category": "Proteicas",
    "shortDescription": "Saciedad con ingredientes de bajo costo. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de lentejas cocidas y firmes",
      "1 huevo cocido",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1/2 taza de tomate en cubos",
      "1 taza de hojas verdes secas",
      "1 cucharada de cebolla morada",
      "perejil al gusto"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre",
      "1 cucharadita de mostaza",
      "1/2 cucharadita de comino",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de lentejas cocidas y firmes",
      "1 huevo cocido",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1/2 taza de tomate en cubos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina las lentejas hasta que estén suaves pero no deshechas. Enfría.",
      "Prepara la vinagreta con mostaza, comino, sal y pimienta.",
      "Coloca salsa y lentejas en el fondo.",
      "Añade pepino, tomate, zanahoria, cebolla y huevo.",
      "Finaliza con hojas secas y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Proteicas",
      "saciedad con ingredientes de bajo costo",
      "435 kcal aprox.",
      "3 días",
      "de lentejas cocidas y firmes",
      "huevo cocido",
      "de zanahoria rallada",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de lentejas, huevo y zanahoria en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 16,
    "name": "Caprese en frasco",
    "category": "Vegetarianas",
    "shortDescription": "Cena ligera con sabor italiano. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 taza de tomate cherry cortado",
      "80 g de mozzarella fresca en cubos",
      "1 taza de hojas de albahaca y lechuga seca",
      "1/2 taza de pepino en cubos",
      "1/4 taza de garbanzos opcional",
      "pimienta negra al gusto"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre balsámico",
      "1/2 cucharadita de miel opcional",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 taza de tomate cherry cortado",
      "80 g de mozzarella fresca en cubos",
      "1 taza de hojas de albahaca y lechuga seca",
      "1/2 taza de pepino en cubos",
      "1/4 taza de garbanzos opcional",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Seca muy bien la mozzarella para evitar exceso de líquido.",
      "Mezcla aceite, balsámico, miel, sal y pimienta; pon al fondo.",
      "Añade garbanzos si quieres más saciedad, luego pepino y tomate.",
      "Coloca mozzarella encima de los vegetales.",
      "Finaliza con albahaca y lechuga seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "cena ligera con sabor italiano",
      "360 kcal aprox.",
      "2 días",
      "de tomate cherry cortado",
      "de mozzarella fresca en cubos",
      "de hojas de albahaca y lechuga sec",
      "de pepino en cubos"
    ],
    "imagePrompt": "Foto realista vertical de caprese en frasco en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 17,
    "name": "Garbanzos crujientes con yogur",
    "category": "Vegetarianas",
    "shortDescription": "Cuando quieres algo crocante sin freír. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "3/4 taza de garbanzos cocidos",
      "1/2 taza de pepino",
      "1/2 taza de zanahoria rallada",
      "1/3 taza de tomate",
      "1 taza de lechuga seca",
      "1 cucharada de semillas de girasol",
      "paprika, sal y ajo en polvo"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de limón",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de perejil",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de garbanzos cocidos",
      "1/2 taza de pepino",
      "1/2 taza de zanahoria rallada",
      "1/3 taza de tomate",
      "1 taza de lechuga seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Seca los garbanzos y dóralos en sartén con paprika, ajo y sal hasta que estén firmes.",
      "Deja enfriar para que no genere vapor dentro del frasco.",
      "Pon la salsa de yogur en el fondo.",
      "Añade pepino, zanahoria, tomate y garbanzos.",
      "Termina con lechuga seca y semillas al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "cuando quieres algo crocante sin freír",
      "420 kcal aprox.",
      "3 días",
      "de garbanzos cocidos",
      "de pepino",
      "de zanahoria rallada",
      "de tomate"
    ],
    "imagePrompt": "Foto realista vertical de garbanzos crujientes con yogur en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 18,
    "name": "Quinoa arcoíris",
    "category": "Vegetarianas",
    "shortDescription": "Meal prep colorido y equilibrado. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de quinoa cocida",
      "1/3 taza de maíz",
      "1/3 taza de frijoles negros",
      "1/2 taza de pimiento rojo",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria rallada",
      "1 taza de espinaca seca",
      "cilantro al gusto"
    ],
    "dressing": "Salsa de cucharadas, jugo, limon",
    "dressingIngredients": [
      "2 cucharadas de jugo de limón",
      "1 cucharada de aceite de oliva",
      "1/2 cucharadita de comino",
      "1 cucharadita de miel opcional",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de quinoa cocida",
      "1/3 taza de maíz",
      "1/3 taza de frijoles negros",
      "1/2 taza de pimiento rojo",
      "1/2 taza de pepino",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la quinoa y enfría. Debe quedar suelta, no pastosa.",
      "Mezcla la vinagreta de limón, comino, sal y pimienta.",
      "Coloca la salsa y encima la quinoa.",
      "Añade maíz, frijoles, pimiento, pepino y zanahoria.",
      "Termina con espinaca seca y cilantro."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "meal prep colorido y equilibrado",
      "390 kcal aprox.",
      "4 días",
      "de quinoa cocida",
      "de maíz",
      "de frijoles negros",
      "de pimiento rojo"
    ],
    "imagePrompt": "Foto realista vertical de quinoa arcoíris en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 19,
    "name": "Lentejas mediterráneas",
    "category": "Vegetarianas",
    "shortDescription": "Proteína vegetal con sabor fresco. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "3/4 taza de lentejas cocidas",
      "1/2 taza de tomate en cubos",
      "1/2 taza de pepino",
      "1/4 taza de cebolla morada",
      "1 taza de rúcula o lechuga seca",
      "1 cucharada de aceitunas",
      "1 cucharada de queso fresco opcional"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de vinagre",
      "1 cucharadita de mostaza",
      "orégano, sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de lentejas cocidas",
      "1/2 taza de tomate en cubos",
      "1/2 taza de pepino",
      "1/4 taza de cebolla morada",
      "1 taza de rúcula o lechuga seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece las lentejas sin dejarlas demasiado blandas. Enfría.",
      "Prepara la vinagreta y ponla al fondo.",
      "Agrega lentejas para que se marinen con la salsa.",
      "Añade pepino, tomate, cebolla, aceitunas y queso.",
      "Termina con rúcula seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "proteína vegetal con sabor fresco",
      "400 kcal aprox.",
      "4 días",
      "de lentejas cocidas",
      "de tomate en cubos",
      "de pepino",
      "de cebolla morada"
    ],
    "imagePrompt": "Foto realista vertical de lentejas mediterráneas en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 20,
    "name": "Frijoles negros y maíz",
    "category": "Vegetarianas",
    "shortDescription": "Sabor latino simple y económico. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de frijoles negros cocidos",
      "1/2 taza de maíz cocido",
      "1/2 taza de tomate",
      "1/3 taza de pimiento",
      "1/3 taza de cebolla morada",
      "1 taza de lechuga seca",
      "cilantro al gusto",
      "aguacate para agregar al servir"
    ],
    "dressing": "Salsa de cucharadas, limon, cucharada",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharada de aceite de oliva",
      "1/2 cucharadita de comino",
      "1/2 cucharadita de paprika",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de frijoles negros cocidos",
      "1/2 taza de maíz cocido",
      "1/2 taza de tomate",
      "1/3 taza de pimiento",
      "1/3 taza de cebolla morada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Escurre muy bien frijoles y maíz para no aguadar el frasco.",
      "Mezcla la vinagreta y ponla al fondo.",
      "Añade frijoles, maíz, tomate, pimiento y cebolla.",
      "Agrega cilantro y termina con lechuga seca.",
      "Añade aguacate el día que vayas a comer."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "sabor latino simple y económico",
      "385 kcal aprox.",
      "3 días",
      "de frijoles negros cocidos",
      "de maíz cocido",
      "de tomate",
      "de pimiento"
    ],
    "imagePrompt": "Foto realista vertical de frijoles negros y maíz en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 21,
    "name": "Pasta fría con verduras",
    "category": "Vegetarianas",
    "shortDescription": "Una opción familiar y fácil de aceptar. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "2/3 taza de pasta corta integral cocida",
      "1/2 taza de brócoli cocido al vapor",
      "1/2 taza de tomate cherry",
      "1/3 taza de zanahoria rallada",
      "1/3 taza de aceitunas o pepinillos",
      "1 taza de lechuga seca",
      "2 cucharadas de queso fresco opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de yogur natural",
      "1 cucharadita de mostaza",
      "1 cucharada de limón",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "2/3 taza de pasta corta integral cocida",
      "1/2 taza de brócoli cocido al vapor",
      "1/2 taza de tomate cherry",
      "1/3 taza de zanahoria rallada",
      "1/3 taza de aceitunas o pepinillos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la pasta al dente, enfría y escurre muy bien.",
      "Mezcla la salsa cremosa ligera y colócala al fondo.",
      "Añade pasta y brócoli como capas resistentes.",
      "Sigue con tomate, zanahoria, aceitunas y queso.",
      "Termina con lechuga seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "una opción familiar y fácil de aceptar",
      "430 kcal aprox.",
      "3 días",
      "de pasta corta integral cocida",
      "de brócoli cocido al vapor",
      "de tomate cherry",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de pasta fría con verduras en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 22,
    "name": "Remolacha, naranja y queso",
    "category": "Vegetarianas",
    "shortDescription": "Ensalada dulce, ácida y visualmente atractiva. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de remolacha/betabel cocido en cubos",
      "1 naranja en gajos sin semillas",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "2 cucharadas de queso de cabra o fresco",
      "1 cucharada de nueces picadas",
      "menta opcional"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de jugo de naranja",
      "1 cucharada de vinagre de manzana",
      "1 cucharadita de miel",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de remolacha/betabel cocido en cubos",
      "1 naranja en gajos sin semillas",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "2 cucharadas de queso de cabra o fresco",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Corta la remolacha en cubos y escúrrela bien para que no tiña todo el frasco.",
      "Mezcla la vinagreta de naranja y ponla al fondo.",
      "Añade remolacha y pepino.",
      "Agrega naranja, queso y nueces.",
      "Termina con espinaca seca y menta."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "ensalada dulce, ácida y visualmente atractiva",
      "360 kcal aprox.",
      "2 días",
      "de remolacha/betabel cocido en cub",
      "naranja en gajos sin semillas",
      "de pepino",
      "de espinaca seca"
    ],
    "imagePrompt": "Foto realista vertical de remolacha, naranja y queso en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 23,
    "name": "Hummus y vegetales crocantes",
    "category": "Vegetarianas",
    "shortDescription": "Snack-almuerzo con textura cremosa. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "3 cucharadas de hummus",
      "1/2 taza de zanahoria en bastones pequeños",
      "1/2 taza de pepino en cubos",
      "1/2 taza de pimiento en tiras",
      "1/3 taza de garbanzos",
      "1 taza de hojas verdes secas",
      "1 cucharada de semillas"
    ],
    "dressing": "Salsa de hummus, funciona, como",
    "dressingIngredients": [
      "el hummus funciona como salsa",
      "1 cucharadita de limón",
      "1 cucharadita de agua si quieres aligerarlo",
      "paprika y pimienta al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3 cucharadas de hummus",
      "1/2 taza de zanahoria en bastones pequeños",
      "1/2 taza de pepino en cubos",
      "1/2 taza de pimiento en tiras",
      "1/3 taza de garbanzos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Mezcla el hummus con limón y agua si lo quieres más suave.",
      "Coloca el hummus en el fondo del frasco.",
      "Añade zanahoria, pepino y pimiento para que se mantengan crujientes.",
      "Agrega garbanzos y semillas.",
      "Finaliza con hojas verdes secas."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "snack-almuerzo con textura cremosa",
      "405 kcal aprox.",
      "3 días",
      "s de hummus",
      "de zanahoria en bastones pequeños",
      "de pepino en cubos",
      "de pimiento en tiras"
    ],
    "imagePrompt": "Foto realista vertical de hummus y vegetales crocantes en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 24,
    "name": "Edamame y pepino asiática",
    "category": "Vegetarianas",
    "shortDescription": "Ensalada fresca con proteína vegetal. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "3/4 taza de edamame cocido o chícharos",
      "1/2 taza de pepino",
      "1/2 taza de zanahoria rallada",
      "1/3 taza de repollo morado",
      "1 taza de espinaca seca",
      "1 cucharadita de ajonjolí",
      "cebollín al gusto"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de soya baja en sodio",
      "1 cucharada de limón",
      "1 cucharadita de miel",
      "1 cucharadita de aceite de ajonjolí opcional",
      "jengibre rallado"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de edamame cocido o chícharos",
      "1/2 taza de pepino",
      "1/2 taza de zanahoria rallada",
      "1/3 taza de repollo morado",
      "1 taza de espinaca seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece el edamame y enfría.",
      "Mezcla la salsa asiática y ponla en el fondo.",
      "Añade edamame, pepino, zanahoria y repollo morado.",
      "Agrega cebollín.",
      "Termina con espinaca seca y ajonjolí."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "ensalada fresca con proteína vegetal",
      "370 kcal aprox.",
      "3 días",
      "de edamame cocido o chícharos",
      "de pepino",
      "de zanahoria rallada",
      "de repollo morado"
    ],
    "imagePrompt": "Foto realista vertical de edamame y pepino asiática en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 25,
    "name": "Falafel desarmado",
    "category": "Vegetarianas",
    "shortDescription": "Sabor árabe sin complicarse. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "3/4 taza de garbanzos cocidos",
      "1/2 taza de pepino",
      "1/2 taza de tomate",
      "1/4 taza de cebolla morada",
      "1 taza de lechuga seca",
      "2 cucharadas de perejil",
      "1 cucharada de pan pita integral tostado opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de tahini o ajonjolí molido opcional",
      "1 cucharada de limón",
      "1/2 cucharadita de ajo en polvo",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de garbanzos cocidos",
      "1/2 taza de pepino",
      "1/2 taza de tomate",
      "1/4 taza de cebolla morada",
      "1 taza de lechuga seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Tritura ligeramente parte de los garbanzos con comino y perejil para recordar el sabor del falafel.",
      "Prepara la salsa de yogur y colócala al fondo.",
      "Añade garbanzos, pepino, tomate y cebolla.",
      "Agrega perejil y pan pita tostado aparte si quieres textura.",
      "Termina con lechuga seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Vegetarianas",
      "sabor árabe sin complicarse",
      "445 kcal aprox.",
      "3 días",
      "de garbanzos cocidos",
      "de pepino",
      "de tomate",
      "de cebolla morada"
    ],
    "imagePrompt": "Foto realista vertical de falafel desarmado en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 26,
    "name": "Arroz, huevo y zanahoria",
    "category": "Económicas",
    "shortDescription": "Aprovechar ingredientes básicos de casa. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de arroz integral cocido",
      "2 huevos cocidos",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1/3 taza de maíz",
      "1 taza de lechuga seca",
      "perejil al gusto"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de limón",
      "1 cucharadita de mostaza",
      "1 cucharadita de agua",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de arroz integral cocido",
      "2 huevos cocidos",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1/3 taza de maíz",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina el arroz y deja enfriar para que no humedezca el frasco.",
      "Hierve los huevos y córtalos en cuartos.",
      "Coloca la vinagreta al fondo y luego el arroz.",
      "Añade zanahoria, pepino, maíz y huevo.",
      "Termina con lechuga seca y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "aprovechar ingredientes básicos de casa",
      "390 kcal aprox.",
      "3 días",
      "de arroz integral cocido",
      "huevos cocidos",
      "de zanahoria rallada",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de arroz, huevo y zanahoria en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 27,
    "name": "Repollo cremoso con pollo",
    "category": "Económicas",
    "shortDescription": "Rendir pollo cocido y comer bien barato. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "90 g de pollo deshebrado",
      "1 taza de repollo blanco rallado",
      "1/2 taza de zanahoria rallada",
      "1/3 taza de maíz",
      "1/2 manzana en cubitos opcional",
      "1 taza de lechuga seca",
      "1 cucharada de semillas opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de mostaza",
      "1 cucharada de limón",
      "1 cucharadita de miel opcional",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "90 g de pollo deshebrado",
      "1 taza de repollo blanco rallado",
      "1/2 taza de zanahoria rallada",
      "1/3 taza de maíz",
      "1/2 manzana en cubitos opcional",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Deshebra el pollo y mezcla con un poco de sal y pimienta.",
      "Prepara la salsa cremosa y ponla al fondo.",
      "Añade repollo y zanahoria; estas verduras resisten muy bien la salsa.",
      "Agrega maíz, manzana y pollo.",
      "Finaliza con lechuga seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "rendir pollo cocido y comer bien barato",
      "410 kcal aprox.",
      "3 días",
      "de pollo deshebrado",
      "de repollo blanco rallado",
      "de zanahoria rallada",
      "de maíz"
    ],
    "imagePrompt": "Foto realista vertical de repollo cremoso con pollo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 28,
    "name": "Papa ligera con yogur",
    "category": "Económicas",
    "shortDescription": "Reemplazo de ensalada de papa pesada. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1 papa mediana cocida en cubos",
      "1 huevo cocido",
      "1/3 taza de zanahoria cocida en cubos",
      "1/3 taza de chícharos o arvejas",
      "1/2 taza de pepino",
      "1 taza de lechuga seca",
      "perejil al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de mostaza",
      "1 cucharadita de aceite de oliva",
      "1 cucharada de limón",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 papa mediana cocida en cubos",
      "1 huevo cocido",
      "1/3 taza de zanahoria cocida en cubos",
      "1/3 taza de chícharos o arvejas",
      "1/2 taza de pepino",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece la papa con cáscara o en cubos hasta que esté suave pero firme.",
      "Enfría la papa antes de montar. Mezcla la salsa de yogur.",
      "Coloca salsa y papa al fondo.",
      "Añade zanahoria, chícharos, pepino y huevo.",
      "Termina con lechuga seca y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "reemplazo de ensalada de papa pesada",
      "385 kcal aprox.",
      "3 días",
      "papa mediana cocida en cubos",
      "huevo cocido",
      "de zanahoria cocida en cubos",
      "de chícharos o arvejas"
    ],
    "imagePrompt": "Foto realista vertical de papa ligera con yogur en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 29,
    "name": "Atún con pasta y maíz",
    "category": "Económicas",
    "shortDescription": "Frasco rendidor para llevar al trabajo. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1 lata de atún escurrido",
      "1/2 taza de pasta corta cocida",
      "1/3 taza de maíz",
      "1/2 taza de pepino",
      "1/2 taza de tomate",
      "1 taza de lechuga seca",
      "1 cucharada de cebolla picada opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "1 cucharada de yogur",
      "1 cucharada de limón",
      "1 cucharadita de mostaza",
      "1 cucharadita de aceite de oliva",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 lata de atún escurrido",
      "1/2 taza de pasta corta cocida",
      "1/3 taza de maíz",
      "1/2 taza de pepino",
      "1/2 taza de tomate",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la pasta al dente y enfría.",
      "Escurre el atún y desmenúzalo.",
      "Coloca salsa, pasta y maíz en el fondo.",
      "Añade pepino, tomate, cebolla y atún.",
      "Finaliza con lechuga seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "frasco rendidor para llevar al trabajo",
      "440 kcal aprox.",
      "2 días",
      "de atún escurrido",
      "de pasta corta cocida",
      "de maíz",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de atún con pasta y maíz en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 30,
    "name": "Garbanzo, tomate y pepino",
    "category": "Económicas",
    "shortDescription": "Preparación rápida sin cocinar. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "3/4 taza de garbanzos cocidos",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de cebolla morada",
      "1 taza de hojas verdes secas",
      "perejil al gusto"
    ],
    "dressing": "Salsa de cucharadas, limon, cucharada",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharada de aceite de oliva",
      "1/2 cucharadita de comino",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de garbanzos cocidos",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de cebolla morada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Enjuaga y escurre los garbanzos si son de lata.",
      "Prepara la vinagreta y colócala al fondo.",
      "Añade garbanzos para que se marinen.",
      "Agrega tomate, pepino, zanahoria y cebolla.",
      "Termina con hojas secas y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "preparación rápida sin cocinar",
      "360 kcal aprox.",
      "4 días",
      "de garbanzos cocidos",
      "de tomate",
      "de pepino",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de garbanzo, tomate y pepino en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 31,
    "name": "Frijol rojo con arroz",
    "category": "Económicas",
    "shortDescription": "Comida completa de bajo costo. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de frijol rojo cocido",
      "1/2 taza de arroz integral cocido",
      "1/2 taza de tomate",
      "1/3 taza de maíz",
      "1/3 taza de pimiento",
      "1 taza de lechuga seca",
      "cilantro al gusto"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de limón",
      "1/2 cucharadita de comino",
      "1/2 cucharadita de paprika",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de frijol rojo cocido",
      "1/2 taza de arroz integral cocido",
      "1/2 taza de tomate",
      "1/3 taza de maíz",
      "1/3 taza de pimiento",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Enfría el arroz antes de montarlo.",
      "Mezcla la salsa de limón con comino y paprika.",
      "Coloca salsa, arroz y frijoles.",
      "Añade tomate, maíz y pimiento.",
      "Termina con lechuga seca y cilantro."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "comida completa de bajo costo",
      "430 kcal aprox.",
      "3 días",
      "de frijol rojo cocido",
      "de arroz integral cocido",
      "de tomate",
      "de maíz"
    ],
    "imagePrompt": "Foto realista vertical de frijol rojo con arroz en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 32,
    "name": "Fideos integrales con verduras",
    "category": "Económicas",
    "shortDescription": "Usar sobras de pasta sin caer en comida pesada. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "2/3 taza de fideos o pasta integral cocida",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de repollo morado",
      "1/2 taza de pepino",
      "1/3 taza de maíz o chícharos",
      "1 taza de espinaca seca",
      "1 cucharada de ajonjolí"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de soya baja en sodio",
      "1 cucharada de limón",
      "1 cucharadita de miel",
      "1 cucharadita de aceite opcional",
      "jengibre o ajo en polvo"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "2/3 taza de fideos o pasta integral cocida",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de repollo morado",
      "1/2 taza de pepino",
      "1/3 taza de maíz o chícharos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina los fideos al dente, enfría y escurre.",
      "Prepara la salsa agridulce ligera.",
      "Coloca salsa y fideos al fondo.",
      "Añade zanahoria, repollo, pepino y maíz.",
      "Termina con espinaca seca y ajonjolí."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "usar sobras de pasta sin caer en comida pesada",
      "410 kcal aprox.",
      "3 días",
      "de fideos o pasta integral cocida",
      "de zanahoria rallada",
      "de repollo morado",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de fideos integrales con verduras en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 33,
    "name": "Pollo, col y manzana",
    "category": "Económicas",
    "shortDescription": "Aprovechar pollo de la semana. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "100 g de pollo cocido deshebrado",
      "1 taza de col/repollo rallado",
      "1/2 manzana en cubos",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de apio",
      "1 taza de lechuga seca",
      "1 cucharada de cacahuate o nueces opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de limón",
      "1 cucharadita de mostaza",
      "pizca de sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "100 g de pollo cocido deshebrado",
      "1 taza de col/repollo rallado",
      "1/2 manzana en cubos",
      "1/3 taza de zanahoria rallada",
      "1/4 taza de apio",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Corta la manzana y rocíala con limón para que no se oxide.",
      "Mezcla la salsa cremosa y ponla al fondo.",
      "Añade col y zanahoria para proteger las hojas.",
      "Agrega apio, manzana y pollo.",
      "Finaliza con lechuga seca y cacahuate al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "aprovechar pollo de la semana",
      "395 kcal aprox.",
      "3 días",
      "de pollo cocido deshebrado",
      "de col/repollo rallado",
      "manzana en cubos",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de pollo, col y manzana en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 34,
    "name": "Lenteja con tomate y perejil",
    "category": "Económicas",
    "shortDescription": "Ensalada barata, fresca y muy rendidora. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "3/4 taza de lentejas cocidas",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/4 taza de cebolla",
      "1 taza de hojas verdes secas",
      "2 cucharadas de perejil",
      "1 cucharada de queso fresco opcional"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de vinagre",
      "1 cucharada de limón",
      "1/2 cucharadita de comino",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de lentejas cocidas",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/4 taza de cebolla",
      "1 taza de hojas verdes secas",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Escurre bien las lentejas y deja enfriar.",
      "Mezcla la vinagreta de limón y vinagre.",
      "Coloca salsa y lentejas en el fondo.",
      "Añade tomate, pepino, cebolla y queso si usas.",
      "Termina con hojas verdes y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "ensalada barata, fresca y muy rendidora",
      "350 kcal aprox.",
      "4 días",
      "de lentejas cocidas",
      "de tomate",
      "de pepino",
      "de cebolla"
    ],
    "imagePrompt": "Foto realista vertical de lenteja con tomate y perejil en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 35,
    "name": "Sardina con garbanzos",
    "category": "Económicas",
    "shortDescription": "Opción barata con proteína y grasas buenas. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "1 día refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 lata de sardina escurrida",
      "1/2 taza de garbanzos",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/4 taza de cebolla morada",
      "1 taza de lechuga seca",
      "limón extra para servir"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva o aceite de la sardina",
      "1 cucharada de limón",
      "1 cucharadita de mostaza",
      "pimienta y perejil"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 lata de sardina escurrida",
      "1/2 taza de garbanzos",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/4 taza de cebolla morada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Escurre la sardina y retira espinas grandes si prefieres.",
      "Prepara una salsa simple con limón, mostaza y pimienta.",
      "Coloca salsa y garbanzos al fondo.",
      "Añade tomate, pepino, cebolla y sardina.",
      "Termina con lechuga seca. Consume preferentemente el mismo día."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Económicas",
      "Económicas",
      "opción barata con proteína y grasas buenas",
      "455 kcal aprox.",
      "1 día",
      "de sardina escurrida",
      "de garbanzos",
      "de tomate",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de sardina con garbanzos en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 36,
    "name": "Pepino, tomate y cottage",
    "category": "Clásicas",
    "shortDescription": "Cena leve y refrescante. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/2 taza de queso cottage",
      "1/3 taza de zanahoria rallada",
      "1 taza de lechuga o espinaca seca",
      "1 cucharada de semillas de calabaza",
      "albahaca o perejil"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de limón",
      "1 cucharadita de mostaza",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/2 taza de queso cottage",
      "1/3 taza de zanahoria rallada",
      "1 taza de lechuga o espinaca seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Escurre el queso cottage si viene con mucho líquido.",
      "Prepara la vinagreta y colócala al fondo.",
      "Añade pepino, tomate y zanahoria.",
      "Coloca cottage en una capa intermedia.",
      "Termina con hojas secas y semillas al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "cena leve y refrescante",
      "310 kcal aprox.",
      "2 días",
      "de pepino",
      "de tomate cherry",
      "de queso cottage",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de pepino, tomate y cottage en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 37,
    "name": "Sandía, feta y menta",
    "category": "Clásicas",
    "shortDescription": "Día de calor o acompañamiento fresco. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "1 día refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 taza de sandía en cubos sin semillas",
      "1/2 taza de pepino",
      "2 cucharadas de queso feta o fresco",
      "1 taza de rúcula seca",
      "1 cucharada de menta picada",
      "1 cucharada de nueces opcional"
    ],
    "dressing": "Salsa de cucharada, limon, cucharadita",
    "dressingIngredients": [
      "1 cucharada de limón",
      "1 cucharadita de aceite de oliva",
      "1 cucharadita de miel opcional",
      "pizca de sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 taza de sandía en cubos sin semillas",
      "1/2 taza de pepino",
      "2 cucharadas de queso feta o fresco",
      "1 taza de rúcula seca",
      "1 cucharada de menta picada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Corta la sandía en cubos firmes y escurre exceso de jugo.",
      "Mezcla una vinagreta muy ligera y coloca poca cantidad al fondo.",
      "Añade pepino y sandía.",
      "Agrega queso y menta.",
      "Termina con rúcula seca y consume el mismo día."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "día de calor o acompañamiento fresco",
      "300 kcal aprox.",
      "1 día",
      "de sandía en cubos sin semillas",
      "de pepino",
      "s de queso feta o fresco",
      "de rúcula seca"
    ],
    "imagePrompt": "Foto realista vertical de sandía, feta y menta en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 38,
    "name": "Manzana verde, apio y nuez",
    "category": "Clásicas",
    "shortDescription": "Textura crocante y sabor dulce ácido. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 manzana verde en cubos",
      "1/2 taza de apio picado",
      "1/3 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "1 cucharada de nueces picadas",
      "2 cucharadas de queso cottage opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de limón",
      "1 cucharadita de miel",
      "pizca de canela opcional",
      "sal mínima"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 manzana verde en cubos",
      "1/2 taza de apio picado",
      "1/3 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Rocía la manzana con limón para evitar oxidación.",
      "Mezcla yogur, miel, limón y una pizca de sal.",
      "Coloca la salsa al fondo y añade apio y zanahoria.",
      "Agrega manzana, pepino y cottage si usas.",
      "Termina con espinaca seca y nueces al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "textura crocante y sabor dulce ácido",
      "340 kcal aprox.",
      "2 días",
      "manzana verde en cubos",
      "de apio picado",
      "de zanahoria rallada",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de manzana verde, apio y nuez en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 39,
    "name": "Tropical con piña y pollo",
    "category": "Clásicas",
    "shortDescription": "Sabor tropical sin salsas pesadas. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "110 g de pollo cocido en cubos",
      "1/2 taza de piña en cubos",
      "1/2 taza de pepino",
      "1/3 taza de pimiento rojo",
      "1/3 taza de zanahoria",
      "1 taza de lechuga seca",
      "cilantro al gusto"
    ],
    "dressing": "Salsa de cucharada, jugo, pina",
    "dressingIngredients": [
      "1 cucharada de jugo de piña natural",
      "1 cucharada de limón",
      "1 cucharadita de aceite de oliva",
      "pizca de sal, pimienta y chile opcional"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "110 g de pollo cocido en cubos",
      "1/2 taza de piña en cubos",
      "1/2 taza de pepino",
      "1/3 taza de pimiento rojo",
      "1/3 taza de zanahoria",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina el pollo y deja enfriar.",
      "Escurre la piña si suelta mucho jugo.",
      "Coloca la salsa cítrica en el fondo.",
      "Añade pepino, pimiento, zanahoria, piña y pollo.",
      "Termina con lechuga seca y cilantro."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "sabor tropical sin salsas pesadas",
      "410 kcal aprox.",
      "2 días",
      "de pollo cocido en cubos",
      "de piña en cubos",
      "de pepino",
      "de pimiento rojo"
    ],
    "imagePrompt": "Foto realista vertical de tropical con piña y pollo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 40,
    "name": "Calabacín, garbanzo y limón",
    "category": "Clásicas",
    "shortDescription": "Frasco verde, fresco y saciante. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de calabacín en medias lunas finas",
      "1/2 taza de garbanzos",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria",
      "1 taza de espinaca seca",
      "1 cucharada de queso fresco opcional",
      "perejil al gusto"
    ],
    "dressing": "Salsa de cucharadas, limon, cucharada",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharada de aceite de oliva",
      "1/2 cucharadita de ajo en polvo",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de calabacín en medias lunas finas",
      "1/2 taza de garbanzos",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria",
      "1 taza de espinaca seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Corta el calabacín muy fino; puedes usarlo crudo o saltearlo 2 minutos.",
      "Mezcla la vinagreta de limón.",
      "Coloca salsa y garbanzos en el fondo.",
      "Añade calabacín, pepino, zanahoria y queso.",
      "Finaliza con espinaca seca y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "frasco verde, fresco y saciante",
      "350 kcal aprox.",
      "3 días",
      "de calabacín en medias lunas finas",
      "de garbanzos",
      "de pepino",
      "de zanahoria"
    ],
    "imagePrompt": "Foto realista vertical de calabacín, garbanzo y limón en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 41,
    "name": "Fresa, espinaca y pollo",
    "category": "Clásicas",
    "shortDescription": "Ensalada dulce-salada para variar. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "1 día refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "100 g de pollo cocido",
      "1/2 taza de fresas en láminas",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "2 cucharadas de queso fresco",
      "1 cucharada de nueces o almendras",
      "1/4 taza de quinoa cocida opcional"
    ],
    "dressing": "Salsa de cucharada, vinagre, balsamico",
    "dressingIngredients": [
      "1 cucharada de vinagre balsámico",
      "1 cucharada de aceite de oliva",
      "1 cucharadita de miel",
      "pizca de sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "100 g de pollo cocido",
      "1/2 taza de fresas en láminas",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "2 cucharadas de queso fresco",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Lava las fresas y sécalas muy bien antes de cortar.",
      "Prepara la vinagreta balsámica y coloca al fondo.",
      "Añade pepino y quinoa si usas.",
      "Agrega pollo, fresas y queso.",
      "Termina con espinaca seca y nueces al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "ensalada dulce-salada para variar",
      "390 kcal aprox.",
      "1 día",
      "de pollo cocido",
      "de fresas en láminas",
      "de pepino",
      "de espinaca seca"
    ],
    "imagePrompt": "Foto realista vertical de fresa, espinaca y pollo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 42,
    "name": "Aguacate, maíz y lechuga",
    "category": "Clásicas",
    "shortDescription": "Sabor simple, fresco y latino. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días sin aguacate refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de maíz cocido",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/4 de aguacate para agregar al servir",
      "1 taza de lechuga seca",
      "1/3 taza de frijoles negros opcional",
      "cilantro al gusto"
    ],
    "dressing": "Salsa de cucharadas, limon, cucharadita",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharadita de aceite de oliva",
      "1/2 cucharadita de comino",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de maíz cocido",
      "1/2 taza de tomate",
      "1/2 taza de pepino",
      "1/4 de aguacate para agregar al servir",
      "1 taza de lechuga seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Mezcla la salsa de limón y comino.",
      "Coloca salsa, frijoles si usas y maíz al fondo.",
      "Añade tomate y pepino.",
      "Termina con lechuga seca y cilantro.",
      "Agrega aguacate al momento de comer para conservar color y textura."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "sabor simple, fresco y latino",
      "380 kcal aprox.",
      "2 días sin aguacate",
      "de maíz cocido",
      "de tomate",
      "de pepino",
      "aguacate para agregar al servir"
    ],
    "imagePrompt": "Foto realista vertical de aguacate, maíz y lechuga en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 43,
    "name": "Verde con aderezo de hierbas",
    "category": "Clásicas",
    "shortDescription": "Acompañamiento ligero para cualquier proteína. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 taza de lechuga romana seca",
      "1/2 taza de pepino",
      "1/2 taza de calabacín crudo en láminas",
      "1/3 taza de chícharos cocidos",
      "1/2 taza de espinaca",
      "1 cucharada de semillas",
      "perejil, cilantro o albahaca"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de limón",
      "1 cucharada de hierbas picadas",
      "1 cucharadita de aceite de oliva",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 taza de lechuga romana seca",
      "1/2 taza de pepino",
      "1/2 taza de calabacín crudo en láminas",
      "1/3 taza de chícharos cocidos",
      "1/2 taza de espinaca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Pica las hierbas finamente para que perfumen la salsa.",
      "Mezcla yogur, limón, aceite, sal y pimienta.",
      "Coloca la salsa al fondo del frasco.",
      "Añade pepino, calabacín, chícharos y espinaca.",
      "Termina con lechuga y semillas."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "acompañamiento ligero para cualquier proteína",
      "295 kcal aprox.",
      "2 días",
      "de lechuga romana seca",
      "de pepino",
      "de calabacín crudo en láminas",
      "de chícharos cocidos"
    ],
    "imagePrompt": "Foto realista vertical de verde con aderezo de hierbas en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 44,
    "name": "Col morada, zanahoria y sésamo",
    "category": "Clásicas",
    "shortDescription": "Ensalada crocante que dura varios días. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1 taza de col/repollo morado rallado",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1/3 taza de edamame o garbanzos",
      "1 taza de espinaca seca",
      "1 cucharadita de ajonjolí",
      "cebollín opcional"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de limón",
      "1 cucharada de soya baja en sodio",
      "1 cucharadita de miel",
      "1 cucharadita de aceite de ajonjolí opcional"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 taza de col/repollo morado rallado",
      "1/2 taza de zanahoria rallada",
      "1/2 taza de pepino",
      "1/3 taza de edamame o garbanzos",
      "1 taza de espinaca seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Ralla la col y la zanahoria finamente.",
      "Mezcla la salsa y colócala al fondo.",
      "Añade col morada y zanahoria para que tomen sabor.",
      "Agrega pepino y edamame o garbanzos.",
      "Termina con espinaca seca y ajonjolí."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "ensalada crocante que dura varios días",
      "320 kcal aprox.",
      "4 días",
      "de col/repollo morado rallado",
      "de zanahoria rallada",
      "de pepino",
      "de edamame o garbanzos"
    ],
    "imagePrompt": "Foto realista vertical de col morada, zanahoria y sésamo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 45,
    "name": "Palmito y tomate cherry",
    "category": "Clásicas",
    "shortDescription": "Ensalada suave, práctica y elegante. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "10 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de palmito en rodajas",
      "1/2 taza de tomate cherry",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria rallada",
      "1 taza de hojas verdes secas",
      "2 cucharadas de queso fresco opcional",
      "orégano al gusto"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de limón",
      "1 cucharada de vinagre",
      "1 cucharadita de mostaza",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de palmito en rodajas",
      "1/2 taza de tomate cherry",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria rallada",
      "1 taza de hojas verdes secas",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Escurre el palmito y sécalo un poco antes de usar.",
      "Prepara la vinagreta y colócala al fondo.",
      "Añade pepino, zanahoria y tomate.",
      "Agrega palmito y queso fresco.",
      "Termina con hojas verdes secas y orégano."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Clásicas",
      "Frescas y ligeras",
      "ensalada suave, práctica y elegante",
      "310 kcal aprox.",
      "2 días",
      "de palmito en rodajas",
      "de tomate cherry",
      "de pepino",
      "de zanahoria rallada"
    ],
    "imagePrompt": "Foto realista vertical de palmito y tomate cherry en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 46,
    "name": "Big Mac fit en frasco",
    "category": "Gourmet",
    "shortDescription": "Antojo de hamburguesa en versión ensalada. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de carne molida magra o pavo molido cocido",
      "1 taza de lechuga iceberg o romana seca",
      "1/3 taza de pepinillos picados",
      "1/3 taza de tomate en cubos",
      "1/4 taza de cebolla picada",
      "2 cucharadas de queso rallado",
      "1 cucharada de ajonjolí opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de mostaza",
      "1 cucharadita de ketchup sin exceso de azúcar",
      "1 cucharadita de pepinillo picado",
      "1/2 cucharadita de paprika",
      "pizca de sal y ajo en polvo"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de carne molida magra o pavo molido cocido",
      "1 taza de lechuga iceberg o romana seca",
      "1/3 taza de pepinillos picados",
      "1/3 taza de tomate en cubos",
      "1/4 taza de cebolla picada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la carne molida con sal, pimienta y ajo en polvo. Deja enfriar.",
      "Mezcla todos los ingredientes de la salsa Big Mac fit hasta que quede cremosa.",
      "Coloca la salsa al fondo y añade pepinillos, cebolla y tomate.",
      "Agrega la carne y el queso.",
      "Termina con lechuga seca y ajonjolí."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "antojo de hamburguesa en versión ensalada",
      "470 kcal aprox.",
      "2 días",
      "de carne molida magra o pavo molid",
      "de lechuga iceberg o romana seca",
      "de pepinillos picados",
      "de tomate en cubos"
    ],
    "imagePrompt": "Foto realista vertical de big mac fit en frasco en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 47,
    "name": "Taco salad con pavo",
    "category": "Gourmet",
    "shortDescription": "Sabor de taco sin tortilla frita. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "22 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pavo molido cocido",
      "1/2 taza de frijoles negros",
      "1/3 taza de maíz",
      "1/2 taza de tomate",
      "1/3 taza de pimiento",
      "1 taza de lechuga seca",
      "2 cucharadas de queso rallado",
      "cilantro al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur",
      "1 cucharada de limón",
      "1/2 cucharadita de comino",
      "1/2 cucharadita de paprika",
      "sal y chile opcional"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pavo molido cocido",
      "1/2 taza de frijoles negros",
      "1/3 taza de maíz",
      "1/2 taza de tomate",
      "1/3 taza de pimiento",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina el pavo con comino, paprika, sal y pimienta. Enfría.",
      "Prepara la salsa de yogur y limón.",
      "Coloca salsa, frijoles y maíz al fondo.",
      "Añade tomate, pimiento, pavo y queso.",
      "Finaliza con lechuga seca y cilantro."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "sabor de taco sin tortilla frita",
      "460 kcal aprox.",
      "3 días",
      "de pavo molido cocido",
      "de frijoles negros",
      "de maíz",
      "de tomate"
    ],
    "imagePrompt": "Foto realista vertical de taco salad con pavo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 48,
    "name": "Sushi salad con atún",
    "category": "Gourmet",
    "shortDescription": "Sabor a sushi sin enrollar nada. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1 lata de atún escurrido o 100 g de salmón cocido",
      "1/2 taza de arroz cocido frío",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria",
      "1/4 de aguacate al servir",
      "1 taza de espinaca seca",
      "1 cucharadita de ajonjolí"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de soya baja en sodio",
      "1 cucharada de limón",
      "1 cucharadita de miel",
      "1 cucharadita de yogur opcional para cremosidad",
      "jengibre al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1 lata de atún escurrido o 100 g de salmón cocido",
      "1/2 taza de arroz cocido frío",
      "1/2 taza de pepino",
      "1/3 taza de zanahoria",
      "1/4 de aguacate al servir",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Enfría el arroz y escúrrelo si está muy húmedo.",
      "Mezcla la salsa de soya, limón, miel y jengibre.",
      "Coloca salsa y arroz en el fondo.",
      "Añade pepino, zanahoria y atún.",
      "Termina con espinaca, ajonjolí y aguacate al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "sabor a sushi sin enrollar nada",
      "430 kcal aprox.",
      "2 días",
      "de atún escurrido o 100 g de salmó",
      "de arroz cocido frío",
      "de pepino",
      "de zanahoria"
    ],
    "imagePrompt": "Foto realista vertical de sushi salad con atún en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 49,
    "name": "Burrito bowl vegetariano",
    "category": "Gourmet",
    "shortDescription": "Comida vegetariana completa y saciante. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de arroz integral",
      "1/2 taza de frijoles negros",
      "1/3 taza de maíz",
      "1/2 taza de tomate",
      "1/3 taza de pimiento",
      "1 taza de lechuga seca",
      "2 cucharadas de aguacate al servir",
      "cilantro"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharada de yogur natural",
      "1/2 cucharadita de comino",
      "1/2 cucharadita de paprika",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de arroz integral",
      "1/2 taza de frijoles negros",
      "1/3 taza de maíz",
      "1/2 taza de tomate",
      "1/3 taza de pimiento",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina arroz y frijoles con anticipación y deja enfriar.",
      "Mezcla la salsa cremosa de limón y especias.",
      "Coloca salsa, arroz y frijoles al fondo.",
      "Añade maíz, tomate y pimiento.",
      "Termina con lechuga seca, cilantro y aguacate al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "comida vegetariana completa y saciante",
      "450 kcal aprox.",
      "3 días",
      "de arroz integral",
      "de frijoles negros",
      "de maíz",
      "de tomate"
    ],
    "imagePrompt": "Foto realista vertical de burrito bowl vegetariano en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 50,
    "name": "Pollo buffalo ligero",
    "category": "Gourmet",
    "shortDescription": "Sabor picante controlado y cremoso. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pollo cocido deshebrado",
      "1/2 taza de apio picado",
      "1/2 taza de zanahoria en tiras",
      "1/2 taza de pepino",
      "1 taza de lechuga seca",
      "2 cucharadas de queso fresco",
      "cebollín opcional"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "1 cucharada de salsa picante suave",
      "2 cucharadas de yogur natural",
      "1 cucharadita de limón",
      "1/2 cucharadita de ajo en polvo",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pollo cocido deshebrado",
      "1/2 taza de apio picado",
      "1/2 taza de zanahoria en tiras",
      "1/2 taza de pepino",
      "1 taza de lechuga seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Mezcla el pollo con la mitad de la salsa buffalo ligera.",
      "Coloca el resto de la salsa al fondo.",
      "Añade apio, zanahoria y pepino.",
      "Agrega pollo y queso fresco.",
      "Termina con lechuga seca y cebollín."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "sabor picante controlado y cremoso",
      "430 kcal aprox.",
      "2 días",
      "de pollo cocido deshebrado",
      "de apio picado",
      "de zanahoria en tiras",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de pollo buffalo ligero en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 51,
    "name": "Pesto italiano con mozzarella",
    "category": "Gourmet",
    "shortDescription": "Sabor de restaurante con pocos ingredientes. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "15 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "1/2 taza de pasta integral o garbanzos",
      "80 g de mozzarella en cubos",
      "1/2 taza de tomate cherry",
      "1/2 taza de pepino",
      "1 taza de rúcula seca",
      "1 cucharada de nueces",
      "albahaca fresca"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "1 cucharada de pesto",
      "1 cucharada de yogur o agua",
      "1 cucharadita de limón",
      "pimienta al gusto"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de pasta integral o garbanzos",
      "80 g de mozzarella en cubos",
      "1/2 taza de tomate cherry",
      "1/2 taza de pepino",
      "1 taza de rúcula seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Aligera el pesto con yogur o agua para que no quede aceitoso.",
      "Coloca la salsa al fondo.",
      "Añade pasta o garbanzos como base.",
      "Agrega pepino, tomate, mozzarella y nueces.",
      "Finaliza con rúcula y albahaca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "sabor de restaurante con pocos ingredientes",
      "420 kcal aprox.",
      "2 días",
      "de pasta integral o garbanzos",
      "de mozzarella en cubos",
      "de tomate cherry",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de pesto italiano con mozzarella en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 52,
    "name": "Shawarma de pollo con yogur",
    "category": "Gourmet",
    "shortDescription": "Sabor árabe especiado en meal prep. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de pollo en tiras",
      "1/2 taza de pepino",
      "1/2 taza de tomate",
      "1/3 taza de cebolla morada",
      "1/2 taza de garbanzos",
      "1 taza de lechuga seca",
      "perejil al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharada de limón",
      "1/2 cucharadita de ajo en polvo",
      "1/2 cucharadita de comino",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de pollo en tiras",
      "1/2 taza de pepino",
      "1/2 taza de tomate",
      "1/3 taza de cebolla morada",
      "1/2 taza de garbanzos",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Sazona el pollo con comino, paprika, ajo, sal y pimienta. Cocina y enfría.",
      "Mezcla la salsa de yogur con limón y ajo.",
      "Coloca salsa y garbanzos al fondo.",
      "Añade pepino, tomate, cebolla y pollo.",
      "Termina con lechuga seca y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "sabor árabe especiado en meal prep",
      "455 kcal aprox.",
      "3 días",
      "de pollo en tiras",
      "de pepino",
      "de tomate",
      "de cebolla morada"
    ],
    "imagePrompt": "Foto realista vertical de shawarma de pollo con yogur en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 53,
    "name": "Teriyaki de res",
    "category": "Gourmet",
    "shortDescription": "Ensalada con sabor oriental y proteína fuerte. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de res magra en tiras",
      "1/2 taza de arroz integral",
      "1/2 taza de brócoli al vapor",
      "1/3 taza de zanahoria",
      "1/2 taza de pepino",
      "1 taza de espinaca seca",
      "ajonjolí"
    ],
    "dressing": "Aderezo oriental ligero",
    "dressingIngredients": [
      "1 cucharada de soya baja en sodio",
      "1 cucharadita de miel",
      "1 cucharada de limón",
      "1 cucharadita de jengibre",
      "1 cucharadita de agua"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de res magra en tiras",
      "1/2 taza de arroz integral",
      "1/2 taza de brócoli al vapor",
      "1/3 taza de zanahoria",
      "1/2 taza de pepino",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cocina la res en tiras a fuego alto para que quede jugosa.",
      "Mezcla la salsa teriyaki ligera.",
      "Coloca salsa y arroz al fondo.",
      "Añade brócoli, zanahoria, pepino y res.",
      "Finaliza con espinaca seca y ajonjolí."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "ensalada con sabor oriental y proteína fuerte",
      "485 kcal aprox.",
      "2 días",
      "de res magra en tiras",
      "de arroz integral",
      "de brócoli al vapor",
      "de zanahoria"
    ],
    "imagePrompt": "Foto realista vertical de teriyaki de res en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 54,
    "name": "Mediterránea de camarón",
    "category": "Gourmet",
    "shortDescription": "Opción fresca para vender como premium. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "1 día refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "120 g de camarón cocido",
      "1/2 taza de garbanzos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/4 taza de cebolla morada",
      "1 taza de lechuga seca",
      "1 cucharada de queso feta opcional"
    ],
    "dressing": "Salsa de cucharadas, limon, cucharada",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharada de aceite de oliva",
      "1/2 cucharadita de orégano",
      "1/2 diente de ajo rallado",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "120 g de camarón cocido",
      "1/2 taza de garbanzos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/4 taza de cebolla morada",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece los camarones y enfría antes de montar.",
      "Prepara la vinagreta mediterránea.",
      "Coloca salsa y garbanzos al fondo.",
      "Añade pepino, tomate, cebolla, camarón y queso.",
      "Termina con lechuga seca. Consume el mismo día o al día siguiente."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "opción fresca para vender como premium",
      "405 kcal aprox.",
      "1 día",
      "de camarón cocido",
      "de garbanzos",
      "de pepino",
      "de tomate cherry"
    ],
    "imagePrompt": "Foto realista vertical de mediterránea de camarón en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 55,
    "name": "Cuscús marroquí",
    "category": "Gourmet",
    "shortDescription": "Sabor especiado y diferente. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "20 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de cuscús hidratado o quinoa",
      "1/2 taza de garbanzos",
      "1/3 taza de zanahoria rallada",
      "1/3 taza de pepino",
      "1/4 taza de pasas o dátiles picados opcional",
      "1 taza de espinaca seca",
      "1 cucharada de almendras"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de limón",
      "1/2 cucharadita de comino",
      "pizca de canela",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de cuscús hidratado o quinoa",
      "1/2 taza de garbanzos",
      "1/3 taza de zanahoria rallada",
      "1/3 taza de pepino",
      "1/4 taza de pasas o dátiles picados opcional",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Hidrata el cuscús con agua caliente y suelta con un tenedor. Enfría.",
      "Mezcla la vinagreta especiada.",
      "Coloca salsa, cuscús y garbanzos.",
      "Añade zanahoria, pepino y pasas si usas.",
      "Termina con espinaca seca y almendras al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "sabor especiado y diferente",
      "430 kcal aprox.",
      "3 días",
      "de cuscús hidratado o quinoa",
      "de garbanzos",
      "de zanahoria rallada",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de cuscús marroquí en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 56,
    "name": "Garbanzos griegos con feta",
    "category": "Gourmet",
    "shortDescription": "Vegetariana premium sin cocinar. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "3/4 taza de garbanzos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/4 taza de cebolla morada",
      "2 cucharadas de queso feta",
      "1 taza de lechuga seca",
      "aceitunas y orégano"
    ],
    "dressing": "Salsa de cucharadas, aceite, oliva",
    "dressingIngredients": [
      "2 cucharadas de aceite de oliva",
      "1 cucharada de limón",
      "1 cucharadita de vinagre",
      "orégano, sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de garbanzos",
      "1/2 taza de pepino",
      "1/2 taza de tomate cherry",
      "1/4 taza de cebolla morada",
      "2 cucharadas de queso feta",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Enjuaga los garbanzos y escurre muy bien.",
      "Mezcla la vinagreta griega y ponla al fondo.",
      "Añade garbanzos, pepino, tomate y cebolla.",
      "Agrega queso feta, aceitunas y orégano.",
      "Termina con lechuga seca."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "vegetariana premium sin cocinar",
      "400 kcal aprox.",
      "3 días",
      "de garbanzos",
      "de pepino",
      "de tomate cherry",
      "de cebolla morada"
    ],
    "imagePrompt": "Foto realista vertical de garbanzos griegos con feta en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 57,
    "name": "César de garbanzos tostados",
    "category": "Gourmet",
    "shortDescription": "Versión vegetariana de una clásica. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "25 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "3/4 taza de garbanzos cocidos",
      "1 taza y 1/2 de lechuga romana seca",
      "1/2 taza de pepino",
      "2 cucharadas de parmesano",
      "1 cucharada de crutones integrales al servir",
      "ajo en polvo y paprika"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de mostaza",
      "1 cucharada de limón",
      "1 cucharada de parmesano",
      "pimienta y ajo en polvo"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "3/4 taza de garbanzos cocidos",
      "1 taza y 1/2 de lechuga romana seca",
      "1/2 taza de pepino",
      "2 cucharadas de parmesano",
      "1 cucharada de crutones integrales al servir",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Seca los garbanzos y dóralos con paprika y ajo hasta que queden firmes.",
      "Mezcla la salsa César ligera y colócala al fondo.",
      "Añade pepino y garbanzos tostados fríos.",
      "Agrega parmesano.",
      "Termina con lechuga seca y crutones al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "versión vegetariana de una clásica",
      "415 kcal aprox.",
      "3 días",
      "de garbanzos cocidos",
      "y 1/2 de lechuga romana seca",
      "de pepino",
      "s de parmesano"
    ],
    "imagePrompt": "Foto realista vertical de césar de garbanzos tostados en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 58,
    "name": "Rusa fit con pollo",
    "category": "Gourmet",
    "shortDescription": "Ensalada rusa más ligera y completa. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "30 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "100 g de pollo deshebrado",
      "1/2 taza de papa cocida en cubos",
      "1/3 taza de zanahoria cocida",
      "1/3 taza de chícharos",
      "1/3 taza de pepino o pepinillo",
      "1 taza de lechuga seca",
      "perejil al gusto"
    ],
    "dressing": "Aderezo cremoso de yogur",
    "dressingIngredients": [
      "2 cucharadas de yogur natural",
      "1 cucharadita de mostaza",
      "1 cucharadita de aceite de oliva",
      "1 cucharada de limón",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "100 g de pollo deshebrado",
      "1/2 taza de papa cocida en cubos",
      "1/3 taza de zanahoria cocida",
      "1/3 taza de chícharos",
      "1/3 taza de pepino o pepinillo",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece papa y zanahoria en cubos hasta que estén suaves pero firmes. Enfría.",
      "Mezcla la salsa cremosa ligera.",
      "Coloca salsa, papa y zanahoria al fondo.",
      "Añade chícharos, pepino y pollo.",
      "Finaliza con lechuga seca y perejil."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "ensalada rusa más ligera y completa",
      "440 kcal aprox.",
      "3 días",
      "de pollo deshebrado",
      "de papa cocida en cubos",
      "de zanahoria cocida",
      "de chícharos"
    ],
    "imagePrompt": "Foto realista vertical de rusa fit con pollo en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 59,
    "name": "Nopal, frijol y queso",
    "category": "Gourmet",
    "shortDescription": "Versión mexicana fresca y económica. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de nopal cocido en cubos",
      "1/2 taza de frijol negro o bayo",
      "1/2 taza de tomate",
      "1/3 taza de maíz",
      "1/4 taza de cebolla",
      "2 cucharadas de queso fresco",
      "1 taza de lechuga seca",
      "cilantro"
    ],
    "dressing": "Salsa de cucharadas, limon, cucharadita",
    "dressingIngredients": [
      "2 cucharadas de limón",
      "1 cucharadita de aceite de oliva",
      "1/2 cucharadita de comino",
      "sal, pimienta y chile opcional"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de nopal cocido en cubos",
      "1/2 taza de frijol negro o bayo",
      "1/2 taza de tomate",
      "1/3 taza de maíz",
      "1/4 taza de cebolla",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Cuece el nopal y enjuaga para retirar baba. Escurre muy bien.",
      "Mezcla la salsa de limón y comino.",
      "Coloca salsa, frijol y nopal al fondo.",
      "Añade tomate, maíz, cebolla y queso.",
      "Termina con lechuga seca y cilantro."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "versión mexicana fresca y económica",
      "360 kcal aprox.",
      "3 días",
      "de nopal cocido en cubos",
      "de frijol negro o bayo",
      "de tomate",
      "de maíz"
    ],
    "imagePrompt": "Foto realista vertical de nopal, frijol y queso en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 60,
    "name": "Camote, quinoa y semillas",
    "category": "Gourmet",
    "shortDescription": "Frasco saciante para días largos. Una receta práctica en frasco con capas visibles, salsa sabrosa y montaje fácil para tu semana.",
    "prepTime": "30 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 días refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "1/2 taza de camote asado en cubos",
      "1/2 taza de quinoa cocida",
      "1/2 taza de garbanzos",
      "1/3 taza de pepino",
      "1 taza de espinaca seca",
      "1 cucharada de semillas de calabaza",
      "2 cucharadas de queso fresco opcional"
    ],
    "dressing": "Salsa de cucharada, aceite, oliva",
    "dressingIngredients": [
      "1 cucharada de aceite de oliva",
      "1 cucharada de limón",
      "1 cucharadita de mostaza",
      "1 cucharadita de miel",
      "sal y pimienta"
    ],
    "dressingPreparation": "Mezcla todos los ingredientes de la salsa hasta integrar. Prueba sal, acidez y textura antes de colocarla en el fondo del frasco.",
    "layers": [
      "salsa o aderezo en el fondo",
      "1/2 taza de camote asado en cubos",
      "1/2 taza de quinoa cocida",
      "1/2 taza de garbanzos",
      "1/3 taza de pepino",
      "1 taza de espinaca seca",
      "hojas verdes secas en la parte superior"
    ],
    "preparation": [
      "Asa el camote en cubos con pizca de sal hasta que esté suave. Enfría.",
      "Cocina la quinoa y deja enfriar.",
      "Coloca la vinagreta al fondo.",
      "Añade quinoa, garbanzos, camote y pepino.",
      "Termina con espinaca seca, semillas y queso al servir."
    ],
    "conservationTip": "mantén la salsa abajo, los ingredientes firmes en el centro y las hojas siempre arriba, completamente secas. Así el frasco dura más y no se aguada.",
    "tags": [
      "Gourmet",
      "Especiales con salsa",
      "frasco saciante para días largos",
      "450 kcal aprox.",
      "4 días",
      "de camote asado en cubos",
      "de quinoa cocida",
      "de garbanzos",
      "de pepino"
    ],
    "imagePrompt": "Foto realista vertical de camote, quinoa y semillas en frasco de vidrio, capas visibles de ensalada fresca, luz natural, fondo crema, estilo app premium saludable."
  }
];
