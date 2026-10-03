
   
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


/* ---------- Helpers ---------- */

function formatPrice(n) {
  return "TSh " + n.toLocaleString("en-US") + "/=";
}

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ---------- Render category navigation ---------- */

function renderNav() {
  const nav = document.getElementById("category-nav");
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
      const headerOffset = document.querySelector(".category-nav").offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
    nav.appendChild(btn);
  });
}

/* ---------- Render menu sections ---------- */

function renderMenu() {
  const main = document.getElementById("menu-content");

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");
    section.id = cat.id;
    section.setAttribute("aria-labelledby", cat.id + "-heading");

    const heading = el("h2", "category-heading");
    heading.id = cat.id + "-heading";
    heading.textContent = cat.name;
    section.appendChild(heading);

    if (cat.note) {
      section.appendChild(el("p", "category-note", cat.note));
    }

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");

      const info = el("div", "menu-item-info");
      info.appendChild(el("h3", "menu-item-name", item.name));
      if (item.desc) {
        info.appendChild(el("p", "menu-item-desc", item.desc));
      }
      row.appendChild(info);

      if (cat.sizeLabels) {
        const priceWrap = el("div", "menu-item-price menu-item-price--dual");
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
        row.appendChild(priceWrap);
      } else {
        const price = el("div", "menu-item-price", formatPrice(item.price));
        row.appendChild(price);
      }

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

/* ---------- Active category highlighting on scroll ---------- */

function setupActiveTracking() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));
  const sections = MENU_DATA.map((c) => document.getElementById(c.id));
  const navEl = document.querySelector(".category-nav");

  function setActive(id) {
    pills.forEach((p) => {
      const isActive = p.dataset.target === id;
      p.classList.toggle("active", isActive);
      p.setAttribute("aria-selected", isActive ? "true" : "false");
      if (isActive) {
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: `-${navEl.offsetHeight + 20}px 0px -70% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((s) => s && observer.observe(s));

  // Set initial active state
  if (sections[0]) setActive(sections[0].id);
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMenu();
  setupActiveTracking();

  document.getElementById("year").textContent = new Date().getFullYear();
});
