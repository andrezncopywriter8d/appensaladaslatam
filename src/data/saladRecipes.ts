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
    "name": "Ensalada Mediterránea en Frasco",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 a 5 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "pepino",
      "tomate cherry",
      "cebolla morada",
      "queso fresco",
      "aceitunas",
      "lechuga"
    ],
    "dressing": "limón, aceite de oliva y orégano",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "pepino",
      "tomate cherry",
      "cebolla morada",
      "queso fresco",
      "aceitunas",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Mediterránea en Frasco antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Mediterránea en Frasco siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "limón, aceite de oliva y orégano",
      "garbanzos",
      "pepino",
      "tomate cherry",
      "cebolla morada",
      "queso fresco",
      "Clasicas",
      "3 a 5 dias",
      "limón,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada mediterránea en frasco en frasco de vidrio, capas visibles de garbanzos, pepino, tomate cherry, cebolla morada, queso fresco, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 2,
    "name": "Ensalada César Ligera en Frasco",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "lechuga romana",
      "crutones separado",
      "queso parmesano",
      "tomate cherry",
      "hojas verdes"
    ],
    "dressing": "yogur, limón, mostaza y parmesano",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "crutones separado",
      "queso parmesano",
      "tomate cherry",
      "lechuga romana en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada César Ligera en Frasco antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada César Ligera en Frasco siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "yogur, limón, mostaza y parmesano",
      "pollo",
      "lechuga romana",
      "crutones separado",
      "queso parmesano",
      "tomate cherry",
      "Clasicas",
      "3 dias",
      "yogur,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada césar ligera en frasco en frasco de vidrio, capas visibles de pollo, lechuga romana, crutones separado, queso parmesano, tomate cherry, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 3,
    "name": "Ensalada de Atún y Maíz",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "atn",
      "maz",
      "pepino",
      "zanahoria",
      "tomate",
      "lechuga"
    ],
    "dressing": "yogur con limón",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "atn",
      "maz",
      "pepino",
      "zanahoria",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Atún y Maíz antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Atún y Maíz siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "yogur con limón",
      "atn",
      "maz",
      "pepino",
      "zanahoria",
      "tomate",
      "2 a 3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de atún y maíz en frasco de vidrio, capas visibles de atn, maz, pepino, zanahoria, tomate, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 4,
    "name": "Ensalada de Pollo con Aguacate",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "aguacate",
      "tomate",
      "pepino",
      "maz",
      "hojas verdes"
    ],
    "dressing": "limón y aceite de oliva",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "aguacate",
      "tomate",
      "pepino",
      "maz",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo con Aguacate antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo con Aguacate siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "limón y aceite de oliva",
      "pollo",
      "aguacate",
      "tomate",
      "pepino",
      "maz",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo con aguacate en frasco de vidrio, capas visibles de pollo, aguacate, tomate, pepino, maz, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 5,
    "name": "Ensalada Tropical",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "pia",
      "zanahoria",
      "repollo morado",
      "lechuga",
      "semillas"
    ],
    "dressing": "yogur con miel y limón",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "pia",
      "zanahoria",
      "repollo morado",
      "semillas",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Tropical antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Tropical siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "yogur con miel y limón",
      "pollo",
      "pia",
      "zanahoria",
      "repollo morado",
      "lechuga",
      "Clasicas",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada tropical en frasco de vidrio, capas visibles de pollo, pia, zanahoria, repollo morado, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 6,
    "name": "Ensalada Mexicana en Frasco",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "frijoles negros",
      "maz",
      "tomate",
      "aguacate",
      "cebolla",
      "lechuga"
    ],
    "dressing": "limón, cilantro y aceite de oliva",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "frijoles negros",
      "maz",
      "tomate",
      "aguacate",
      "cebolla",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Mexicana en Frasco antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Mexicana en Frasco siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "limón, cilantro y aceite de oliva",
      "frijoles negros",
      "maz",
      "tomate",
      "aguacate",
      "cebolla",
      "Clasicas",
      "3 dias",
      "limón,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada mexicana en frasco en frasco de vidrio, capas visibles de frijoles negros, maz, tomate, aguacate, cebolla, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 7,
    "name": "Ensalada de Garbanzos y Pepino",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 a 5 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "pepino",
      "tomate",
      "cebolla morada",
      "perejil",
      "lechuga"
    ],
    "dressing": "limón, aceite y sal",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "pepino",
      "tomate",
      "cebolla morada",
      "perejil",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Garbanzos y Pepino antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Garbanzos y Pepino siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón, aceite y sal",
      "garbanzos",
      "pepino",
      "tomate",
      "cebolla morada",
      "perejil",
      "4 a 5 dias",
      "limón,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de garbanzos y pepino en frasco de vidrio, capas visibles de garbanzos, pepino, tomate, cebolla morada, perejil, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 8,
    "name": "Ensalada Caprese en Frasco",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "tomate cherry",
      "mozzarella",
      "albahaca",
      "hojas verdes",
      "pepino",
      "perejil fresco"
    ],
    "dressing": "pesto ligero",
    "dressingIngredients": [
      "albahaca fresca",
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "queso rallado opcional"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "tomate cherry",
      "mozzarella",
      "albahaca",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Caprese en Frasco antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Caprese en Frasco siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "pesto ligero",
      "tomate cherry",
      "mozzarella",
      "albahaca",
      "hojas verdes",
      "pepino",
      "2 a 3 dias",
      "pesto"
    ],
    "imagePrompt": "Foto realista vertical de ensalada caprese en frasco en frasco de vidrio, capas visibles de tomate cherry, mozzarella, albahaca, hojas verdes, pepino, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 9,
    "name": "Ensalada de Quinoa Colorida",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "quinoa",
      "pepino",
      "zanahoria",
      "tomate",
      "maz",
      "hojas verdes"
    ],
    "dressing": "limón y mostaza",
    "dressingIngredients": [
      "mostaza",
      "jugo de limón",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "quinoa",
      "pepino",
      "zanahoria",
      "tomate",
      "maz",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Quinoa Colorida antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Quinoa Colorida siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y mostaza",
      "quinoa",
      "pepino",
      "zanahoria",
      "tomate",
      "maz",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de quinoa colorida en frasco de vidrio, capas visibles de quinoa, pepino, zanahoria, tomate, maz, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 10,
    "name": "Ensalada de Huevo y Papas",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "huevo cocido",
      "papa cocida",
      "zanahoria",
      "pepino",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con mostaza",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "huevo cocido",
      "papa cocida",
      "zanahoria",
      "pepino",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Huevo y Papas antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Huevo y Papas siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "yogur con mostaza",
      "huevo cocido",
      "papa cocida",
      "zanahoria",
      "pepino",
      "lechuga",
      "Economicas",
      "2 a 3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de huevo y papas en frasco de vidrio, capas visibles de huevo cocido, papa cocida, zanahoria, pepino, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 11,
    "name": "Ensalada Verde Crujiente",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pepino",
      "apio",
      "manzana verde",
      "lechuga",
      "semillas",
      "hojas verdes"
    ],
    "dressing": "limón y miel",
    "dressingIngredients": [
      "jugo de limón",
      "miel",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pepino",
      "apio",
      "manzana verde",
      "semillas",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Verde Crujiente antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Verde Crujiente siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "limón y miel",
      "pepino",
      "apio",
      "manzana verde",
      "lechuga",
      "semillas",
      "Clasicas",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada verde crujiente en frasco de vidrio, capas visibles de pepino, apio, manzana verde, lechuga, semillas, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 12,
    "name": "Ensalada de Pasta Fra",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pasta corta",
      "tomate",
      "maz",
      "pollo",
      "zanahoria",
      "hojas verdes"
    ],
    "dressing": "yogur con hierbas",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pasta corta",
      "tomate",
      "maz",
      "pollo",
      "zanahoria",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pasta Fra antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pasta Fra siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "yogur con hierbas",
      "pasta corta",
      "tomate",
      "maz",
      "pollo",
      "zanahoria",
      "Economicas",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pasta fra en frasco de vidrio, capas visibles de pasta corta, tomate, maz, pollo, zanahoria, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 13,
    "name": "Ensalada de Lentejas",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 a 5 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "lentejas",
      "tomate",
      "cebolla",
      "pepino",
      "zanahoria",
      "perejil"
    ],
    "dressing": "vinagreta clasica",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "lentejas",
      "tomate",
      "cebolla",
      "pepino",
      "zanahoria",
      "perejil",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Lentejas antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Lentejas siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "vinagreta clasica",
      "lentejas",
      "tomate",
      "cebolla",
      "pepino",
      "zanahoria",
      "4 a 5 dias",
      "vinagreta"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de lentejas en frasco de vidrio, capas visibles de lentejas, tomate, cebolla, pepino, zanahoria, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 14,
    "name": "Ensalada de Pollo BBQ Ligera",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "maz",
      "repollo",
      "zanahoria",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "salsa BBQ ligera con yogur",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "maz",
      "repollo",
      "zanahoria",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo BBQ Ligera antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo BBQ Ligera siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "salsa BBQ ligera con yogur",
      "pollo",
      "maz",
      "repollo",
      "zanahoria",
      "lechuga",
      "3 dias",
      "salsa"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo bbq ligera en frasco de vidrio, capas visibles de pollo, maz, repollo, zanahoria, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 15,
    "name": "Ensalada Griega",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 a 4 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pepino",
      "tomate",
      "aceitunas",
      "queso feta",
      "cebolla morada",
      "lechuga"
    ],
    "dressing": "aceite de oliva, limón y orégano",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pepino",
      "tomate",
      "aceitunas",
      "queso feta",
      "cebolla morada",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Griega antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Griega siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "aceite de oliva, limón y orégano",
      "pepino",
      "tomate",
      "aceitunas",
      "queso feta",
      "cebolla morada",
      "3 a 4 dias",
      "aceite"
    ],
    "imagePrompt": "Foto realista vertical de ensalada griega en frasco de vidrio, capas visibles de pepino, tomate, aceitunas, queso feta, cebolla morada, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 16,
    "name": "Ensalada de Manzana y Nueces",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "manzana",
      "nueces",
      "queso fresco",
      "zanahoria",
      "hojas verdes",
      "pepino"
    ],
    "dressing": "yogur con miel",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "manzana",
      "nueces",
      "queso fresco",
      "zanahoria",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Manzana y Nueces antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Manzana y Nueces siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "yogur con miel",
      "manzana",
      "nueces",
      "queso fresco",
      "zanahoria",
      "hojas verdes",
      "2 a 3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de manzana y nueces en frasco de vidrio, capas visibles de manzana, nueces, queso fresco, zanahoria, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 17,
    "name": "Ensalada de Camarones",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "camarones cocidos",
      "pepino",
      "tomate",
      "aguacate",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "limón, ajo y aceite de oliva",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "camarones cocidos",
      "pepino",
      "tomate",
      "aguacate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Camarones antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Camarones siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "limón, ajo y aceite de oliva",
      "camarones cocidos",
      "pepino",
      "tomate",
      "aguacate",
      "lechuga",
      "2 dias",
      "limón,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de camarones en frasco de vidrio, capas visibles de camarones cocidos, pepino, tomate, aguacate, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 18,
    "name": "Ensalada Vegana de Frijoles",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "frijoles",
      "maz",
      "tomate",
      "cebolla",
      "cilantro",
      "lechuga"
    ],
    "dressing": "limón y comino",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "frijoles",
      "maz",
      "tomate",
      "cebolla",
      "cilantro",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Vegana de Frijoles antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Vegana de Frijoles siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y comino",
      "frijoles",
      "maz",
      "tomate",
      "cebolla",
      "cilantro",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada vegana de frijoles en frasco de vidrio, capas visibles de frijoles, maz, tomate, cebolla, cilantro, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 19,
    "name": "Ensalada de Arroz Integral",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "arroz integral",
      "zanahoria",
      "maz",
      "pollo",
      "pepino",
      "lechuga"
    ],
    "dressing": "mostaza y limón",
    "dressingIngredients": [
      "mostaza",
      "jugo de limón",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "arroz integral",
      "zanahoria",
      "maz",
      "pollo",
      "pepino",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Arroz Integral antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Arroz Integral siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "mostaza y limón",
      "arroz integral",
      "zanahoria",
      "maz",
      "pollo",
      "pepino",
      "Economicas",
      "3 dias",
      "mostaza"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de arroz integral en frasco de vidrio, capas visibles de arroz integral, zanahoria, maz, pollo, pepino, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 20,
    "name": "Ensalada de Tofu y Vegetales",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "tofu",
      "pepino",
      "zanahoria",
      "repollo",
      "hojas verdes",
      "perejil fresco"
    ],
    "dressing": "salsa de soya ligera con limón",
    "dressingIngredients": [
      "salsa de soya ligera",
      "jugo de limón",
      "aceite de oliva",
      "semillas de sésamo"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "tofu",
      "pepino",
      "zanahoria",
      "repollo",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Tofu y Vegetales antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Tofu y Vegetales siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "salsa de soya ligera con limón",
      "tofu",
      "pepino",
      "zanahoria",
      "repollo",
      "hojas verdes",
      "3 dias",
      "salsa"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de tofu y vegetales en frasco de vidrio, capas visibles de tofu, pepino, zanahoria, repollo, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 21,
    "name": "Ensalada Proteica de Pavo",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pavo",
      "huevo",
      "pepino",
      "tomate",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con mostaza",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pavo",
      "huevo",
      "pepino",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Proteica de Pavo antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Proteica de Pavo siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "yogur con mostaza",
      "pavo",
      "huevo",
      "pepino",
      "tomate",
      "lechuga",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada proteica de pavo en frasco de vidrio, capas visibles de pavo, huevo, pepino, tomate, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 22,
    "name": "Ensalada de Remolacha y Queso",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 a 4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "remolacha",
      "queso fresco",
      "zanahoria",
      "pepino",
      "hojas verdes",
      "perejil fresco"
    ],
    "dressing": "vinagreta de limón",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "remolacha",
      "queso fresco",
      "zanahoria",
      "pepino",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Remolacha y Queso antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Remolacha y Queso siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "vinagreta de limón",
      "remolacha",
      "queso fresco",
      "zanahoria",
      "pepino",
      "hojas verdes",
      "Clasicas",
      "3 a 4 dias",
      "vinagreta"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de remolacha y queso en frasco de vidrio, capas visibles de remolacha, queso fresco, zanahoria, pepino, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 23,
    "name": "Ensalada de Pollo Curry",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "zanahoria",
      "pasas",
      "repollo",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con curry",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "zanahoria",
      "pasas",
      "repollo",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo Curry antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo Curry siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "yogur con curry",
      "pollo",
      "zanahoria",
      "pasas",
      "repollo",
      "lechuga",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo curry en frasco de vidrio, capas visibles de pollo, zanahoria, pasas, repollo, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 24,
    "name": "Ensalada de Aguacate y Garbanzos",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "aguacate",
      "tomate",
      "pepino",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "limón y cilantro",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "aguacate",
      "tomate",
      "pepino",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Aguacate y Garbanzos antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Aguacate y Garbanzos siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y cilantro",
      "garbanzos",
      "aguacate",
      "tomate",
      "pepino",
      "lechuga",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de aguacate y garbanzos en frasco de vidrio, capas visibles de garbanzos, aguacate, tomate, pepino, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 25,
    "name": "Ensalada de Repollo Cremosa",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 a 4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "repollo",
      "zanahoria",
      "maz",
      "pollo opcional",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con limón",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "repollo",
      "zanahoria",
      "maz",
      "pollo opcional",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Repollo Cremosa antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Repollo Cremosa siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "yogur con limón",
      "repollo",
      "zanahoria",
      "maz",
      "pollo opcional",
      "lechuga",
      "Economicas",
      "3 a 4 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de repollo cremosa en frasco de vidrio, capas visibles de repollo, zanahoria, maz, pollo opcional, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 26,
    "name": "Ensalada de Couscous",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "couscous",
      "pepino",
      "tomate",
      "garbanzos",
      "perejil",
      "hojas verdes"
    ],
    "dressing": "limón y aceite de oliva",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "couscous",
      "pepino",
      "tomate",
      "garbanzos",
      "perejil",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Couscous antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Couscous siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y aceite de oliva",
      "couscous",
      "pepino",
      "tomate",
      "garbanzos",
      "perejil",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de couscous en frasco de vidrio, capas visibles de couscous, pepino, tomate, garbanzos, perejil, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 27,
    "name": "Ensalada de Pollo Chipotle",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "frijoles",
      "maz",
      "tomate",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con chipotle",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "frijoles",
      "maz",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo Chipotle antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo Chipotle siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "yogur con chipotle",
      "pollo",
      "frijoles",
      "maz",
      "tomate",
      "lechuga",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo chipotle en frasco de vidrio, capas visibles de pollo, frijoles, maz, tomate, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 28,
    "name": "Ensalada de Espinaca y Fresa",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "espinaca",
      "fresas",
      "queso fresco",
      "nueces",
      "pepino",
      "hojas verdes"
    ],
    "dressing": "balsamico con miel",
    "dressingIngredients": [
      "jugo de limón",
      "miel",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "fresas",
      "queso fresco",
      "nueces",
      "pepino",
      "espinaca en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Espinaca y Fresa antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Espinaca y Fresa siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "balsamico con miel",
      "espinaca",
      "fresas",
      "queso fresco",
      "nueces",
      "pepino",
      "2 dias",
      "balsamico"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de espinaca y fresa en frasco de vidrio, capas visibles de espinaca, fresas, queso fresco, nueces, pepino, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 29,
    "name": "Ensalada de Zanahoria y Garbanzos",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "zanahoria",
      "pepino",
      "maz",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "limón y comino",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "zanahoria",
      "pepino",
      "maz",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Zanahoria y Garbanzos antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Zanahoria y Garbanzos siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "limón y comino",
      "garbanzos",
      "zanahoria",
      "pepino",
      "maz",
      "lechuga",
      "Economicas",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de zanahoria y garbanzos en frasco de vidrio, capas visibles de garbanzos, zanahoria, pepino, maz, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 30,
    "name": "Ensalada de Pollo Mediterraneo",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "pepino",
      "tomate",
      "aceitunas",
      "queso",
      "lechuga"
    ],
    "dressing": "limón, orégano y aceite",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "pepino",
      "tomate",
      "aceitunas",
      "queso",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo Mediterraneo antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo Mediterraneo siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "limón, orégano y aceite",
      "pollo",
      "pepino",
      "tomate",
      "aceitunas",
      "queso",
      "3 dias",
      "limón,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo mediterraneo en frasco de vidrio, capas visibles de pollo, pepino, tomate, aceitunas, queso, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 31,
    "name": "Ensalada de Garbanzos Picante",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "tomate",
      "pepino",
      "cebolla",
      "jalapeo",
      "lechuga"
    ],
    "dressing": "limón picante",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "tomate",
      "pepino",
      "cebolla",
      "jalapeo",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Garbanzos Picante antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Garbanzos Picante siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón picante",
      "garbanzos",
      "tomate",
      "pepino",
      "cebolla",
      "jalapeo",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de garbanzos picante en frasco de vidrio, capas visibles de garbanzos, tomate, pepino, cebolla, jalapeo, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 32,
    "name": "Ensalada de Atún Mediterraneo",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "atn",
      "garbanzos",
      "tomate",
      "pepino",
      "aceitunas",
      "lechuga"
    ],
    "dressing": "limón y aceite",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "atn",
      "garbanzos",
      "tomate",
      "pepino",
      "aceitunas",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Atún Mediterraneo antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Atún Mediterraneo siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "limón y aceite",
      "atn",
      "garbanzos",
      "tomate",
      "pepino",
      "aceitunas",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de atún mediterraneo en frasco de vidrio, capas visibles de atn, garbanzos, tomate, pepino, aceitunas, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 33,
    "name": "Ensalada de Huevo con Mostaza",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "huevo cocido",
      "papa",
      "pepino",
      "zanahoria",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "mostaza, yogur y limón",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "huevo cocido",
      "papa",
      "pepino",
      "zanahoria",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Huevo con Mostaza antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Huevo con Mostaza siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "mostaza, yogur y limón",
      "huevo cocido",
      "papa",
      "pepino",
      "zanahoria",
      "lechuga",
      "Economicas",
      "3 dias",
      "mostaza,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de huevo con mostaza en frasco de vidrio, capas visibles de huevo cocido, papa, pepino, zanahoria, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 34,
    "name": "Ensalada de Pollo con Mango",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "mango",
      "pepino",
      "repollo",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "limón con miel",
    "dressingIngredients": [
      "jugo de limón",
      "miel",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "mango",
      "pepino",
      "repollo",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo con Mango antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo con Mango siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "limón con miel",
      "pollo",
      "mango",
      "pepino",
      "repollo",
      "lechuga",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo con mango en frasco de vidrio, capas visibles de pollo, mango, pepino, repollo, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 35,
    "name": "Ensalada de Quinoa Proteica",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "quinoa",
      "pollo",
      "pepino",
      "tomate",
      "maz",
      "lechuga"
    ],
    "dressing": "yogur con hierbas",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "quinoa",
      "pollo",
      "pepino",
      "tomate",
      "maz",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Quinoa Proteica antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Quinoa Proteica siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "yogur con hierbas",
      "quinoa",
      "pollo",
      "pepino",
      "tomate",
      "maz",
      "4 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de quinoa proteica en frasco de vidrio, capas visibles de quinoa, pollo, pepino, tomate, maz, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 36,
    "name": "Ensalada Vegana Verde",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pepino",
      "aguacate",
      "espinaca",
      "garbanzos",
      "semillas",
      "hojas verdes"
    ],
    "dressing": "limón y cilantro",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pepino",
      "aguacate",
      "garbanzos",
      "semillas",
      "espinaca en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Vegana Verde antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Vegana Verde siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y cilantro",
      "pepino",
      "aguacate",
      "espinaca",
      "garbanzos",
      "semillas",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada vegana verde en frasco de vidrio, capas visibles de pepino, aguacate, espinaca, garbanzos, semillas, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 37,
    "name": "Ensalada Econmica de Maíz",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "maz",
      "zanahoria",
      "arroz",
      "pepino",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con limón",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "maz",
      "zanahoria",
      "arroz",
      "pepino",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Econmica de Maíz antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Econmica de Maíz siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "yogur con limón",
      "maz",
      "zanahoria",
      "arroz",
      "pepino",
      "lechuga",
      "Economicas",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada econmica de maíz en frasco de vidrio, capas visibles de maz, zanahoria, arroz, pepino, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 38,
    "name": "Ensalada de Frijoles Rojos",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "frijoles rojos",
      "tomate",
      "cebolla",
      "maz",
      "cilantro",
      "lechuga"
    ],
    "dressing": "limón y comino",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "frijoles rojos",
      "tomate",
      "cebolla",
      "maz",
      "cilantro",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Frijoles Rojos antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Frijoles Rojos siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y comino",
      "frijoles rojos",
      "tomate",
      "cebolla",
      "maz",
      "cilantro",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de frijoles rojos en frasco de vidrio, capas visibles de frijoles rojos, tomate, cebolla, maz, cilantro, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 39,
    "name": "Ensalada de Pollo Ranch Ligera",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "maz",
      "pepino",
      "tomate",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "ranch ligero con yogur",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "maz",
      "pepino",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo Ranch Ligera antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo Ranch Ligera siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "ranch ligero con yogur",
      "pollo",
      "maz",
      "pepino",
      "tomate",
      "lechuga",
      "3 dias",
      "ranch"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo ranch ligera en frasco de vidrio, capas visibles de pollo, maz, pepino, tomate, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 40,
    "name": "Ensalada de Pasta con Atún",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pasta",
      "atn",
      "maz",
      "tomate",
      "zanahoria",
      "lechuga"
    ],
    "dressing": "yogur con mostaza",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pasta",
      "atn",
      "maz",
      "tomate",
      "zanahoria",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pasta con Atún antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pasta con Atún siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "yogur con mostaza",
      "pasta",
      "atn",
      "maz",
      "tomate",
      "zanahoria",
      "Economicas",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pasta con atún en frasco de vidrio, capas visibles de pasta, atn, maz, tomate, zanahoria, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 41,
    "name": "Ensalada Premium de Salmn",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "salmon cocido",
      "pepino",
      "aguacate",
      "quinoa",
      "hojas verdes",
      "perejil fresco"
    ],
    "dressing": "limón y eneldo",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "salmon cocido",
      "pepino",
      "aguacate",
      "quinoa",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Premium de Salmn antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Premium de Salmn siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "limón y eneldo",
      "salmon cocido",
      "pepino",
      "aguacate",
      "quinoa",
      "hojas verdes",
      "2 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada premium de salmn en frasco de vidrio, capas visibles de salmon cocido, pepino, aguacate, quinoa, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 42,
    "name": "Ensalada de Pollo y Frijoles",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "frijoles",
      "maz",
      "tomate",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "cilantro y limón",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "frijoles",
      "maz",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo y Frijoles antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo y Frijoles siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "cilantro y limón",
      "pollo",
      "frijoles",
      "maz",
      "tomate",
      "lechuga",
      "3 dias",
      "cilantro"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo y frijoles en frasco de vidrio, capas visibles de pollo, frijoles, maz, tomate, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 43,
    "name": "Ensalada Colorida para Vender",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "quinoa",
      "zanahoria",
      "maz",
      "tomate",
      "pepino",
      "lechuga"
    ],
    "dressing": "vinagreta ligera",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "quinoa",
      "zanahoria",
      "maz",
      "tomate",
      "pepino",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Colorida para Vender antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Colorida para Vender siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "vinagreta ligera",
      "quinoa",
      "zanahoria",
      "maz",
      "tomate",
      "pepino",
      "4 dias",
      "vinagreta"
    ],
    "imagePrompt": "Foto realista vertical de ensalada colorida para vender en frasco de vidrio, capas visibles de quinoa, zanahoria, maz, tomate, pepino, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 44,
    "name": "Ensalada Cremosa para Vender",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "papa",
      "zanahoria",
      "maz",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con hierbas",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "papa",
      "zanahoria",
      "maz",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Cremosa para Vender antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Cremosa para Vender siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "yogur con hierbas",
      "pollo",
      "papa",
      "zanahoria",
      "maz",
      "lechuga",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada cremosa para vender en frasco de vidrio, capas visibles de pollo, papa, zanahoria, maz, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 45,
    "name": "Ensalada Fit para Trabajo",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "garbanzos",
      "pepino",
      "tomate",
      "hojas verdes",
      "perejil fresco"
    ],
    "dressing": "limón y aceite",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "garbanzos",
      "pepino",
      "tomate",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Fit para Trabajo antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Fit para Trabajo siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "limón y aceite",
      "pollo",
      "garbanzos",
      "pepino",
      "tomate",
      "hojas verdes",
      "3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada fit para trabajo en frasco de vidrio, capas visibles de pollo, garbanzos, pepino, tomate, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 46,
    "name": "Ensalada Familiar Econmica",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "arroz",
      "huevo",
      "zanahoria",
      "maz",
      "pepino",
      "lechuga"
    ],
    "dressing": "limón y mostaza",
    "dressingIngredients": [
      "mostaza",
      "jugo de limón",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "arroz",
      "huevo",
      "zanahoria",
      "maz",
      "pepino",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Familiar Econmica antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Familiar Econmica siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "limón y mostaza",
      "arroz",
      "huevo",
      "zanahoria",
      "maz",
      "pepino",
      "Economicas",
      "3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada familiar econmica en frasco de vidrio, capas visibles de arroz, huevo, zanahoria, maz, pepino, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 47,
    "name": "Ensalada de Pollo Oriental",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "repollo",
      "zanahoria",
      "pepino",
      "semillas",
      "hojas verdes"
    ],
    "dressing": "soya ligera con limón",
    "dressingIngredients": [
      "salsa de soya ligera",
      "jugo de limón",
      "aceite de oliva",
      "semillas de sésamo"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "repollo",
      "zanahoria",
      "pepino",
      "semillas",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo Oriental antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo Oriental siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "soya ligera con limón",
      "pollo",
      "repollo",
      "zanahoria",
      "pepino",
      "semillas",
      "3 dias",
      "soya"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo oriental en frasco de vidrio, capas visibles de pollo, repollo, zanahoria, pepino, semillas, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 48,
    "name": "Ensalada de Garbanzos Dulce-Picante",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "zanahoria",
      "tomate",
      "cebolla",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "miel, limón y chile",
    "dressingIngredients": [
      "jugo de limón",
      "miel",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "zanahoria",
      "tomate",
      "cebolla",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Garbanzos Dulce-Picante antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Garbanzos Dulce-Picante siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "miel, limón y chile",
      "garbanzos",
      "zanahoria",
      "tomate",
      "cebolla",
      "lechuga",
      "4 dias",
      "miel,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de garbanzos dulce-picante en frasco de vidrio, capas visibles de garbanzos, zanahoria, tomate, cebolla, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 49,
    "name": "Ensalada de Atún con Aguacate",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "atn",
      "aguacate",
      "pepino",
      "maz",
      "tomate",
      "lechuga"
    ],
    "dressing": "limón y cilantro",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "atn",
      "aguacate",
      "pepino",
      "maz",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Atún con Aguacate antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Atún con Aguacate siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "limón y cilantro",
      "atn",
      "aguacate",
      "pepino",
      "maz",
      "tomate",
      "2 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de atún con aguacate en frasco de vidrio, capas visibles de atn, aguacate, pepino, maz, tomate, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 50,
    "name": "Ensalada de Pollo con Manzana",
    "category": "Gourmet",
    "shortDescription": "Frasco con presentación especial para variar o sorprender.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "manzana",
      "apio",
      "nueces",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con miel",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "manzana",
      "apio",
      "nueces",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo con Manzana antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Guarda toppings crocantes separados y agrégalos justo antes de comer.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo con Manzana siempre refrigerada. Los toppings crocantes van separados para conservar textura. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Gourmet",
      "yogur con miel",
      "pollo",
      "manzana",
      "apio",
      "nueces",
      "lechuga",
      "2 a 3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo con manzana en frasco de vidrio, capas visibles de pollo, manzana, apio, nueces, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 51,
    "name": "Ensalada Verde con Huevo",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "huevo",
      "pepino",
      "aguacate",
      "espinaca",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "limón y aceite",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "huevo",
      "pepino",
      "aguacate",
      "espinaca en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Verde con Huevo antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Verde con Huevo siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "limón y aceite",
      "huevo",
      "pepino",
      "aguacate",
      "espinaca",
      "lechuga",
      "Clasicas",
      "2 a 3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada verde con huevo en frasco de vidrio, capas visibles de huevo, pepino, aguacate, espinaca, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 52,
    "name": "Ensalada de Quinoa y Frijoles",
    "category": "Vegetarianas",
    "shortDescription": "Alternativa colorida sin carne, pensada para preparar con calma.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "quinoa",
      "frijoles",
      "maz",
      "tomate",
      "cilantro",
      "lechuga"
    ],
    "dressing": "limón y comino",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "quinoa",
      "frijoles",
      "maz",
      "tomate",
      "cilantro",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Quinoa y Frijoles antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Quinoa y Frijoles siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Vegetarianas",
      "limón y comino",
      "quinoa",
      "frijoles",
      "maz",
      "tomate",
      "cilantro",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de quinoa y frijoles en frasco de vidrio, capas visibles de quinoa, frijoles, maz, tomate, cilantro, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 53,
    "name": "Ensalada de Pollo Econmica",
    "category": "Económicas",
    "shortDescription": "Receta rendidora con ingredientes accesibles y fáciles de encontrar.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "arroz",
      "zanahoria",
      "repollo",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "yogur con limón",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "arroz",
      "zanahoria",
      "repollo",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo Econmica antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo Econmica siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Económicas",
      "yogur con limón",
      "pollo",
      "arroz",
      "zanahoria",
      "repollo",
      "lechuga",
      "Economicas",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo econmica en frasco de vidrio, capas visibles de pollo, arroz, zanahoria, repollo, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 54,
    "name": "Ensalada de Garbanzos con Queso",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "garbanzos",
      "queso fresco",
      "tomate",
      "pepino",
      "hojas verdes",
      "perejil fresco"
    ],
    "dressing": "vinagreta de orégano",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "queso fresco",
      "tomate",
      "pepino",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Garbanzos con Queso antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Garbanzos con Queso siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "vinagreta de orégano",
      "garbanzos",
      "queso fresco",
      "tomate",
      "pepino",
      "hojas verdes",
      "Clasicas",
      "4 dias",
      "vinagreta"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de garbanzos con queso en frasco de vidrio, capas visibles de garbanzos, queso fresco, tomate, pepino, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 55,
    "name": "Ensalada de Pollo para Clientes",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "pasta",
      "maz",
      "zanahoria",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "ranch ligero",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "pasta",
      "maz",
      "zanahoria",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo para Clientes antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo para Clientes siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "ranch ligero",
      "pollo",
      "pasta",
      "maz",
      "zanahoria",
      "lechuga",
      "3 dias",
      "ranch"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo para clientes en frasco de vidrio, capas visibles de pollo, pasta, maz, zanahoria, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 56,
    "name": "Ensalada Premium Caprese para Vender",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "2 a 3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "tomate cherry",
      "mozzarella",
      "albahaca",
      "lechuga",
      "hojas verdes",
      "pepino"
    ],
    "dressing": "pesto ligero",
    "dressingIngredients": [
      "albahaca fresca",
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "queso rallado opcional"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "tomate cherry",
      "mozzarella",
      "albahaca",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Premium Caprese para Vender antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Premium Caprese para Vender siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "pesto ligero",
      "tomate cherry",
      "mozzarella",
      "albahaca",
      "lechuga",
      "hojas verdes",
      "2 a 3 dias",
      "pesto"
    ],
    "imagePrompt": "Foto realista vertical de ensalada premium caprese para vender en frasco de vidrio, capas visibles de tomate cherry, mozzarella, albahaca, lechuga, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 57,
    "name": "Ensalada Proteica para Gimnasio",
    "category": "Proteicas",
    "shortDescription": "Opción práctica con proteína para almuerzos completos.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "huevo",
      "quinoa",
      "pepino",
      "hojas verdes",
      "perejil fresco"
    ],
    "dressing": "limón y mostaza",
    "dressingIngredients": [
      "mostaza",
      "jugo de limón",
      "aceite de oliva",
      "sal",
      "pimienta"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "huevo",
      "quinoa",
      "pepino",
      "hojas verdes en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Proteica para Gimnasio antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Proteica para Gimnasio siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Proteicas",
      "limón y mostaza",
      "pollo",
      "huevo",
      "quinoa",
      "pepino",
      "hojas verdes",
      "3 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada proteica para gimnasio en frasco de vidrio, capas visibles de pollo, huevo, quinoa, pepino, hojas verdes, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 58,
    "name": "Ensalada Vegana para Vender",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "4 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "garbanzos",
      "quinoa",
      "zanahoria",
      "pepino",
      "tomate",
      "lechuga"
    ],
    "dressing": "limón y hierbas",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "garbanzos",
      "quinoa",
      "zanahoria",
      "pepino",
      "tomate",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Vegana para Vender antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Vegana para Vender siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "limón y hierbas",
      "garbanzos",
      "quinoa",
      "zanahoria",
      "pepino",
      "tomate",
      "4 dias",
      "limón"
    ],
    "imagePrompt": "Foto realista vertical de ensalada vegana para vender en frasco de vidrio, capas visibles de garbanzos, quinoa, zanahoria, pepino, tomate, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 59,
    "name": "Ensalada de Pollo con Limn",
    "category": "Clásicas",
    "shortDescription": "Receta fresca y fácil para organizar comidas de la semana.",
    "prepTime": "12 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Fácil",
    "ingredients": [
      "pollo",
      "pepino",
      "tomate",
      "maz",
      "lechuga",
      "hojas verdes"
    ],
    "dressing": "limón, aceite y perejil",
    "dressingIngredients": [
      "aceite de oliva",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas al gusto"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "pepino",
      "tomate",
      "maz",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada de Pollo con Limn antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada de Pollo con Limn siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Clásicas",
      "limón, aceite y perejil",
      "pollo",
      "pepino",
      "tomate",
      "maz",
      "lechuga",
      "Clasicas",
      "3 dias",
      "limón,"
    ],
    "imagePrompt": "Foto realista vertical de ensalada de pollo con limn en frasco de vidrio, capas visibles de pollo, pepino, tomate, maz, lechuga, luz natural, fondo crema, estilo app premium saludable."
  },
  {
    "id": 60,
    "name": "Ensalada Especial de la Semana",
    "category": "Para vender",
    "shortDescription": "Idea pensada para catálogo, combos semanales o venta por encargo.",
    "prepTime": "18 min",
    "servings": "1 frasco",
    "estimatedDuration": "3 dias refrigerada",
    "difficulty": "Media",
    "ingredients": [
      "pollo",
      "garbanzos",
      "tomate",
      "pepino",
      "zanahoria",
      "queso",
      "lechuga"
    ],
    "dressing": "yogur con hierbas",
    "dressingIngredients": [
      "yogur natural",
      "jugo de limón",
      "sal",
      "pimienta",
      "hierbas frescas"
    ],
    "dressingPreparation": "Mezcla los ingredientes del aderezo hasta integrar. Prueba sal y acidez antes de montar el frasco.",
    "layers": [
      "aderezo en el fondo",
      "pollo",
      "garbanzos",
      "tomate",
      "pepino",
      "zanahoria",
      "queso",
      "lechuga en la parte superior"
    ],
    "preparation": [
      "Lava, seca y corta los ingredientes de Ensalada Especial de la Semana antes de montar el frasco.",
      "Coloca el aderezo en el fondo o llévalo separado si vas a vender o transportar por más tiempo.",
      "Agrega primero los ingredientes firmes, después proteínas, granos o vegetales medios.",
      "Deja las hojas verdes en la parte superior para que no se marchiten.",
      "Cierra bien, mantén refrigerado y mezcla solo al momento de consumir."
    ],
    "conservationTip": "Mantén Ensalada Especial de la Semana siempre refrigerada. Revisa que las hojas estén bien secas antes de cerrar. La duración puede variar según frescura, higiene y temperatura de conservación.",
    "tags": [
      "Para vender",
      "yogur con hierbas",
      "pollo",
      "garbanzos",
      "tomate",
      "pepino",
      "zanahoria",
      "3 dias",
      "yogur"
    ],
    "imagePrompt": "Foto realista vertical de ensalada especial de la semana en frasco de vidrio, capas visibles de pollo, garbanzos, tomate, pepino, zanahoria, luz natural, fondo crema, estilo app premium saludable."
  }
];
