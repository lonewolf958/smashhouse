/* =========================================================================
   SMASH HOUSE — ONLINE ORDER PAGE

   All menu content lives in MENU_DATA below. To update prices or items,
   edit that array only — the page renders itself from it.
   Prices are in Tanzanian Shillings (TSh).

   Optional item field:  desc  — small text under the item name
   Optional category field: note — text under the category title
   ========================================================================= */

/* Burger add-ons — edit names and prices here.
   NOTE: the Chicken Patty price is a placeholder; set the real one. */
const ADDON_BEEF_PATTY = { name: "Extra Beef Patty", price: 4000 };
const ADDON_CHICKEN_PATTY = { name: "Extra Chicken Patty", price: 4000 };
const ADDON_CHEESE = { name: "Extra Cheese", price: 2000 };

/* Burgers sold as Beef OR Chicken: the customer picks the patty first,
   then the add-ons that match it. */
const BURGER_PATTY_CHOICES = {
  label: "Choose your patty *",
  options: [
    { name: "Beef", addons: [ADDON_BEEF_PATTY, ADDON_CHEESE] },
    { name: "Chicken", addons: [ADDON_CHICKEN_PATTY, ADDON_CHEESE] }
  ]
};

/* Burgers with a fixed patty: no patty choice, add-ons only. */
const BEEF_BURGER_ADDONS = {
  preselect: true,
  options: [{ name: "", addons: [ADDON_BEEF_PATTY, ADDON_CHEESE] }]
};

const CHICKEN_BURGER_ADDONS = {
  preselect: true,
  options: [{ name: "", addons: [ADDON_CHICKEN_PATTY, ADDON_CHEESE] }]
};


const MENU_DATA = [

  {
    id: "burgers",
    name: "Burgers",
    items: [
      { name: "Classic Burger", price: 10000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce", choices: BURGER_PATTY_CHOICES },
      { name: "Cheese Burger", price: 12000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce", choices: BURGER_PATTY_CHOICES },
      { name: "Sealed Burger", price: 15000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce", choices: BURGER_PATTY_CHOICES },
      { name: "Crispy Chicken Burger", price: 15000, desc: "Kentucky Style Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Mayo, Smash Sauce", choices: CHICKEN_BURGER_ADDONS },
      { name: "Grilled Chicken Burger", price: 12000, desc: "Boneless Grilled Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce", choices: CHICKEN_BURGER_ADDONS },
      { name: "Caramelized Burger", price: 14000, desc: "Beef Patty, Caramelized Onions, Cheddar Cheese, Tomato, Smash Sauce", choices: BEEF_BURGER_ADDONS }
    ]
  },

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

  {
    id: "wings",
    name: "Wings",
    items: [
      { name: "Sweet Wings", price: 15000 },
      { name: "BBQ Wings", price: 15000 },
      { name: "Lemon Butter Wings", price: 15000 }
    ]
  },

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

  {
    id: "wrap",
    name: "Wrap",
    items: [
      { name: "Crispy Chicken Wrap", price: 10000 }
    ]
  },

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

  {
    id: "salad",
    name: "Salad",
    items: [
      { name: "Chicken Salad", price: 15000, desc: "Chicken, Boiled Eggs, Tomato, Lettuce, Broccoli, Carrot, Cucumber" }
    ]
  },

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

  {
    id: "smoothies",
    name: "Smoothies",
    items: [
      { name: "Mango", price: 8000 },
      { name: "Avocado", price: 8000 },
      { name: "Mixed Fruit", price: 8000 }
    ]
  },

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

  {
    id: "platters",
    name: "Platters",
    items: [
      { name: "Plate for 4", price: 70000, desc: "Tingisha, Beef Mishkaki, Loaded Fries, Wings, Drumstick" },
      { name: "Plate for 6", price: 100000, desc: "Tingisha, Beef Mishkaki, Wings, Drumstick, Loaded Fries, Burger (Caramelized / Crispy), Zege, Lemon / Sekela" },
      { name: "Plate for 8", price: 135000, desc: "Tingisha, Beef Mishkaki x2, Loaded Fries x2, Zege x2, Full Chicken, Wings, Drumstick, Crispy Chicken Wrap, Plain" }
    ]
  },

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


/* =========================================================================
   CONFIGURATION
   ========================================================================= */

const WHATSAPP_NUMBER = "255753005002";
const RESTAURANT_NAME = "Smash House";
const CART_STORAGE_KEY = "smashhouseCart";

const ORDER_TYPE_LABELS = {
  dinein: "Dine in",
  delivery: "Delivery",
  pickup: "Pickup"
};

/* =========================================================================
   STATE + HELPERS
   ========================================================================= */

let cart = [];
let orderType = null; // "dinein" | "delivery" | "pickup" | null

const $ = (id) => document.getElementById(id);

function formatPrice(n) {
  return "TSh " + Number(n).toLocaleString("en-US") + "/=";
}

function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  return e;
}

function val(id) {
  const e = $(id);
  return e ? e.value.trim() : "";
}


/* =========================================================================
   CATEGORY NAVIGATION
   ========================================================================= */

function renderNav() {
  const nav = $("category-nav");
  if (!nav) return;

  MENU_DATA.forEach((cat) => {
    const btn = el("button", "nav-pill", cat.name);
    btn.type = "button";
    btn.dataset.target = cat.id;

    btn.addEventListener("click", () => {
      const target = $(cat.id);
      if (!target) return;
      const categoryNav = document.querySelector(".category-nav");
      const headerOffset = (categoryNav ? categoryNav.offsetHeight : 0) + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });

    nav.appendChild(btn);
  });
}


/* =========================================================================
   MENU SECTIONS
   ========================================================================= */

function buildAddToCartButton(cat, item) {
  const btn = el("button", "add-cart-btn", "+ Add to Cart");
  btn.type = "button";
  btn.dataset.key = cat.id + "::" + item.name;
  btn.dataset.name = item.name;
  btn.dataset.price = item.price;
  btn.dataset.label = btn.textContent;
  btn.setAttribute("aria-label", "Add " + item.name + " to cart");
  return btn;
}

/* Patty choice + optional add-ons for burgers that define `choices` */
function buildChoiceBlock(cat, item, priceEl, addBtn) {
  const cfg = item.choices;
  const wrap = el("div", "item-choices");

  const group = el("div", "choice-options");
  group.setAttribute("role", "radiogroup");
  group.setAttribute("aria-label", item.name + " patty");

  const addonWrap = el("div", "addon-list");
  addonWrap.hidden = true;

  let selected = null;
  const checked = new Set();

  function refresh() {
    const addons = selected ? selected.addons.filter((a) => checked.has(a.name)) : [];
    const total = item.price + addons.reduce((sum, a) => sum + a.price, 0);

    priceEl.textContent = formatPrice(total);
    addBtn.disabled = !selected;

    if (selected) {
      addBtn.dataset.key = [cat.id, item.name, selected.name]
        .concat(addons.map((a) => a.name))
        .filter(Boolean)
        .join("::");
      addBtn.dataset.name =
        item.name +
        (selected.name ? " (" + selected.name + ")" : "") +
        addons.map((a) => " + " + a.name).join("");
      addBtn.dataset.price = total;
    }
  }

  function renderAddons() {
    addonWrap.innerHTML = "";
    checked.clear();

    if (!selected || !selected.addons.length) {
      addonWrap.hidden = true;
      return;
    }

    addonWrap.hidden = false;
    addonWrap.appendChild(el("p", "choice-label", "Add-ons (optional)"));

    selected.addons.forEach((a) => {
      const row = el("label", "addon-option");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.addEventListener("change", () => {
        if (cb.checked) checked.add(a.name);
        else checked.delete(a.name);
        refresh();
      });
      row.appendChild(cb);
      row.appendChild(el("span", "addon-name", a.name));
      row.appendChild(el("span", "addon-price", "+ " + formatPrice(a.price)));
      addonWrap.appendChild(row);
    });
  }

  cfg.options.forEach((opt) => {
    const btn = el("button", "choice-btn", opt.name);
    btn.type = "button";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", "false");

    btn.addEventListener("click", () => {
      /* Tapping the chosen patty again unselects it; tapping the other one switches */
      selected = selected === opt ? null : opt;
      group.querySelectorAll(".choice-btn").forEach((b) => {
        const on = selected === opt && b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-checked", on ? "true" : "false");
      });
      renderAddons();
      refresh();
    });

    group.appendChild(btn);
  });

  if (cfg.preselect) {
    /* Fixed patty: go straight to the add-ons */
    selected = cfg.options[0];
    renderAddons();
  } else {
    wrap.appendChild(el("p", "choice-label", cfg.label));
    wrap.appendChild(group);
  }
  wrap.appendChild(addonWrap);

  refresh();
  return wrap;
}

function renderMenu() {
  const main = $("menu-content");
  if (!main) return;

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");
    section.id = cat.id;
    section.setAttribute("aria-labelledby", cat.id + "-heading");

    const heading = el("h2", "category-heading", cat.name);
    heading.id = cat.id + "-heading";
    section.appendChild(heading);

    if (cat.note) section.appendChild(el("p", "category-note", cat.note));

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");
      const top = el("div", "menu-item-top");
      const info = el("div", "menu-item-info");

      info.appendChild(el("h3", "menu-item-name", item.name));
      if (item.desc) info.appendChild(el("p", "menu-item-desc", item.desc));

      const priceEl = el("div", "menu-item-price", formatPrice(item.price));
      top.appendChild(info);
      top.appendChild(priceEl);

      const addBtn = buildAddToCartButton(cat, item);
      const actions = el("div", "menu-item-actions");
      actions.appendChild(addBtn);

      row.appendChild(top);
      if (item.choices) row.appendChild(buildChoiceBlock(cat, item, priceEl, addBtn));
      row.appendChild(actions);
      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}


/* =========================================================================
   CART LOGIC
   ========================================================================= */

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (i) =>
        i &&
        typeof i.key === "string" &&
        typeof i.name === "string" &&
        typeof i.price === "number" &&
        typeof i.qty === "number" &&
        i.qty > 0
    );
  } catch (err) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (err) {
    // Cart still works for the current page session.
  }
}

function addToCart(key, name, price) {
  const existing = cart.find((i) => i.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ key, name, price, qty: 1 });
  saveCart();
  updateCart();
}

function increaseQuantity(key) {
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty += 1;
  saveCart();
  updateCart();
}

function decreaseQuantity(key) {
  const item = cart.find((i) => i.key === key);
  if (!item) return;
  item.qty -= 1;
  if (item.qty <= 0) {
    removeFromCart(key);
    return;
  }
  saveCart();
  updateCart();
}

function removeFromCart(key) {
  cart = cart.filter((i) => i.key !== key);
  saveCart();
  updateCart();
}

function resetCart() {
  cart = [];
  saveCart();
  updateCart();
}

function clearCart() {
  if (cart.length === 0) return;
  if (!window.confirm("Are you sure you want to clear your cart?")) return;
  resetCart();
}

function calculateCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function calculateCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}


/* =========================================================================
   DELIVERY
   The delivery fee is always confirmed by the restaurant on WhatsApp.
   The customer just types their area and address.
   ========================================================================= */

function isFeeToBeConfirmed() {
  return orderType === "delivery";
}

function resetDeliveryFields() {
  const areaInput = $("customer-other-area");
  if (areaInput) areaInput.value = "";
}


/* =========================================================================
   ORDER TYPE — DINE IN / DELIVERY / PICKUP
   ========================================================================= */

function setOrderType(type) {
  if (!ORDER_TYPE_LABELS[type]) return;

  orderType = type;

  /* Delivery area only matters for Delivery */
  if (type !== "delivery") resetDeliveryFields();

  document.querySelectorAll(".order-type-btn").forEach((btn) => {
    const isActive = btn.dataset.type === type;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-checked", isActive ? "true" : "false");
  });

  updateFieldVisibility();
  updateCart();
}

/* Shows only the fields that belong to the chosen order type */
function updateFieldVisibility() {
  const chosen = Boolean(orderType);

  const hint = $("order-type-hint");
  if (hint) hint.classList.toggle("is-hidden", chosen);

  const fields = $("cart-customer-fields");
  if (fields) fields.hidden = !chosen;

  document.querySelectorAll("#cart-customer-fields [data-types]").forEach((e) => {
    e.hidden = !chosen || !e.dataset.types.split(" ").includes(orderType);
  });

  /* Area input shows for every delivery order */
  const otherWrap = $("other-area-wrap");
  if (otherWrap) otherWrap.hidden = orderType !== "delivery";

  /* Food total + delivery fee lines are only for Delivery */
  const feeLines = $("cart-fee-lines");
  if (feeLines) feeLines.hidden = orderType !== "delivery";
}


/* =========================================================================
   VALIDATION
   ========================================================================= */

function isOrderFormValid() {
  if (cart.length === 0) return false;

  /* Name + phone are needed for every order type */
  if (!val("customer-name") || !val("customer-contact")) return false;

  switch (orderType) {
    case "dinein": {
      const guests = Number(val("customer-guests"));
      return Boolean(val("customer-arrival")) && Number.isInteger(guests) && guests >= 1;
    }

    case "pickup":
      return true;

    case "delivery":
      return Boolean(val("customer-other-area")) && Boolean(val("customer-address"));

    default:
      return false;
  }
}


/* =========================================================================
   CART RENDERING
   ========================================================================= */

function updateCart() {
  renderCartItems();
  updateCartCountBadge();
  updateCartTotalDisplay();
  updateWhatsAppButtonState();
}

function updateCartCountBadge() {
  const count = calculateCartCount();
  const countEl = $("cart-count");
  const toggleBtn = $("cart-toggle-btn");

  if (countEl) countEl.textContent = String(count);
  if (toggleBtn) {
    toggleBtn.setAttribute(
      "aria-label",
      "Open cart, " + count + (count === 1 ? " item" : " items")
    );
  }
}

function updateCartTotalDisplay() {
  const foodTotal = calculateCartTotal();
  const feeTbc = isFeeToBeConfirmed();

  const setText = (id, text) => {
    const e = $(id);
    if (e) e.textContent = text;
  };

  setText("cart-food-total-value", formatPrice(foodTotal));
  setText("cart-delivery-fee-value", "To be confirmed");
  setText(
    "cart-total-value",
    feeTbc ? formatPrice(foodTotal) + " + fee" : formatPrice(foodTotal)
  );
}

function updateWhatsAppButtonState() {
  const btn = $("whatsapp-order-btn");
  if (btn) btn.disabled = !isOrderFormValid();
}

function renderCartItems() {
  const itemsWrap = $("cart-items");
  const emptyWrap = $("cart-empty");
  const footerWrap = $("cart-footer");
  if (!itemsWrap || !emptyWrap || !footerWrap) return;

  itemsWrap.innerHTML = "";

  if (cart.length === 0) {
    itemsWrap.hidden = true;
    footerWrap.hidden = true;
    emptyWrap.hidden = false;
    return;
  }

  itemsWrap.hidden = false;
  footerWrap.hidden = false;
  emptyWrap.hidden = true;

  cart.forEach((item) => {
    const row = el("div", "cart-item");

    const info = el("div", "cart-item-info");
    info.appendChild(el("p", "cart-item-name", item.name));
    info.appendChild(el("p", "cart-item-unit-price", formatPrice(item.price) + " each"));
    row.appendChild(info);

    const controls = el("div", "cart-item-controls");
    const qtyWrap = el("div", "cart-qty");

    const minusBtn = el("button", "cart-qty-btn", "−");
    minusBtn.type = "button";
    minusBtn.setAttribute("aria-label", "Decrease quantity of " + item.name);
    minusBtn.dataset.action = "decrease";
    minusBtn.dataset.key = item.key;

    const qtyValue = el("span", "cart-qty-value", String(item.qty));
    qtyValue.setAttribute("aria-live", "polite");

    const plusBtn = el("button", "cart-qty-btn", "+");
    plusBtn.type = "button";
    plusBtn.setAttribute("aria-label", "Increase quantity of " + item.name);
    plusBtn.dataset.action = "increase";
    plusBtn.dataset.key = item.key;

    qtyWrap.appendChild(minusBtn);
    qtyWrap.appendChild(qtyValue);
    qtyWrap.appendChild(plusBtn);
    controls.appendChild(qtyWrap);

    controls.appendChild(el("p", "cart-item-subtotal", formatPrice(item.price * item.qty)));

    const removeBtn = el("button", "cart-remove-btn", "Remove");
    removeBtn.type = "button";
    removeBtn.setAttribute("aria-label", "Remove " + item.name + " from cart");
    removeBtn.dataset.action = "remove";
    removeBtn.dataset.key = item.key;
    controls.appendChild(removeBtn);

    row.appendChild(controls);
    itemsWrap.appendChild(row);
  });
}


/* =========================================================================
   DRAWER OPEN / CLOSE
   ========================================================================= */

function openCart() {
  const overlay = $("cart-overlay");
  const drawer = $("cart-drawer");
  if (!overlay || !drawer) return;

  overlay.hidden = false;
  drawer.hidden = false;
  document.body.classList.add("cart-open");

  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    drawer.classList.add("open");
  });
}

function closeCart() {
  const overlay = $("cart-overlay");
  const drawer = $("cart-drawer");
  if (!overlay || !drawer) return;

  overlay.classList.remove("visible");
  drawer.classList.remove("open");
  document.body.classList.remove("cart-open");

  setTimeout(() => {
    overlay.hidden = true;
    drawer.hidden = true;
  }, 250);
}


/* =========================================================================
   RESET ORDER FORM (after sending)
   ========================================================================= */

function resetOrderForm() {
  orderType = null;

  document.querySelectorAll(".order-type-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-checked", "false");
  });

  [
    "customer-arrival",
    "customer-guests",
    "customer-name",
    "customer-contact",
    "customer-address",
    "customer-other-area",
    "customer-notes"
  ].forEach((id) => {
    const input = $(id);
    if (input) input.value = "";
  });

  updateFieldVisibility();
  updateCartTotalDisplay();
  updateWhatsAppButtonState();
}


/* =========================================================================
   WHATSAPP ORDER
   ========================================================================= */

function sendOrderToWhatsApp() {
  if (!isOrderFormValid()) return;

  const isDelivery = orderType === "delivery";
  const foodTotal = calculateCartTotal();

  const name = val("customer-name");
  const notes = val("customer-notes");

  const lines = [];

  lines.push("Hello " + RESTAURANT_NAME + ",");
  lines.push("");
  lines.push("I would like to place an order:");
  lines.push("");

  /* Ordered items */
  cart.forEach((item) => {
    lines.push(item.qty + " × " + item.name + " — " + formatPrice(item.price * item.qty));
  });

  lines.push("");

  /* Additional notes */
  if (notes) {
    lines.push("Additional Notes: " + notes);
    lines.push("");
  }

  /* Order details */
  lines.push("Order type: " + ORDER_TYPE_LABELS[orderType]);

  lines.push("Name: " + name);
  lines.push("Contact: " + val("customer-contact"));

  if (orderType === "dinein") {
    lines.push("Time of arrival: " + val("customer-arrival"));
    lines.push("Number of people: " + val("customer-guests"));
  }

  if (isDelivery) {
    lines.push("Delivery Area: " + val("customer-other-area"));
    lines.push("Delivery address: " + val("customer-address"));
  }

  /* Totals */
  lines.push("");

  if (isDelivery) {
    lines.push("Food Total: " + formatPrice(foodTotal));
    lines.push("Delivery Fee: To be confirmed");
    lines.push("Total: " + formatPrice(foodTotal) + " + delivery fee to be confirmed");
  } else {
    lines.push("Total: " + formatPrice(foodTotal));
  }

  lines.push("");
  lines.push("Please confirm my order. Thank you.");

  const url =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));

  window.open(url, "_blank", "noopener");

  resetCart();
  resetOrderForm();
  closeCart();
}


/* =========================================================================
   CART UI EVENTS
   ========================================================================= */

function setupCartUI() {
  const menuMain = $("menu-content");
  const cartItemsWrap = $("cart-items");
  const orderTypeOptions = $("order-type-options");
  const cartFooter = $("cart-footer");

  /* Add-to-cart clicks */
  if (menuMain) {
    menuMain.addEventListener("click", (e) => {
      const btn = e.target.closest(".add-cart-btn");
      if (!btn) return;

      addToCart(btn.dataset.key, btn.dataset.name, Number(btn.dataset.price));

      clearTimeout(btn._resetTimer);
      btn.classList.add("added");
      btn.textContent = "Added ✓";

      btn._resetTimer = setTimeout(() => {
        btn.classList.remove("added");
        btn.textContent = btn.dataset.label;
      }, 900);
    });
  }

  /* Drawer + buttons */
  const bind = (id, handler) => {
    const e = $(id);
    if (e) e.addEventListener("click", handler);
  };

  bind("cart-toggle-btn", openCart);
  bind("cart-close-btn", closeCart);
  bind("cart-overlay", closeCart);
  bind("cart-browse-btn", closeCart);
  bind("clear-cart-btn", clearCart);
  bind("whatsapp-order-btn", sendOrderToWhatsApp);

  /* Dine in / Delivery / Pickup */
  if (orderTypeOptions) {
    orderTypeOptions.addEventListener("click", (e) => {
      const btn = e.target.closest(".order-type-btn");
      if (btn) setOrderType(btn.dataset.type);
    });
  }

  /* Re-check required fields as the customer types */
  if (cartFooter) {
    cartFooter.addEventListener("input", (e) => {
      if (e.target.classList && e.target.classList.contains("cart-input")) {
        updateWhatsAppButtonState();
      }
    });
  }

  /* Quantity controls */
  if (cartItemsWrap) {
    cartItemsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const { action, key } = btn.dataset;

      if (action === "increase") increaseQuantity(key);
      else if (action === "decrease") decreaseQuantity(key);
      else if (action === "remove") removeFromCart(key);
    });
  }

  /* Escape closes the cart */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const drawer = $("cart-drawer");
    if (drawer && !drawer.hidden) closeCart();
  });
}


/* =========================================================================
   ACTIVE CATEGORY HIGHLIGHTING
   ========================================================================= */

function setupActiveTracking() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));
  const sections = MENU_DATA.map((c) => $(c.id));
  const navEl = document.querySelector(".category-nav");

  function setActive(id) {
    pills.forEach((p) => {
      const isActive = p.dataset.target === id;
      p.classList.toggle("active", isActive);

      if (isActive) {
        p.setAttribute("aria-current", "true");
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } else {
        p.removeAttribute("aria-current");
      }
    });
  }

  const navHeight = navEl ? navEl.offsetHeight : 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    {
      root: null,
      rootMargin: "-" + (navHeight + 20) + "px 0px -70% 0px",
      threshold: 0
    }
  );

  sections.forEach((s) => {
    if (s) observer.observe(s);
  });

  if (sections[0]) setActive(sections[0].id);
}


/* =========================================================================
   INIT
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMenu();
  setupActiveTracking();

  cart = loadCart();

  setupCartUI();

  updateFieldVisibility();
  updateCart();

  const yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
