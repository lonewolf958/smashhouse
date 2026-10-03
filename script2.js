
/* =========================================================================
   DIGITAL MENU
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.
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
      { name: "Sealed Burger", price: 15000, desc: "Beef/Chicken, Lettuce, Tomato, Onions, Cheddar Cheese, Smash Sauce" }
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

  /* ----------------------------- ADD-ONS ----------------------------- */
  {
    id: "add-ons",
    name: "Add-ons",
    items: [
      { name: "Beef Patty", price: 4000 },
      { name: "Cheese", price: 2000 }
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

  /* ----------------------------- FRESH JUICE ------------------------- */
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
      {
        name: "Plate for 4",
        price: 70000,
        desc: "Tingisha, Beef Mishkaki, Loaded Fries, Wings, Drumstick"
      },
      {
        name: "Plate for 6",
        price: 100000,
        desc: "Tingisha, Beef Mishkaki, Wings, Drumstick, Loaded Fries, Burger (Caramelized / Crispy), Zege, Lemon / Sekela"
      },
      {
        name: "Plate for 8",
        price: 135000,
        desc: "Tingisha, Beef Mishkaki x2, Loaded Fries x2, Zege x2, Full Chicken, Wings, Drumstick, Crispy Chicken Wrap, Plain"
      }
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
/* =========================================================================
   CART CONFIGURATION
   ========================================================================= */

const WHATSAPP_NUMBER = "255789100555";
const RESTAURANT_NAME = "Bismillah Hanan Fast Food";
const CART_STORAGE_KEY = "bismillahHananCart";

/* =========================================================================
   DELIVERY AREAS AND FEES
   EDIT THE AREA NAMES AND PRICES HERE
   ========================================================================= */

const DELIVERY_AREAS = [
  { name: "Town", fee: 2000 },
  { name: "Upanga", fee: 2000 },
  { name: "Kariakoo", fee: 2000 },
  { name: "Posta", fee: 2000 },
  { name: "Seaview/Ocean Road", fee: 3000 },
  { name: "Magomeni", fee: 5000},
  { name: "Ilala", fee: 7000 },
];

/*
   "Other Area" does NOT have a fixed delivery fee.
   The restaurant can confirm the delivery fee through WhatsApp.
*/

const OTHER_AREA_VALUE = "other";

const ORDER_TYPE_LABELS = {
  delivery: "Delivery",
  pickup: "Pickup",
};

let cart = [];
let orderType = null; // "delivery" | "pickup" | null
let selectedDeliveryArea = "";
let deliveryFee = 0;

/*
   Optional customer instructions.
   Available for BOTH Delivery and Pickup.
*/
let customerNote = "";

/* ---------- Helpers ---------- */

function formatPrice(n) {
  return "TSh " + Number(n).toLocaleString("en-US") + "/=";
}

function el(tag, className, html) {
  const e = document.createElement(tag);

  if (className) {
    e.className = className;
  }

  if (html !== undefined) {
    e.innerHTML = html;
  }

  return e;
}

/* =========================================================================
   RENDER CATEGORY NAVIGATION
   ========================================================================= */

function renderNav() {
  const nav = document.getElementById("category-nav");

  if (!nav) return;

  MENU_DATA.forEach((cat) => {
    const btn = el("button", "nav-pill");

    btn.type = "button";
    btn.textContent = cat.name;
    btn.dataset.target = cat.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");

    btn.addEventListener("click", () => {
      const target = document.getElementById(cat.id);

      if (!target) return;

      const categoryNav =
        document.querySelector(".category-nav");

      const headerOffset =
        (categoryNav ? categoryNav.offsetHeight : 0) + 12;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });

    nav.appendChild(btn);
  });
}

/* =========================================================================
   RENDER MENU SECTIONS
   ========================================================================= */

function renderMenu() {
  const main = document.getElementById("menu-content");

  if (!main) return;

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");

    section.id = cat.id;

    section.setAttribute(
      "aria-labelledby",
      cat.id + "-heading"
    );

    const heading = el("h2", "category-heading");

    heading.id = cat.id + "-heading";
    heading.textContent = cat.name;

    section.appendChild(heading);

    if (cat.note) {
      section.appendChild(
        el("p", "category-note", cat.note)
      );
    }

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");
      const top = el("div", "menu-item-top");

      const info = el("div", "menu-item-info");

      info.appendChild(
        el("h3", "menu-item-name", item.name)
      );

      if (item.desc) {
        info.appendChild(
          el("p", "menu-item-desc", item.desc)
        );
      }

      top.appendChild(info);

      const actions = el("div", "menu-item-actions");

      if (cat.sizeLabels) {
        const priceWrap = el(
          "div",
          "menu-item-price menu-item-price--dual"
        );

        const small = el("div", "price-option");

        small.innerHTML =
          '<span class="price-option-label">' +
          cat.sizeLabels[0] +
          '</span><span class="price-option-value">' +
          formatPrice(item.small) +
          "</span>";

        const large = el("div", "price-option");

        large.innerHTML =
          '<span class="price-option-label">' +
          cat.sizeLabels[1] +
          '</span><span class="price-option-value">' +
          formatPrice(item.large) +
          "</span>";

        priceWrap.appendChild(small);
        priceWrap.appendChild(large);

        top.appendChild(priceWrap);

        actions.appendChild(
          buildAddToCartButton(
            cat,
            item,
            cat.sizeLabels[0],
            item.small
          )
        );

        actions.appendChild(
          buildAddToCartButton(
            cat,
            item,
            cat.sizeLabels[1],
            item.large
          )
        );
      } else {
        const price = el(
          "div",
          "menu-item-price",
          formatPrice(item.price)
        );

        top.appendChild(price);

        actions.appendChild(
          buildAddToCartButton(
            cat,
            item,
            null,
            item.price
          )
        );
      }

      row.appendChild(top);
      row.appendChild(actions);

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

/* =========================================================================
   BUILD ADD TO CART BUTTONS
   ========================================================================= */

function buildCartKey(catId, itemName, sizeLabel) {
  return sizeLabel
    ? catId + "::" + itemName + "::" + sizeLabel
    : catId + "::" + itemName;
}

function buildAddToCartButton(
  cat,
  item,
  sizeLabel,
  price
) {
  const displayName = sizeLabel
    ? item.name + " (" + sizeLabel + ")"
    : item.name;

  const btn = el("button", "add-cart-btn");

  btn.type = "button";

  btn.dataset.key = buildCartKey(
    cat.id,
    item.name,
    sizeLabel
  );

  btn.dataset.name = displayName;
  btn.dataset.price = price;

  btn.textContent = sizeLabel
    ? "+ Add " + sizeLabel
    : "+ Add to Cart";

  btn.setAttribute(
    "aria-label",
    "Add " + displayName + " to cart"
  );

  return btn;
}

/* =========================================================================
   CART LOGIC
   ========================================================================= */

/* ---------- Persistence ---------- */

function loadCart() {
  try {
    const raw = localStorage.getItem(
      CART_STORAGE_KEY
    );

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
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  } catch (err) {
    // Cart still works for the current page session.
  }
}

/* ---------- Cart mutation ---------- */

function addToCart(key, name, price) {
  const existing = cart.find(
    (i) => i.key === key
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      name,
      price,
      qty: 1,
    });
  }

  saveCart();
  updateCart();
}

function increaseQuantity(key) {
  const item = cart.find(
    (i) => i.key === key
  );

  if (!item) return;

  item.qty += 1;

  saveCart();
  updateCart();
}

function decreaseQuantity(key) {
  const item = cart.find(
    (i) => i.key === key
  );

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
  cart = cart.filter(
    (i) => i.key !== key
  );

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

  const confirmed = window.confirm(
    "Are you sure you want to clear your cart?"
  );

  if (!confirmed) return;

  resetCart();
}

/* =========================================================================
   TOTALS
   ========================================================================= */

function calculateCartTotal() {
  return cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );
}

function calculateCartCount() {
  return cart.reduce(
    (sum, i) => sum + i.qty,
    0
  );
}

/* =========================================================================
   DELIVERY AREA LOGIC
   ========================================================================= */

function getSelectedDeliveryFee() {
  if (orderType !== "delivery") {
    return 0;
  }

  if (
    !selectedDeliveryArea ||
    selectedDeliveryArea === OTHER_AREA_VALUE
  ) {
    return 0;
  }

  const selectedArea = DELIVERY_AREAS.find(
    (area) => area.name === selectedDeliveryArea
  );

  return selectedArea
    ? Number(selectedArea.fee)
    : 0;
}

function updateDeliveryFee() {
  deliveryFee = getSelectedDeliveryFee();

  updateCartTotalDisplay();
  updateWhatsAppButtonState();
}

function handleDeliveryAreaChange(value) {
  selectedDeliveryArea = value || "";

  const otherAreaWrap =
    document.getElementById(
      "other-area-wrap"
    );

  const otherAreaInput =
    document.getElementById(
      "customer-other-area"
    );

  if (otherAreaWrap) {
    otherAreaWrap.hidden =
      selectedDeliveryArea !== OTHER_AREA_VALUE;
  }

  if (
    otherAreaInput &&
    selectedDeliveryArea !== OTHER_AREA_VALUE
  ) {
    otherAreaInput.value = "";
  }

  updateDeliveryFee();
}

/* =========================================================================
   CREATE DELIVERY AREA FIELDS
   ========================================================================= */

function createDeliveryAreaFields() {
  const fieldsWrap =
    document.getElementById(
      "cart-customer-fields"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  if (!fieldsWrap || !addressInput) {
    return;
  }

  /* =========================================================
     ADDITIONAL NOTES / SPECIAL INSTRUCTIONS
     Available for BOTH Delivery and Pickup
     ========================================================= */

  if (
    document.getElementById(
      "customer-notes-wrap"
    )
  ) {
    return;
  }

  const notesWrap =
    document.createElement("div");

  notesWrap.id =
    "customer-notes-wrap";

  notesWrap.className =
    "cart-notes-wrap";

  const notesLabel =
    document.createElement("label");

  notesLabel.htmlFor =
    "customer-notes";

  notesLabel.textContent =
    "Additional notes / special instructions";

  notesLabel.className =
    "cart-input-label";

  const notesInput =
    document.createElement("textarea");

  notesInput.id =
    "customer-notes";

  notesInput.className =
    "cart-input cart-textarea";

  notesInput.placeholder =
    "Tell us how you would like your order...";

  notesInput.setAttribute(
    "aria-label",
    "Additional notes or special instructions"
  );

  notesInput.rows = 3;

  notesInput.addEventListener(
    "input",
    () => {
      customerNote =
        notesInput.value.trim();

      updateWhatsAppButtonState();
    }
  );

  notesWrap.appendChild(
    notesLabel
  );

  notesWrap.appendChild(
    notesInput
  );

  /*
     Insert the notes field after
     the customer contact field.
  */

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  if (contactInput) {
    contactInput.insertAdjacentElement(
      "afterend",
      notesWrap
    );
  } else {
    fieldsWrap.appendChild(
      notesWrap
    );
  }
  
  /* Prevent duplicate creation */
  if (
    document.getElementById(
      "delivery-area-wrap"
    )
  ) {
    return;
  }

  /* ---------- Delivery Area wrapper ---------- */

  const areaWrap =
    document.createElement("div");

  areaWrap.id = "delivery-area-wrap";
  areaWrap.className =
    "cart-delivery-area-wrap";

  /* ---------- Delivery Area label ---------- */

  const areaLabel =
    document.createElement("label");

  areaLabel.htmlFor =
    "customer-delivery-area";

  areaLabel.textContent =
    "Delivery area *";

  areaLabel.className =
    "cart-input-label";

  /* ---------- Delivery Area select ---------- */

  const areaSelect =
    document.createElement("select");

  areaSelect.id =
    "customer-delivery-area";

  areaSelect.className =
    "cart-input cart-select";

  areaSelect.setAttribute(
    "aria-label",
    "Delivery area (required)"
  );

  const defaultOption =
    document.createElement("option");

  defaultOption.value = "";
  defaultOption.textContent =
    "Select your delivery area *";
  defaultOption.disabled = true;
  defaultOption.selected = true;

  areaSelect.appendChild(
    defaultOption
  );

  DELIVERY_AREAS.forEach(
    (area) => {
      const option =
        document.createElement("option");

      option.value = area.name;

      option.textContent =
        area.name +
        " — " +
        formatPrice(area.fee);

      areaSelect.appendChild(
        option
      );
    }
  );

  /* ---------- Other Area option ---------- */

  const otherOption =
    document.createElement("option");

  otherOption.value =
    OTHER_AREA_VALUE;

  otherOption.textContent =
    "Other Area";

  areaSelect.appendChild(
    otherOption
  );

  areaSelect.addEventListener(
    "change",
    () => {
      handleDeliveryAreaChange(
        areaSelect.value
      );
    }
  );

  areaWrap.appendChild(
    areaLabel
  );

  areaWrap.appendChild(
    areaSelect
  );

  /*
     Insert Delivery Area before
     the existing Detailed Address field.
  */

  fieldsWrap.insertBefore(
    areaWrap,
    addressInput
  );

  /* ---------- Other Area wrapper ---------- */

  const otherAreaWrap =
    document.createElement("div");

  otherAreaWrap.id =
    "other-area-wrap";

  otherAreaWrap.className =
    "cart-other-area-wrap";

  otherAreaWrap.hidden = true;

  /* ---------- Other Area label ---------- */

  const otherAreaLabel =
    document.createElement("label");

  otherAreaLabel.htmlFor =
    "customer-other-area";

  otherAreaLabel.textContent =
    "Enter your area *";

  otherAreaLabel.className =
    "cart-input-label";

  /* ---------- Other Area input ---------- */

  const otherAreaInput =
    document.createElement("input");

  otherAreaInput.type = "text";

  otherAreaInput.id =
    "customer-other-area";

  otherAreaInput.className =
    "cart-input";

  otherAreaInput.placeholder =
    "Enter your area *";

  otherAreaInput.setAttribute(
    "aria-label",
    "Enter your area (required)"
  );

  otherAreaInput.addEventListener(
    "input",
    updateWhatsAppButtonState
  );

  otherAreaWrap.appendChild(
    otherAreaLabel
  );

  otherAreaWrap.appendChild(
    otherAreaInput
  );

  fieldsWrap.insertBefore(
    otherAreaWrap,
    addressInput
  );
}

/* =========================================================================
   ORDER TYPE — DELIVERY / PICKUP ONLY
   ========================================================================= */

function setOrderType(type) {
  if (
    type !== "delivery" &&
    type !== "pickup"
  ) {
    return;
  }

  orderType = type;

  /*
     Reset delivery area whenever
     the customer changes order type.
  */

  if (type === "pickup") {
    selectedDeliveryArea = "";
    deliveryFee = 0;

    const areaSelect =
      document.getElementById(
        "customer-delivery-area"
      );

    const otherAreaInput =
      document.getElementById(
        "customer-other-area"
      );

    const otherAreaWrap =
      document.getElementById(
        "other-area-wrap"
      );

    if (areaSelect) {
      areaSelect.selectedIndex = 0;
    }

    if (otherAreaInput) {
      otherAreaInput.value = "";
    }

    if (otherAreaWrap) {
      otherAreaWrap.hidden = true;
    }
  }

  document
    .querySelectorAll(
      ".order-type-btn"
    )
    .forEach((btn) => {
      const isActive =
        btn.dataset.type === type;

      btn.classList.toggle(
        "active",
        isActive
      );

      btn.setAttribute(
        "aria-checked",
        isActive
          ? "true"
          : "false"
      );
    });

  updateFieldVisibility();
  updateCart();
}

/* =========================================================================
   CUSTOMER FIELD VISIBILITY
   ========================================================================= */

function updateFieldVisibility() {
  const fieldsWrap =
    document.getElementById(
      "cart-customer-fields"
    );

  const hint =
    document.getElementById(
      "order-type-hint"
    );

  const nameInput =
    document.getElementById(
      "customer-name"
    );

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  const areaWrap =
    document.getElementById(
      "delivery-area-wrap"
    );

  const otherAreaWrap =
    document.getElementById(
      "other-area-wrap"
    );
	
	  const notesWrap =
    document.getElementById(
      "customer-notes-wrap"
    );

  const chosen =
    Boolean(orderType);

  if (fieldsWrap) {
    fieldsWrap.hidden =
      !chosen;
  }

  if (hint) {
    hint.classList.toggle(
      "is-hidden",
      chosen
    );
  }

  if (nameInput) {
    nameInput.hidden =
      !chosen;
  }

  if (contactInput) {
    contactInput.hidden =
      !chosen;
  }

  if (addressInput) {
    addressInput.hidden =
      orderType !== "delivery";
  }

  if (areaWrap) {
    areaWrap.hidden =
      orderType !== "delivery";
  }

  if (otherAreaWrap) {
    otherAreaWrap.hidden =
      !(
        orderType === "delivery" &&
        selectedDeliveryArea ===
          OTHER_AREA_VALUE
      );
	  
	    /*
     Additional notes are available
     for BOTH Delivery and Pickup.
  */

  if (notesWrap) {
    notesWrap.hidden =
      !chosen;
  }
  }
}

/* =========================================================================
   REQUIRED-FIELD VALIDATION
   ========================================================================= */

function isOrderFormValid() {
  if (cart.length === 0) {
    return false;
  }

  if (!orderType) {
    return false;
  }

  if (
    orderType !== "delivery" &&
    orderType !== "pickup"
  ) {
    return false;
  }

  const nameInput =
    document.getElementById(
      "customer-name"
    );

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  const areaSelect =
    document.getElementById(
      "customer-delivery-area"
    );

  const otherAreaInput =
    document.getElementById(
      "customer-other-area"
    );

  const name =
    nameInput
      ? nameInput.value.trim()
      : "";

  const contact =
    contactInput
      ? contactInput.value.trim()
      : "";

  if (!name || !contact) {
    return false;
  }

  /* ---------- Delivery validation ---------- */

  if (orderType === "delivery") {
    if (
      !areaSelect ||
      !areaSelect.value
    ) {
      return false;
    }

    if (
      areaSelect.value ===
      OTHER_AREA_VALUE
    ) {
      if (
        !otherAreaInput ||
        !otherAreaInput.value.trim()
      ) {
        return false;
      }
    }

    if (
      !addressInput ||
      !addressInput.value.trim()
    ) {
      return false;
    }

    return true;
  }

  /* ---------- Pickup validation ---------- */

  return true;
}

/* =========================================================================
   RENDERING
   ========================================================================= */

function updateCart() {
  renderCartItems();
  updateCartCountBadge();
  updateCartTotalDisplay();
  updateWhatsAppButtonState();
}

function updateCartCountBadge() {
  const count =
    calculateCartCount();

  const countEl =
    document.getElementById(
      "cart-count"
    );

  const toggleBtn =
    document.getElementById(
      "cart-toggle-btn"
    );

  if (countEl) {
    countEl.textContent =
      String(count);
  }

  if (toggleBtn) {
    toggleBtn.setAttribute(
      "aria-label",
      "Open cart, " +
        count +
        (count === 1
          ? " item"
          : " items")
    );
  }
}

function updateCartTotalDisplay() {
  const foodTotal =
    calculateCartTotal();

  deliveryFee =
    getSelectedDeliveryFee();

  const total =
    foodTotal + deliveryFee;

  /*
     New detailed total display.
     If the existing HTML only has
     #cart-total-value, we create the
     Food Total and Delivery Fee rows.
  */

  const totalEl =
    document.getElementById(
      "cart-total-value"
    );

  if (!totalEl) return;

  const totalRow =
    totalEl.closest(
      ".cart-total-row"
    );

  if (!totalRow) {
    totalEl.textContent =
      formatPrice(total);

    return;
  }

  /*
     Replace the old simple total
     display only once.
  */

  if (
    !document.getElementById(
      "cart-food-total-value"
    )
  ) {
    totalRow.innerHTML = `
      <div class="cart-total-breakdown">
        <div class="cart-total-line">
          <span>Food Total</span>
          <span id="cart-food-total-value">
            TSh 0/=
          </span>
        </div>

        <div class="cart-total-line">
          <span>Delivery Fee</span>
          <span id="cart-delivery-fee-value">
            TSh 0/=
          </span>
        </div>

        <div class="cart-total-line cart-grand-total">
          <span>Total</span>
          <span id="cart-total-value">
            TSh 0/=
          </span>
        </div>
      </div>
    `;
  }

  const foodTotalEl =
    document.getElementById(
      "cart-food-total-value"
    );

  const deliveryFeeEl =
    document.getElementById(
      "cart-delivery-fee-value"
    );

  const grandTotalEl =
    document.getElementById(
      "cart-total-value"
    );

  if (foodTotalEl) {
    foodTotalEl.textContent =
      formatPrice(foodTotal);
  }

  if (deliveryFeeEl) {
    if (
      orderType === "delivery" &&
      selectedDeliveryArea ===
        OTHER_AREA_VALUE
    ) {
      deliveryFeeEl.textContent =
        "To be confirmed";
    } else {
      deliveryFeeEl.textContent =
        formatPrice(deliveryFee);
    }
  }

  if (grandTotalEl) {
    if (
      orderType === "delivery" &&
      selectedDeliveryArea ===
        OTHER_AREA_VALUE
    ) {
      grandTotalEl.textContent =
        formatPrice(foodTotal) +
        " + fee";
    } else {
      grandTotalEl.textContent =
        formatPrice(total);
    }
  }
}

function updateWhatsAppButtonState() {
  const btn =
    document.getElementById(
      "whatsapp-order-btn"
    );

  if (btn) {
    btn.disabled =
      !isOrderFormValid();
  }
}

function renderCartItems() {
  const itemsWrap =
    document.getElementById(
      "cart-items"
    );

  const emptyWrap =
    document.getElementById(
      "cart-empty"
    );

  const footerWrap =
    document.getElementById(
      "cart-footer"
    );

  if (
    !itemsWrap ||
    !emptyWrap ||
    !footerWrap
  ) {
    return;
  }

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
    const row =
      el("div", "cart-item");

    const info =
      el("div", "cart-item-info");

    info.appendChild(
      el(
        "p",
        "cart-item-name",
        item.name
      )
    );

    info.appendChild(
      el(
        "p",
        "cart-item-unit-price",
        formatPrice(item.price) +
          " each"
      )
    );

    row.appendChild(info);

    const controls =
      el(
        "div",
        "cart-item-controls"
      );

    const qtyWrap =
      el("div", "cart-qty");

    const minusBtn =
      el(
        "button",
        "cart-qty-btn",
        "−"
      );

    minusBtn.type = "button";

    minusBtn.setAttribute(
      "aria-label",
      "Decrease quantity of " +
        item.name
    );

    minusBtn.dataset.action =
      "decrease";

    minusBtn.dataset.key =
      item.key;

    const qtyValue =
      el(
        "span",
        "cart-qty-value",
        String(item.qty)
      );

    qtyValue.setAttribute(
      "aria-live",
      "polite"
    );

    const plusBtn =
      el(
        "button",
        "cart-qty-btn",
        "+"
      );

    plusBtn.type = "button";

    plusBtn.setAttribute(
      "aria-label",
      "Increase quantity of " +
        item.name
    );

    plusBtn.dataset.action =
      "increase";

    plusBtn.dataset.key =
      item.key;

    qtyWrap.appendChild(
      minusBtn
    );

    qtyWrap.appendChild(
      qtyValue
    );

    qtyWrap.appendChild(
      plusBtn
    );

    controls.appendChild(
      qtyWrap
    );

    controls.appendChild(
      el(
        "p",
        "cart-item-subtotal",
        formatPrice(
          item.price * item.qty
        )
      )
    );

    const removeBtn =
      el(
        "button",
        "cart-remove-btn",
        "Remove"
      );

    removeBtn.type = "button";

    removeBtn.setAttribute(
      "aria-label",
      "Remove " +
        item.name +
        " from cart"
    );

    removeBtn.dataset.action =
      "remove";

    removeBtn.dataset.key =
      item.key;

    controls.appendChild(
      removeBtn
    );

    row.appendChild(
      controls
    );

    itemsWrap.appendChild(
      row
    );
  });
}

/* =========================================================================
   DRAWER OPEN / CLOSE
   ========================================================================= */

function openCart() {
  const overlay =
    document.getElementById(
      "cart-overlay"
    );

  const drawer =
    document.getElementById(
      "cart-drawer"
    );

  if (!overlay || !drawer) {
    return;
  }

  overlay.hidden = false;
  drawer.hidden = false;

  document.body.classList.add(
    "cart-open"
  );

  requestAnimationFrame(() => {
    overlay.classList.add(
      "visible"
    );

    drawer.classList.add(
      "open"
    );
  });
}

function closeCart() {
  const overlay =
    document.getElementById(
      "cart-overlay"
    );

  const drawer =
    document.getElementById(
      "cart-drawer"
    );

  if (!overlay || !drawer) {
    return;
  }

  overlay.classList.remove(
    "visible"
  );

  drawer.classList.remove(
    "open"
  );

  document.body.classList.remove(
    "cart-open"
  );

  setTimeout(() => {
    overlay.hidden = true;
    drawer.hidden = true;
  }, 250);
}

/* =========================================================================
   RESET ORDER FORM
   ========================================================================= */

function resetOrderForm() {
  orderType = null;
  selectedDeliveryArea = "";
  deliveryFee = 0;
  customerNote = "";

  document
    .querySelectorAll(
      ".order-type-btn"
    )
    .forEach((btn) => {
      btn.classList.remove(
        "active"
      );

      btn.setAttribute(
        "aria-checked",
        "false"
      );
    });

    [
    "customer-name",
    "customer-contact",
    "customer-address",
    "customer-other-area",
    "customer-notes",
  ].forEach((id) => {
    const input =
      document.getElementById(id);

    if (input) {
      input.value = "";
    }
  });

  const areaSelect =
    document.getElementById(
      "customer-delivery-area"
    );

  if (areaSelect) {
    areaSelect.selectedIndex = 0;
  }

  const otherAreaWrap =
    document.getElementById(
      "other-area-wrap"
    );

  if (otherAreaWrap) {
    otherAreaWrap.hidden = true;
  }

  updateFieldVisibility();
  updateCartTotalDisplay();
  updateWhatsAppButtonState();
}

/* =========================================================================
   WHATSAPP ORDER
   ========================================================================= */
function sendOrderToWhatsApp() {
  if (!isOrderFormValid()) {
    return;
  }

  const nameInput =
    document.getElementById(
      "customer-name"
    );

  const contactInput =
    document.getElementById(
      "customer-contact"
    );

  const addressInput =
    document.getElementById(
      "customer-address"
    );

  const areaSelect =
    document.getElementById(
      "customer-delivery-area"
    );

  const otherAreaInput =
    document.getElementById(
      "customer-other-area"
    );
	
  const notesInput =
    document.getElementById(
      "customer-notes"
    );	

  const customerName =
    nameInput
      ? nameInput.value.trim()
      : "";

  const customerContact =
    contactInput
      ? contactInput.value.trim()
      : "";

  const customerAddress =
    addressInput
      ? addressInput.value.trim()
      : "";

  const selectedArea =
    areaSelect
      ? areaSelect.value
      : "";

  const manuallyEnteredArea =
    otherAreaInput
      ? otherAreaInput.value.trim()
      : "";
	  
  const additionalNotes =
    notesInput
      ? notesInput.value.trim()
      : "";

  const foodTotal =
    calculateCartTotal();

  const finalDeliveryFee =
    getSelectedDeliveryFee();

  const finalTotal =
    foodTotal + finalDeliveryFee;

  const lines = [];

  lines.push(
    "Hello " +
      RESTAURANT_NAME +
      ","
  );

  lines.push("");

  lines.push(
    "I would like to place an order:"
  );

  lines.push("");

  /* ---------- Ordered Items ---------- */

cart.forEach((item) => {
  lines.push(
    item.qty +
      " × " +
      item.name +
      " — " +
      formatPrice(
        item.price * item.qty
      )
  );

});

lines.push("");

/* ---------- Additional Notes ---------- */

if (additionalNotes) {
  lines.push(
    "Additional Notes: " +
      additionalNotes
  );

  lines.push("");
}

  /* ---------- Customer / Order Details ---------- */

  lines.push(
    "Order type: " +
      (ORDER_TYPE_LABELS[
        orderType
      ] || orderType)
  );

  lines.push(
    "Name: " +
      customerName
  );

  lines.push(
    "Contact: " +
      customerContact
  );

  /* ---------- Delivery Details ---------- */

  if (orderType === "delivery") {
    if (
      selectedArea ===
      OTHER_AREA_VALUE
    ) {
      lines.push(
        "Delivery Area: " +
          manuallyEnteredArea
      );

      lines.push(
        "Delivery Fee: To be confirmed"
      );
    } else {
      lines.push(
        "Delivery Area: " +
          selectedArea
      );

      lines.push(
        "Delivery Fee: " +
          formatPrice(
            finalDeliveryFee
          )
      );
    }

    lines.push(
      "Delivery address: " +
        customerAddress
    );
  }
  

  /* ---------- Totals ---------- */

  lines.push("");

  lines.push(
    "Food Total: " +
      formatPrice(foodTotal)
  );

  lines.push(
    "Delivery Fee: " +
      (
        orderType === "delivery"
          ? selectedArea === OTHER_AREA_VALUE
            ? "To be confirmed"
            : formatPrice(finalDeliveryFee)
          : formatPrice(0)
      )
  );

  if (
    orderType === "delivery" &&
    selectedArea === OTHER_AREA_VALUE
  ) {
    lines.push(
      "Total: " +
        formatPrice(foodTotal) +
        " + delivery fee to be confirmed"
    );
  } else {
    lines.push(
      "Total: " +
        formatPrice(finalTotal)
    );
  }

  lines.push("");

  lines.push(
    "Please confirm my order. Thank you."
  );

  const message =
    lines.join("\n");

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(
    url,
    "_blank",
    "noopener"
  );

  resetCart();
  resetOrderForm();
  closeCart();
}
/* =========================================================================
   CART UI EVENTS
   ========================================================================= */

function setupCartUI() {
  const menuMain =
    document.getElementById(
      "menu-content"
    );

  const cartToggleBtn =
    document.getElementById(
      "cart-toggle-btn"
    );

  const cartCloseBtn =
    document.getElementById(
      "cart-close-btn"
    );

  const cartOverlay =
    document.getElementById(
      "cart-overlay"
    );

  const cartBrowseBtn =
    document.getElementById(
      "cart-browse-btn"
    );

  const clearCartBtn =
    document.getElementById(
      "clear-cart-btn"
    );

  const whatsappBtn =
    document.getElementById(
      "whatsapp-order-btn"
    );

  const cartItemsWrap =
    document.getElementById(
      "cart-items"
    );

  const orderTypeOptions =
    document.getElementById(
      "order-type-options"
    );

  const cartFooter =
    document.getElementById(
      "cart-footer"
    );

  /* ---------- Create new delivery fields ---------- */

  createDeliveryAreaFields();

  /* ---------- Add-to-cart clicks ---------- */

  if (menuMain) {
    menuMain.addEventListener(
      "click",
      (e) => {
        const btn =
          e.target.closest(
            ".add-cart-btn"
          );

        if (!btn) return;

        addToCart(
          btn.dataset.key,
          btn.dataset.name,
          Number(
            btn.dataset.price
          )
        );

        const originalText =
          btn.textContent;

        btn.classList.add(
          "added"
        );

        btn.textContent =
          "Added ✓";

        setTimeout(() => {
          btn.classList.remove(
            "added"
          );

          btn.textContent =
            originalText;
        }, 900);
      }
    );
  }

  /* ---------- Cart drawer ---------- */

  if (cartToggleBtn) {
    cartToggleBtn.addEventListener(
      "click",
      openCart
    );
  }

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener(
      "click",
      closeCart
    );
  }

  if (cartOverlay) {
    cartOverlay.addEventListener(
      "click",
      closeCart
    );
  }

  if (cartBrowseBtn) {
    cartBrowseBtn.addEventListener(
      "click",
      closeCart
    );
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener(
      "click",
      clearCart
    );
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener(
      "click",
      sendOrderToWhatsApp
    );
  }

  /* ---------- Delivery / Pickup selection ---------- */

  if (orderTypeOptions) {
    orderTypeOptions.addEventListener(
      "click",
      (e) => {
        const btn =
          e.target.closest(
            ".order-type-btn"
          );

        if (!btn) return;

        const type =
          btn.dataset.type;

        if (
          type !== "delivery" &&
          type !== "pickup"
        ) {
          return;
        }

        setOrderType(type);
      }
    );
  }

  /* ---------- Customer field validation ---------- */

  if (cartFooter) {
    cartFooter.addEventListener(
      "input",
      (e) => {
        if (
          e.target.classList &&
          e.target.classList.contains(
            "cart-input"
          )
        ) {
          updateWhatsAppButtonState();
        }
      }
    );

    cartFooter.addEventListener(
      "change",
      (e) => {
        if (
          e.target.id ===
          "customer-delivery-area"
        ) {
          updateWhatsAppButtonState();
        }
      }
    );
  }

  /* ---------- Quantity controls ---------- */

  if (cartItemsWrap) {
    cartItemsWrap.addEventListener(
      "click",
      (e) => {
        const btn =
          e.target.closest(
            "button[data-action]"
          );

        if (!btn) return;

        const action =
          btn.dataset.action;

        const key =
          btn.dataset.key;

        if (
          action === "increase"
        ) {
          increaseQuantity(key);
        } else if (
          action === "decrease"
        ) {
          decreaseQuantity(key);
        } else if (
          action === "remove"
        ) {
          removeFromCart(key);
        }
      }
    );
  }

  /* ---------- Escape key closes cart ---------- */

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key !== "Escape") {
        return;
      }

      const drawer =
        document.getElementById(
          "cart-drawer"
        );

      if (
        drawer &&
        !drawer.hidden
      ) {
        closeCart();
      }
    }
  );
}

/* =========================================================================
   ACTIVE CATEGORY HIGHLIGHTING
   ========================================================================= */

function setupActiveTracking() {
  const pills = Array.from(
    document.querySelectorAll(
      ".nav-pill"
    )
  );

  const sections =
    MENU_DATA.map(
      (c) =>
        document.getElementById(
          c.id
        )
    );

  const navEl =
    document.querySelector(
      ".category-nav"
    );

  function setActive(id) {
    pills.forEach((p) => {
      const isActive =
        p.dataset.target === id;

      p.classList.toggle(
        "active",
        isActive
      );

      p.setAttribute(
        "aria-selected",
        isActive
          ? "true"
          : "false"
      );

      if (isActive) {
        p.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    });
  }

  const navHeight =
    navEl
      ? navEl.offsetHeight
      : 0;

  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (
              entry.isIntersecting
            ) {
              setActive(
                entry.target.id
              );
            }
          }
        );
      },
      {
        root: null,
        rootMargin:
          `-${navHeight + 20}px 0px -70% 0px`,
        threshold: 0,
      }
    );

  sections.forEach((s) => {
    if (s) {
      observer.observe(s);
    }
  });

  if (sections[0]) {
    setActive(
      sections[0].id
    );
  }
}

/* =========================================================================
   INIT
   ========================================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    renderNav();
    renderMenu();
    setupActiveTracking();

    cart = loadCart();

    setupCartUI();

    updateFieldVisibility();
    updateCart();

    const yearEl =
      document.getElementById(
        "year"
      );

    if (yearEl) {
      yearEl.textContent =
        new Date().getFullYear();
    }
  }
);

