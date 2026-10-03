/* =========================================================================
   DIGITAL MENU (display only)
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.

   Optional fields:
   - desc:   small text under an item
   - note:   text under a category title
   ========================================================================= */

const MENU_DATA = [

  /* ----------------------------- BURGERS ----------------------------- */
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { name: "Classic Burger", price: 10000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce" },
      { name: "Crispy Chicken Burger", price: 15000, desc: "Kentucky Style Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Mayo, Smash Sauce" },
      { name: "Grilled Chicken Burger", price: 12000, desc: "Boneless Grilled Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce" },
      { name: "Caramelized Burger", price: 14000, desc: "Beef Patty, Caramelized Onions, Cheddar Cheese, Tomato, Smash Sauce" },
      { name: "Cheese Burger", price: 12000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce" },
      { name: "Sealed Burger", price: 15000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce" },
      { name: "Add-on: Beef Patty", price: 4000 },
      { name: "Add-on: Cheese", price: 2000 }
    ]
  },

  /* ------------------------------ FRIES ------------------------------ */
  {
    id: "fries",
    name: "Fries",
    items: [
      { name: "Plain Fries", price: 3000 },
      { name: "Seasoned Fries", price: 4000 },
      { name: "Loaded Fries", price: 15000 },
      { name: "Tingisha", price: 15000 },
      { name: "Zege", price: 5000 }
    ]
  },

  /* ------------------------------ WINGS ------------------------------ */
  {
    id: "wings",
    name: "Wings",
    items: [
      { name: "Sweet Wings", price: 15000 },
      { name: "BBQ Wings", price: 15000 },
      { name: "Lemon Butter Wings", price: 15000 }
    ]
  },

  /* ---------------------------- DRUM STICK --------------------------- */
  {
    id: "drum-stick",
    name: "Drum Stick",
    items: [
      { name: "Sweet Drum Stick", price: 15000 },
      { name: "BBQ Drum Stick", price: 15000 },
      { name: "Lemon Butter Drum Stick", price: 15000 },
      { name: "Crispy Drum Stick", price: 15000 }
    ]
  },

  /* ------------------------------- WRAP ------------------------------ */
  {
    id: "wrap",
    name: "Wrap",
    items: [
      { name: "Crispy Chicken Wrap", price: 10000 }
    ]
  },

  /* ------------------------------- CHOMA ----------------------------- */
  {
    id: "choma",
    name: "Choma",
    items: [
      { name: "Sekela", price: 9000 },
      { name: "Lemon", price: 9000 },
      { name: "Kuku Choma", price: 9000 },
      { name: "Morogoro Mishkaki", price: 7000 },
      { name: "Beef Mishkaki Plate", price: 10000 },
      { name: "Ndizi Choma", price: 1000 }
    ]
  },

  /* ------------------------------- SALAD ----------------------------- */
  {
    id: "salad",
    name: "Salad",
    items: [
      { name: "Chicken Salad", price: 15000, desc: "Chicken, Boiled Eggs, Tomato, Lettuce, Broccoli, Carrot, Cucumber" }
    ]
  },

  /* ---------------------------- FRESH JUICE -------------------------- */
  {
    id: "fresh-juice",
    name: "Fresh Juice",
    items: [
      { name: "Orange Juice", price: 5000 },
      { name: "Lemon Juice", price: 5000 },
      { name: "Mix Juice", price: 5000 },
      { name: "Mango Juice", price: 5000 },
      { name: "Avocado Juice", price: 5000 },
      { name: "Pineapple Juice", price: 5000 },
      { name: "Banana Juice", price: 5000 },
      { name: "Passion Juice", price: 5000 },
      { name: "Watermelon Juice", price: 5000 },
      { name: "Lemon Milk", price: 10000 },
      { name: "Passion Milk", price: 10000 }
    ]
  },

  /* ----------------------------- SMOOTHIES --------------------------- */
  {
    id: "smoothies",
    name: "Smoothies",
    items: [
      { name: "Mango", price: 8000 },
      { name: "Avocado", price: 8000 },
      { name: "Mixed Fruit", price: 8000 }
    ]
  },

  /* ---------------------------- MILKSHAKES --------------------------- */
  {
    id: "milkshakes",
    name: "Milkshakes",
    items: [
      { name: "Oreo Shake", price: 10000 },
      { name: "Snickers Shake", price: 10000 },
      { name: "Chocolate Shake", price: 10000 },
      { name: "Kitkat Shake", price: 10000 },
      { name: "Strawberry Shake", price: 10000 },
      { name: "Coffee Shake", price: 10000 },
      { name: "Tende Shake", price: 10000 },
      { name: "Lotus Shake", price: 10000 },
      { name: "Milo Shake", price: 10000 }
    ]
  },

  /* ------------------------------ MOJITOS ---------------------------- */
  {
    id: "mojitos",
    name: "Mojitos",
    items: [
      { name: "Lemon", price: 7000 },
      { name: "Blue Lagoon", price: 7000 },
      { name: "Strawberry", price: 7000 },
      { name: "Passion", price: 7000 },
      { name: "Vimto", price: 7000 },
      { name: "Orange", price: 7000 }
    ]
  },

  /* ------------------------------ PLATTERS --------------------------- */
  {
    id: "platters",
    name: "Platters",
    items: [
      { name: "Plate for 4", price: 70000, desc: "Tingisha, Beef Mishkaki, Loaded Fries, Wings, Drumstick" },
      { name: "Plate for 6", price: 100000, desc: "Tingisha, Beef Mishkaki, Wings, Drumstick, Loaded Fries, Burger (Caramelized / Crispy), Zege, Lemon / Sekela" },
      { name: "Plate for 8", price: 135000, desc: "Tingisha, Beef Mishkaki x2, Loaded Fries x2, Zege x2, Full Chicken, Wings, Drumstick, Crispy Chicken Wrap, Plain" }
    ]
  },

  /* ------------------------------- SHISHA ---------------------------- */
  {
    id: "shisha",
    name: "Shisha",
    items: [
      { name: "Love66", price: 30000 },
      { name: "Mint", price: 30000 },
      { name: "Bluemix", price: 30000 },
      { name: "Blueberry", price: 30000 },
      { name: "Peach", price: 30000 },
      { name: "Grape", price: 30000 },
      { name: "Gum", price: 30000 },
      { name: "Kiwi", price: 30000 },
      { name: "Watermelon", price: 30000 },
      { name: "Paan", price: 30000 },
      { name: "Mix Shisha", price: 30000 },
      { name: "Orange", price: 30000 },
      { name: "Passion", price: 30000 },
      { name: "Dubai Night", price: 30000 },
      { name: "Bubblegum", price: 30000 },
      { name: "Strawberry", price: 30000 },
      { name: "Red Killer", price: 30000 },
      { name: "Blue Thunder", price: 30000 },
      { name: "Melon", price: 30000 },
      { name: "Super Mint", price: 30000 },
      { name: "Refill", price: 15000 }
    ]
  }
];
