
const meals = {
  "Pan Cake": [
    { name: "flour", qty: 1 },
    { name: "eggs", qty: 2 },
    { name: "milk", qty: 1 },
    { name: "maple syrup", qty: 1 }
  ],
  "Green Smoothie": [
    { name: "banana", qty: 1 },
    { name: "spinach", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "chia seeds", qty: 1 }
  ],
  "Oatmeal": [
    { name: "oats", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "maple syrup", qty: 1 },
    { name: "blueberries", qty: 1 },
    { name: "walnuts", qty: 1 }
  ],
  "Eggs": [
    { name: "eggs", qty: 2 },
    { name: "salt", qty: 1 },
    { name: "oil", qty: 1 }
  ],
  "Roti": [
    { name: "wheat flour", qty: 1 },
    { name: "water", qty: 1 },
    { name: "oil", qty: 1 }
  ],
  "Avocado": [
    { name: "avocado", qty: 1 },
    { name: "salt", qty: 1 },
    { name: "lemon", qty: 1 }
  ],
  "Waffles": [
    { name: "flour", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "eggs", qty: 2 },
    { name: "butter", qty: 1 }
  ],
  "Tea": [
    { name: "tea leaves", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "sugar", qty: 1 }
  ],
  "Coffee": [
    { name: "ground coffee", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "sugar", qty: 1 }
  ],
  "Banana Milk": [
    { name: "banana", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "honey", qty: 1 }
  ],
  "Chia Pudding": [
    { name: "chia seeds", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "maple syrup", qty: 1 }
  ],
  "PB Jelly Sandwich": [
    { name: "bread", qty: 2 },
    { name: "peanut butter", qty: 1 },
    { name: "jam", qty: 1 }
  ],
  "Bagels": [
    { name: "bagel", qty: 1 },
    { name: "cream cheese", qty: 1 }
  ],
  "Muffin": [
    { name: "flour", qty: 1 },
    { name: "sugar", qty: 1 },
    { name: "eggs", qty: 1 },
    { name: "baking powder", qty: 1 }
  ],
  "Donuts": [
    { name: "flour", qty: 1 },
    { name: "milk", qty: 1 },
    { name: "sugar", qty: 1 }
  ],
  "Cake": [
    { name: "flour", qty: 1 },
    { name: "sugar", qty: 1 },
    { name: "eggs", qty: 2 },
    { name: "butter", qty: 1 }
  ],
  // Add this inside your meals object

"Chicken": [
  { name: "chicken", qty: 1 },
  { name: "garlic", qty: 1 },
  { name: "spices", qty: 1 }
],
"Lentils": [
  { name: "lentils", qty: 1 },
  { name: "turmeric", qty: 1 },
  { name: "salt", qty: 1 }
],
"Dal Bhat": [
  { name: "rice", qty: 1 },
  { name: "lentils", qty: 1 },
  { name: "turmeric", qty: 1 },
  { name: "salt", qty: 1 }
],
"Spaghetti": [
  { name: "spaghetti", qty: 1 },
  { name: "tomato sauce", qty: 1 },
  { name: "garlic", qty: 1 }
],
"Vegetables": [
  { name: "mixed vegetables", qty: 1 },
  { name: "spices", qty: 1 },
  { name: "oil", qty: 1 }
],
"Potatoes": [
  { name: "potatoes", qty: 1 },
  { name: "salt", qty: 1 },
  { name: "ghee", qty: 1 }
],
"Palaak Paneer": [
  { name: "spinach", qty: 1 },
  { name: "paneer", qty: 1 },
  { name: "onion", qty: 1 }
],
"Matar Paneer": [
  { name: "green peas", qty: 1 },
  { name: "paneer", qty: 1 },
  { name: "tomato", qty: 1 }
],
"Salad": [
  { name: "lettuce", qty: 1 },
  { name: "tomato", qty: 1 },
  { name: "cucumber", qty: 1 }
],
"Pakoda": [
  { name: "besan", qty: 1 },
  { name: "onion", qty: 1 },
  { name: "spices", qty: 1 }
],
"Tofu": [
  { name: "tofu", qty: 1 },
  { name: "soy sauce", qty: 1 },
  { name: "garlic", qty: 1 }
],
"Soyabean": [
  { name: "soyabean nuggets", qty: 1 },
  { name: "spices", qty: 1 },
  { name: "onion", qty: 1 }
],
"Alfredo Pasta": [
  { name: "pasta", qty: 1 },
  { name: "heavy cream", qty: 1 },
  { name: "parmesan cheese", qty: 1 }
],
"Mac n Cheese": [
  { name: "macaroni", qty: 1 },
  { name: "cheese", qty: 1 },
  { name: "milk", qty: 1 }
],
"Marinara Pasta": [
  { name: "spaghetti", qty: 1 },
  { name: "tomato sauce", qty: 1 },
  { name: "garlic", qty: 1 }
],
"Pizza": [
  { name: "pizza dough", qty: 1 },
  { name: "tomato sauce", qty: 1 },
  { name: "cheese", qty: 1 },
  { name: "veggies", qty: 1 }
],
"Burger": [
  { name: "burger bun", qty: 1 },
  { name: "patty", qty: 1 },
  { name: "lettuce", qty: 1 },
  { name: "cheese", qty: 1 }
],
"Wrap/Sandwich": [
  { name: "tortilla", qty: 1 },
  { name: "protein filling", qty: 1 },
  { name: "veggies", qty: 1 }
],
"Burrito Bowl": [
  { name: "rice", qty: 1 },
  { name: "beans", qty: 1 },
  { name: "corn", qty: 1 }
],
"Tacos": [
  { name: "tortilla", qty: 1 },
  { name: "beans", qty: 1 },
  { name: "lettuce", qty: 1 },
  { name: "cheese", qty: 1 }
],
"Fries": [
  { name: "potatoes", qty: 1 },
  { name: "oil", qty: 1 },
  { name: "salt", qty: 1 }
],
"Chowmein": [
  { name: "noodles", qty: 1 },
  { name: "cabbage", qty: 1 },
  { name: "carrots", qty: 1 },
  { name: "soy sauce", qty: 1 }
],
"Thukpa": [
  { name: "noodles", qty: 1 },
  { name: "vegetables", qty: 1 },
  { name: "spices", qty: 1 }
],
"Samyang Noodles": [
  { name: "samyang pack", qty: 1 },
  { name: "egg", qty: 1 }
],
"Chauchau": [
  { name: "instant noodles", qty: 1 },
  { name: "onion", qty: 1 },
  { name: "tomato", qty: 1 }
],
"Pho": [
  { name: "rice noodles", qty: 1 },
  { name: "broth", qty: 1 },
  { name: "protein", qty: 1 }
],
"Sushi": [
  { name: "sushi rice", qty: 1 },
  { name: "seaweed", qty: 1 },
  { name: "fish", qty: 1 }
],
"Falafel": [
  { name: "chickpeas", qty: 1 },
  { name: "garlic", qty: 1 },
  { name: "spices", qty: 1 }
],
"Hummus and Naan": [
  { name: "hummus", qty: 1 },
  { name: "naan bread", qty: 1 },
  { name: "olive oil", qty: 1 }
],
"Airfried Chickpeas": [
  { name: "chickpeas", qty: 1 },
  { name: "oil", qty: 1 },
  { name: "spices", qty: 1 }
],
"Fish": [
  { name: "fish fillet", qty: 1 },
  { name: "lemon", qty: 1 },
  { name: "salt", qty: 1 }
],
"Salmon": [
  { name: "salmon fillet", qty: 1 },
  { name: "lemon", qty: 1 },
  { name: "salt & pepper", qty: 1 }
],
"Corn": [
  { name: "sweet corn", qty: 1 },
  { name: "butter", qty: 1 }
],
"Bara": [
  { name: "black lentils", qty: 1 },
  { name: "ginger", qty: 1 },
  { name: "garlic", qty: 1 }
],
"Choila": [
  { name: "buff", qty: 1 },
  { name: "mustard oil", qty: 1 },
  { name: "garlic paste", qty: 1 }
],
"Chatpate": [
  { name: "puffed rice", qty: 1 },
  { name: "potato", qty: 1 },
  { name: "green chili", qty: 1 }
],
"Pani Puri": [
  { name: "semolina shells", qty: 1 },
  { name: "spicy water", qty: 1 },
  { name: "potato mash", qty: 1 }
],
"Samosa": [
  { name: "flour", qty: 1 },
  { name: "potatoes", qty: 1 },
  { name: "peas", qty: 1 }
],
"Ghundruk": [
  { name: "ghundruk", qty: 1 },
  { name: "garlic", qty: 1 }
],
"Chuira": [
  { name: "beaten rice", qty: 1 },
  { name: "sugar", qty: 1 }
],
"Sel": [
  { name: "rice flour", qty: 1 },
  { name: "water", qty: 1 },
  { name: "sugar", qty: 1 }
],
"Haluwa": [
  { name: "sooji", qty: 1 },
  { name: "ghee", qty: 1 },
  { name: "sugar", qty: 1 }
],
"Malpuwa": [
  { name: "flour", qty: 1 },
  { name: "banana", qty: 1 },
  { name: "sugar", qty: 1 }
],
"Peanut Butter Banana Smoothie": [
  { name: "banana", qty: 1 },
  { name: "milk", qty: 1 },
  { name: "peanut butter", qty: 1 }
],
"Lassi": [
  { name: "yogurt", qty: 1 },
  { name: "sugar", qty: 1 },
  { name: "cardamom", qty: 1 }
],
"Banana Milk": [
  { name: "banana", qty: 1 },
  { name: "milk", qty: 1 },
  { name: "honey", qty: 1 }
],
"Soda": [
  { name: "carbonated water", qty: 1 },
  { name: "sugar", qty: 1 },
  { name: "lemon", qty: 1 }
],
"Boba": [
  { name: "tapioca pearls", qty: 1 },
  { name: "tea", qty: 1 },
  { name: "milk", qty: 1 }
],
"Fruits": [
  { name: "banana", qty: 1 },
  { name: "apple", qty: 1 },
  { name: "grapes", qty: 1 }
],
"Cucumber": [
  { name: "cucumber", qty: 1 },
  { name: "salt", qty: 1 }
],
"Carrots": [
  { name: "carrots", qty: 1 }
],
"Edamame": [
  { name: "frozen edamame", qty: 1 },
  { name: "salt", qty: 1 }
],
"Nuts": [
  { name: "almonds", qty: 1 },
  { name: "cashews", qty: 1 },
  { name: "walnuts", qty: 1 }
],
"Ice Cream": [
  { name: "heavy cream", qty: 1 },
  { name: "sugar", qty: 1 },
  { name: "vanilla extract", qty: 1 }
],
"Cake": [
  { name: "flour", qty: 1 },
  { name: "sugar", qty: 1 },
  { name: "eggs", qty: 1 },
  { name: "butter", qty: 1 }
],
"Donuts": [
  { name: "flour", qty: 1 },
  { name: "milk", qty: 1 },
  { name: "sugar", qty: 1 }
],
"Muffin": [
  { name: "flour", qty: 1 },
  { name: "sugar", qty: 1 },
  { name: "eggs", qty: 1 },
  { name: "baking powder", qty: 1 }
],
"Chia Pudding": [
  { name: "chia seeds", qty: 1 },
  { name: "milk", qty: 1 },
  { name: "maple syrup", qty: 1 }
],
"Chips": [
  { name: "potatoes", qty: 1 },
  { name: "salt", qty: 1 },
  { name: "oil", qty: 1 }
],
"Popcorn": [
  { name: "popcorn kernels", qty: 1 },
  { name: "oil", qty: 1 },
  { name: "salt", qty: 1 }
]

};


document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const allItems = document.querySelectorAll("main li");
      allItems.forEach((item) => {
        const itemText = item.textContent.toLowerCase();
        item.style.display = itemText.includes(searchTerm)
          ? "list-item"
          : "none";
      });
    });
  }

  const expandableItems = document.querySelectorAll(".has-ingredients");
  expandableItems.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("expanded");
    });
  });

  const addButtons = document.querySelectorAll(".add-grocery");
  addButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const itemName = button.closest("li")?.querySelector("em")?.textContent.trim() || "Unnamed";
      const category = button.getAttribute("data-category") || "other";
      addToGroceryList(itemName, category);
    });
  });

  loadGroceryList();

  const clearButton = document.getElementById("clearList");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      document.getElementById("groceryItems").innerHTML = "";
      localStorage.removeItem("groceryList");
      suggestMealsFromInventory();
    });
  }

  const clearBoughtBtn = document.getElementById("clearBought");
  if (clearBoughtBtn) {
    clearBoughtBtn.addEventListener("click", () => {
      document
        .querySelectorAll("#groceryItems input[type='checkbox']:checked")
        .forEach((checkbox) => {
          checkbox.closest("li").remove();
        });
      saveGroceryList();
      suggestMealsFromInventory();
    });
  }

  const exportBtn = document.getElementById("exportList");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => window.print());
  }
  const printBtn = document.getElementById("print-inventory-btn");

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
  
  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

function addToGroceryList(itemName, category = "other") {
  const groceryList = document.getElementById("groceryItems");

  // Basic normalization (lowercase, trim, remove trailing 's')
  const normalize = (name) => name.trim().toLowerCase().replace(/s$/, "");
  const normalizedNewItem = normalize(itemName);

  // Check across all grocery items, not just within the category
  const allItems = document.querySelectorAll("#groceryItems li");
  const exists = [...allItems].some((li) => {
    const existingName = normalize(li.dataset.name || "");
    return existingName === normalizedNewItem;
  });

  if (exists) {
    alert(`"${itemName}" is already in your grocery list 🧠`);
    return;
  }

  // Create section only after checking duplicate
  let categorySection = document.querySelector(`#grocery-${category}`);
  if (!categorySection) {
    categorySection = document.createElement("ul");
    categorySection.id = `grocery-${category}`;
    const heading = document.createElement("h4");
    const displayCategory =
      category === "other"
        ? "Custom"
        : category.charAt(0).toUpperCase() + category.slice(1);
    heading.textContent = displayCategory;

    groceryList.appendChild(heading);
    groceryList.appendChild(categorySection);
  }

  

  // Create new grocery item
  const groceryItem = document.createElement("li");
  groceryItem.dataset.name = itemName.toLowerCase();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "8px";

  const span = document.createElement("span");
  span.textContent = itemName;
  span.classList.add("editable-item");

  span.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.classList.add("edit-input");

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const trimmed = input.value.trim();
        if (trimmed) {
          span.textContent = trimmed;
          groceryItem.dataset.name = trimmed.toLowerCase();
          input.replaceWith(span);
          saveGroceryList();
          suggestMealsFromInventory();
        }
      }
    });

    input.addEventListener("blur", () => {
      input.replaceWith(span);
    });

    span.replaceWith(input);
    input.focus();
  });

  const deleteBtn = document.createElement("button");
deleteBtn.textContent = "🗑";
deleteBtn.style.marginLeft = "10px";
deleteBtn.addEventListener("click", () => {
  groceryItem.remove();

  // ✅ Check and remove heading + section if empty (including "custom")
  if (categorySection && categorySection.children.length === 0) {
    const heading = categorySection.previousElementSibling;
    if (heading && heading.tagName === "H4") {
      heading.remove();
    }
    categorySection.remove();
  }

  saveGroceryList();
  suggestMealsFromInventory();
});

  
  checkbox.addEventListener("change", saveGroceryList);

  groceryItem.appendChild(checkbox);
  groceryItem.appendChild(span);
  groceryItem.appendChild(deleteBtn);
  categorySection.appendChild(groceryItem);
  sortGrocerySection(categorySection);
  saveGroceryList();
  suggestMealsFromInventory();
}




function saveGroceryList() {
  const allSections = document.querySelectorAll("#groceryItems ul");
  const data = {};
  allSections.forEach((section) => {
    const cat = section.id.replace("grocery-", "");
    data[cat] = [...section.children].map((li) => {
      return {
        name: li.dataset.name,
        checked: li.querySelector("input[type='checkbox']").checked,
      };
    });
  });
  localStorage.setItem("groceryList", JSON.stringify(data));
}

function loadGroceryList() {
  const saved = JSON.parse(localStorage.getItem("groceryList"));
  if (!saved) return;

  Object.entries(saved).forEach(([category, items]) => {
    items.forEach(({ name, checked }) => {
      addToGroceryList(name, category);
      const section = document.querySelector(`#grocery-${category}`);
      const item = [...section.children].find((li) => li.dataset.name === name);
      if (item) {
        const checkbox = item.querySelector("input[type='checkbox']");
        if (checkbox) checkbox.checked = checked;
      }
    });
  });

  suggestMealsFromInventory();
  document.querySelectorAll("#groceryItems ul").forEach((section) => {
    sortGrocerySection(section);
  });
}

function suggestMealsFromInventory() {
  const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];
  const container = document.getElementById("smartSuggestionList") || document.getElementById("suggestedMeals");
  if (!container) return;

  const results = [];

  Object.entries(meals).forEach(([mealName, ingredients]) => {
    let hasAll = true;
  
    const availableIngredients = [];
    const missingIngredients = [];
  
    ingredients.forEach(({ name, qty }) => {
      const match = inventory.find(i => i.name === name.toLowerCase());
      if (match && match.quantity >= qty) {
        availableIngredients.push(name);
      } else {
        hasAll = false;
        missingIngredients.push(name);
      }
    });
  
    if (!hasAll) return; // Still keep only fully cookable meals showing
  
    // Build tooltip
    let tooltipText = "";
    if (availableIngredients.length) {
      tooltipText += `Available: ${availableIngredients.join(", ")}\n`;
    }
    if (missingIngredients.length) {
      tooltipText += `Missing: ${missingIngredients.join(", ")}`;
    }
  
    const link = `recipes/${mealName.toLowerCase().replace(/\s+/g, "")}.html`;
    const anchor = `<a href="${link}" target="_blank" data-tooltip="${tooltipText}">${mealName}</a>`;

  
    results.push(`<li style="color: green;">✅ ${anchor}</li>`);
  });
  

  container.innerHTML = results.length
    ? results.join("")
    : "<li>No suggestions yet. Add items to inventory.</li>";

  // 🔗 Attach button click handlers
  document.querySelectorAll(".add-missing-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const meal = btn.getAttribute("data-meal");
      const missing = [];

      const ingredients = meals[meal];
      const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];
      ingredients.forEach(({ name, qty }) => {
        const match = inventory.find((i) => i.name === name.toLowerCase());
        if (!match || match.quantity < qty) {
          const shortBy = match ? qty - match.quantity : qty;
          missing.push({ name, qty: shortBy });
        }
      });

      // Add to grocery list
      missing.forEach(({ name }) => {
        addToGroceryList(name); // uses default category
      });

      showToast(`🛒 Added missing items for "${meal}"`);
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("onlyCookableToggle");
  if (toggle) {
    toggle.addEventListener("change", () => {
      suggestMealsFromInventory();
    });
  }
});

document.querySelectorAll(".toggle-header").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("collapsed");
    btn.classList.toggle("open");
    btn.textContent = btn.textContent.includes("▸")
      ? btn.textContent.replace("▸", "▾")
      : btn.textContent.replace("▾", "▸");
  });
});



function sortGrocerySection(section) {
  const items = [...section.querySelectorAll("li")];
  items.sort((a, b) => {
    const nameA = a.dataset.name.toLowerCase();
    const nameB = b.dataset.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  items.forEach((item) => section.appendChild(item));
}

// === RECIPE COMPATIBILITY CHECK BASED ON INVENTORY ===
document.addEventListener("DOMContentLoaded", () => {
  const resultBox = document.getElementById("inventory-check-result");

  if (resultBox) {
    const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];

    const ingredients = Array.from(
      document.querySelectorAll(".ingredients li")
    ).map((li) => li.textContent.toLowerCase().trim());

    const missing = ingredients.filter((ingredient) => {
      return !inventory.some((inv) =>
        ingredient.includes(inv.name.toLowerCase())
      );
    });

    if (missing.length === 0) {
      resultBox.textContent = "✅ You can make this with your inventory!";
      resultBox.style.color = "green";
    } else {
      resultBox.textContent = "⚠️ You're missing: " + missing.join(", ");
      resultBox.style.color = "orange";
    }
  }
});

// === SMART MATCHING FOR INVENTORY ON HOMEPAGE ===
document.addEventListener("DOMContentLoaded", () => {
  const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];
  const suggestableRecipes = document.querySelectorAll(".suggestable");

  suggestableRecipes.forEach((recipe) => {
    const ingredientData = recipe.getAttribute("data-ingredients");
    const matchDisplay = recipe.querySelector(".match-result");

    if (ingredientData && matchDisplay) {
      const ingredients = ingredientData
        .split(",")
        .map((i) => i.trim().toLowerCase());

      const missing = ingredients.filter((ing) => {
        return !inventory.some((inv) => ing.includes(inv.name.toLowerCase()));
      });

      // if (missing.length === 0) {
      //   matchDisplay.textContent = "🟢 Fully Match – Ready to cook!";
      //   matchDisplay.style.color = "green";
      // } else if (missing.length <= 2) {
      //   matchDisplay.textContent = `🟡 Almost! Missing: ${missing.join(", ")}`;
      //   matchDisplay.style.color = "orange";
      // } else {
      //   matchDisplay.textContent = `🔴 Needs Shopping: ${missing.join(", ")}`;
      //   matchDisplay.style.color = "red";
      // }
      matchDisplay.textContent = "";

    }
  });
});

// === INVENTORY WITH QUANTITY + UNIT ===
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inventory-input");
  const qtyInput = document.getElementById("inventory-quantity");
  const unitInput = document.getElementById("inventory-unit");
  const addBtn = document.getElementById("add-inventory-btn");
  const list = document.getElementById("inventory-list");
  const clearBtn = document.getElementById("clear-inventory-btn"); // ✅ move here

  const exportBtn = document.getElementById("export-inventory-btn");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    const items = getInventory();
    if (!items.length) {
      alert("Your inventory is empty.");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Item,Quantity,Unit\n";
    items.forEach(item => {
      csvContent += `${item.name},${item.quantity},${item.unit || ""}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_inventory.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


  if (input && qtyInput && unitInput && addBtn && list) {
    const INVENTORY_KEY = "myInventoryList";

    function getInventory() {
      return JSON.parse(localStorage.getItem(INVENTORY_KEY)) || [];
    }

    function saveInventory(items) {
      localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
    }

    function renderInventory() {
      list.innerHTML = "";
      const items = getInventory();
      items.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("inventory-list-item");
    
        const nameSpan = document.createElement("span");
        nameSpan.classList.add("item-col");
        nameSpan.textContent = item.name;
    
        const qtySpan = document.createElement("span");
        qtySpan.classList.add("qty-col");
        qtySpan.textContent = item.quantity;
    
        // 🔴 Apply warning if low
        if (item.quantity < 2) {
          qtySpan.classList.add("low-qty");
        }
    
        const unitSpan = document.createElement("span");
        unitSpan.classList.add("unit-col");
        unitSpan.textContent = item.unit || "";
    
        const actionSpan = document.createElement("span");
        actionSpan.classList.add("action-col");
    
        const inc = document.createElement("button");
        inc.textContent = "+";
        inc.onclick = () => {
          items[index].quantity += 1;
          saveInventory(items);
          renderInventory();
        };
    
        const dec = document.createElement("button");
        dec.textContent = "−";
        dec.onclick = () => {
          if (items[index].quantity > 1) {
            items[index].quantity -= 1;
          } else {
            items.splice(index, 1);
          }
          saveInventory(items);
          renderInventory();
        };
    
        const del = document.createElement("button");
        del.textContent = "🗑️";
        del.onclick = () => {
          items.splice(index, 1);
          saveInventory(items);
          renderInventory();
        };
    
        actionSpan.appendChild(inc);
        actionSpan.appendChild(dec);
        actionSpan.appendChild(del);
    
        li.appendChild(nameSpan);
        li.appendChild(qtySpan);
        li.appendChild(unitSpan);
        li.appendChild(actionSpan);
    
        list.appendChild(li);
      });
    
      // ✅ Add this line to update suggestions
      suggestMealsFromInventory();
    }
    
    addBtn.addEventListener("click", () => {
      const name = input.value.trim().toLowerCase();
      const quantity = parseInt(qtyInput.value) || 1; // default to 1 if empty or invalid
      const unit = unitInput.value.trim();
    
      if (name && quantity > 0) {
        let items = getInventory();
        const existing = items.find((i) => i.name === name);
    
        if (existing) {
          existing.quantity += quantity;
        } else {
          items.push({ name, quantity, unit });
        }
    
        saveInventory(items);
        input.value = "";
        qtyInput.value = 1;
        unitInput.value = "";
        renderInventory();
        showToast("✅ Item added to inventory"); // ✅ Toast on add
      }
    });
    

    // ✅ Clear inventory handler goes inside here:
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all inventory?")) {
          localStorage.removeItem(INVENTORY_KEY);
          list.innerHTML = "";
          showToast("🗑 Inventory cleared"); // ✅ Toast when cleared
        }
      });
    }
  
    renderInventory();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleSmartSuggestions");
  const smartBox = document.getElementById("smart-suggestions-box");

  if (toggleBtn && smartBox) {
    toggleBtn.addEventListener("click", () => {
      smartBox.classList.toggle("hidden");
      toggleBtn.textContent = smartBox.classList.contains("hidden")
        ? "➕ Show Suggestions"
        : "➖ Hide Suggestions";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  document.querySelectorAll("nav.top-nav a").forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('.tooltip').forEach((tooltip) => {
  const rect = tooltip.getBoundingClientRect();

  // If the top of the tooltip is close to top of the viewport, add 'bottom' class
  if (rect.top < 100) {
    tooltip.classList.add('bottom');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("customGroceryForm");
  const input = document.getElementById("customGroceryInput");

  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const item = input.value.trim();
      if (item) {
        addToGroceryList(item, "custom");
        input.value = "";
      }
    });
  }
});

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const tagFilter = document.getElementById("tagFilter");
  if (!tagFilter) return;

  tagFilter.addEventListener("change", () => {
    const selectedTag = tagFilter.value.toLowerCase(); // normalize
    const recipes = document.querySelectorAll(".suggestable");
  
    recipes.forEach((recipe) => {
      const tags = (recipe.getAttribute("data-tags") || "").toLowerCase();
      const tagList = tags.split(",").map((t) => t.trim());
  
      if (!selectedTag || tagList.includes(selectedTag)) {
        recipe.style.display = "";
      } else {
        recipe.style.display = "none";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".has-ingredients").forEach((item) => {
    const nameSpan = item.querySelector(".food-name");
    if (!nameSpan) return;

    // Avoid duplicates
    if (nameSpan.querySelector(".bookmark-btn")) return;

    // Get raw name from text or link
    const recipeLink = nameSpan.querySelector("a.recipe-link");
    const rawName = recipeLink?.textContent.trim() || nameSpan.textContent.trim();
    const cleanName = rawName.replace(/▶️/, "").trim();

    // Create recipe link
    const recipeAnchor = document.createElement("a");
    recipeAnchor.className = "recipe-link";
    recipeAnchor.href = `recipes/${cleanName.toLowerCase().replace(/\s+/g, "")}.html`;
    recipeAnchor.textContent = cleanName;

    // Create bookmark button
    const btn = document.createElement("button");
    btn.className = "bookmark-btn";
    btn.dataset.recipe = cleanName;
    btn.textContent = "☆";

    // Load saved bookmarks from localStorage
const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];
btn.textContent = savedBookmarks.includes(cleanName) ? "⭐" : "☆";

// Add click event
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  let bookmarks = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

  if (bookmarks.includes(cleanName)) {
    bookmarks = bookmarks.filter((r) => r !== cleanName);
    btn.textContent = "☆";
    showToast(`❌ Removed "${cleanName}" from bookmarks`);
  } else {
    bookmarks.push(cleanName);
    btn.textContent = "⭐";
    showToast(`✅ Bookmarked "${cleanName}"`);
  }

  localStorage.setItem("bookmarkedRecipes", JSON.stringify(bookmarks));
});


    // Clear old text and re-append
    nameSpan.innerHTML = nameSpan.querySelector("img")?.outerHTML || "";
    nameSpan.appendChild(document.createTextNode(" "));
    const icon = document.createElement("span");
    icon.className = "dropdown-icon";
    icon.textContent = "▶️";
    nameSpan.appendChild(icon);
    nameSpan.appendChild(recipeAnchor);
    nameSpan.appendChild(btn);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];

  document.querySelectorAll(".food-name").forEach((nameSpan) => {
    // 🛠 Instead of raw textContent, find <a> tag or use plain text
    const recipeLink = nameSpan.querySelector("a.recipe-link");
    const rawName = recipeLink ? recipeLink.textContent.trim() : nameSpan.childNodes[nameSpan.childNodes.length - 1].textContent.trim();
    const mealName = rawName.replace("▶️", "").trim(); // Clean "▶️" if left

    const ingredients = meals[mealName];
    if (!ingredients) return; // Skip if meal not in meals object

    const availableIngredients = [];
    const missingIngredients = [];

    ingredients.forEach(({ name, qty }) => {
      const match = inventory.find(i => i.name === name.toLowerCase());
      if (match && match.quantity >= qty) {
        availableIngredients.push(name);
      } else {
        missingIngredients.push(name);
      }
    });

    let tooltipText = "";
    if (availableIngredients.length) {
      tooltipText += `Available: ${availableIngredients.join(", ")}\n`;
    }
    if (missingIngredients.length) {
      tooltipText += `Missing: ${missingIngredients.join(", ")}`;
    }

    console.log('Tooltip set for:', mealName, tooltipText); // 🛠 Debug log
    if (recipeLink) recipeLink.setAttribute("data-tooltip", tooltipText);


  });
});

// === TOOLTIP FOR FOOD NAMES ===
document.addEventListener("DOMContentLoaded", () => {
  const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];

  document.querySelectorAll(".food-name").forEach((nameSpan) => {
    const rawName = nameSpan.textContent.replace(/▶️/, "").trim();
    const mealName = rawName;

    const ingredients = meals[mealName];
    if (!ingredients) return; // if no meal data, skip

    const available = [];
    const missing = [];

    ingredients.forEach(({ name, qty }) => {
      const match = inventory.find(i => i.name === name.toLowerCase());
      if (match && match.quantity >= qty) {
        available.push(name);
      } else {
        missing.push(name);
      }
    });

    // Remove old tooltip if any
    nameSpan.querySelector(".tooltiptext")?.remove();

    // Create tooltip box
    const tooltipBox = document.createElement("div");
    tooltipBox.className = "tooltiptext";
    tooltipBox.style.textAlign = "left";  // ✅ Align text to left
    tooltipBox.style.minWidth = "200px";  // ✅ Make tooltip wider so text wraps properly
    tooltipBox.innerHTML = `
      <div style="color: #27ae60; font-weight: bold;">✅ Available</div>
      <div style="margin-bottom: 8px;">${available.length ? available.join(", ") : "None"}</div>
      <div style="color: #e74c3c; font-weight: bold;">❌ Missing</div>
      <div>${missing.length ? missing.join(", ") : "None"}</div>
    `;

    // Make sure parent has class 'tooltip'
    nameSpan.classList.add("tooltip");

    nameSpan.appendChild(tooltipBox);
  });
});
