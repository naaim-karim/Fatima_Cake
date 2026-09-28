export interface MenuItem {
  id: string;
  name: string;
  category: "cake" | "cupcake" | "pudding" | "donuts";
  image: string;
  description: string;
  ingredients: string[];
  price?: number;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Chocolate Fudge Cake",
    category: "cake",
    image: "/images/chocolate-fudge.png",
    description:
      "Rich and moist chocolate cake with layers of creamy chocolate fudge frosting.",
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Flour",
      "Sugar",
      "Vanilla extract",
      "Heavy cream",
    ],
    price: 25,
  },
  {
    id: "2",
    name: "Vanilla Cupcakes",
    category: "cupcake",
    image: "/images/vanilla-cupcakes.png",
    description:
      "Light and fluffy vanilla cupcakes topped with buttercream frosting.",
    ingredients: [
      "Flour",
      "Sugar",
      "Butter",
      "Eggs",
      "Vanilla extract",
      "Baking powder",
      "Milk",
    ],
    price: 3,
  },
  {
    id: "3",
    name: "Chocolate Pudding",
    category: "pudding",
    image: "/images/chocolate-pudding.png",
    description: "Silky smooth chocolate pudding made with premium cocoa.",
    ingredients: [
      "Milk",
      "Dark chocolate",
      "Sugar",
      "Cornstarch",
      "Eggs",
      "Vanilla",
    ],
    price: 5,
  },
  {
    id: "4",
    name: "Glazed Donuts",
    category: "donuts",
    image: "/images/glazed-donuts.png",
    description: "Classic glazed donuts with a sweet, shiny glaze.",
    ingredients: [
      "Flour",
      "Sugar",
      "Yeast",
      "Milk",
      "Butter",
      "Eggs",
      "Powdered sugar",
    ],
    price: 2,
  },
  {
    id: "5",
    name: "Red Velvet Cake",
    category: "cake",
    image: "/images/red-velvet.png",
    description: "Classic red velvet cake with cream cheese frosting.",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Red food coloring",
      "Buttermilk",
      "Cream cheese",
      "Butter",
    ],
    price: 28,
  },
  {
    id: "6",
    name: "Strawberry Cupcakes",
    category: "cupcake",
    image: "/images/strawberry-cupcakes.png",
    description: "Fresh strawberry cupcakes with strawberry buttercream.",
    ingredients: [
      "Fresh strawberries",
      "Flour",
      "Sugar",
      "Butter",
      "Eggs",
      "Vanilla",
    ],
    price: 3.5,
  },
  {
    id: "7",
    name: "Vanilla Pudding",
    category: "pudding",
    image: "/images/vanilla-pudding.png",
    description: "Creamy vanilla pudding with a rich, smooth texture.",
    ingredients: [
      "Milk",
      "Sugar",
      "Cornstarch",
      "Eggs",
      "Vanilla extract",
      "Butter",
    ],
    price: 4.5,
  },
  {
    id: "8",
    name: "Chocolate Donuts",
    category: "donuts",
    image: "/images/chocolate-donuts.png",
    description: "Rich chocolate donuts with chocolate glaze.",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Yeast",
      "Milk",
      "Chocolate glaze",
    ],
    price: 2.5,
  },
];

export const categories = [
  { id: "all", name: "All Items" },
  { id: "cake", name: "Cakes" },
  { id: "cupcake", name: "Cupcakes" },
  { id: "pudding", name: "Puddings" },
  { id: "donuts", name: "Donuts" },
];

export function categoryName(category: MenuItem["category"]) {
  return categories.find((c) => c.id === category)?.name ?? category;
}
