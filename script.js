
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
  const showOnlyCookable = document.getElementById("onlyCookableToggle")?.checked;
  if (!container) return;

  const results = [];

  Object.entries(meals).forEach(([mealName, ingredients]) => {
    let hasAll = true;
    const missingItems = [];

    ingredients.forEach(({ name, qty }) => {
      const match = inventory.find(i => i.name === name.toLowerCase());
      if (!match || match.quantity < qty) {
        hasAll = false;
        const shortBy = match ? qty - match.quantity : qty;
        missingItems.push({ name, qty: shortBy });
      }
    });

    if (showOnlyCookable && !hasAll) return; // ✅ Skip if user only wants cookable

    const link = `recipes/${mealName.toLowerCase().replace(/\s+/g, "")}.html`;
    const anchor = `<a href="${link}" target="_blank">${mealName}</a>`;

    if (hasAll) {
      results.push(`<li style="color: green;">✅ ${anchor}</li>`);
    } else {
      const missingText = missingItems.map(item => `${item.name} (${item.qty})`).join(", ");
      const btn = `<button class="add-missing-btn" data-meal="${mealName}">🛒 Add Missing to Grocery</button>`;
      const color = missingItems.length <= 2 ? "orange" : "red";
      results.push(`<li style="color: ${color};">
        ${missingItems.length <= 2 ? "🟡" : "🔴"} ${anchor} — Missing: ${missingText}
        <br />${btn}
      </li>`);
    }
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
  const container = document.getElementById("smartSuggestionList");
  if (!container) return;

  const inventory = JSON.parse(localStorage.getItem("myInventoryList")) || [];
  const results = [];

  Object.entries(meals).forEach(([mealName, ingredients]) => {
    let hasAll = true;
    const missingItems = [];

    ingredients.forEach(({ name, qty }) => {
      const match = inventory.find((i) => i.name === name.toLowerCase());
      if (!match || match.quantity < qty) {
        hasAll = false;
        const shortBy = match ? qty - match.quantity : qty;
        missingItems.push({ name, qty: shortBy });
      }
    });

    const link = `recipes/${mealName.toLowerCase().replace(/\s+/g, "")}.html`;
    const anchor = `<a href="${link}" target="_blank">${mealName}</a>`;

    if (hasAll) {
      results.push(`<li style="color: green;">✅ ${anchor}</li>`);
    } else {
      const missingText = missingItems
        .map((item) => `${item.name} (${item.qty})`)
        .join(", ");
      const btn = `<button class="add-missing-btn" data-meal="${mealName}">🛒 Add Missing to Grocery</button>`;
      const color = missingItems.length <= 2 ? "orange" : "red";
      results.push(`<li style="color: ${color};">
        ${missingItems.length <= 2 ? "🟡" : "🔴"} ${anchor} — Missing: ${missingText}
        <br />${btn}
      </li>`);
    }
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

document.addEventListener("DOMContentLoaded", () => {
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
  const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

  bookmarkButtons.forEach((btn) => {
    const recipe = btn.getAttribute("data-recipe");

    // Show filled star if already bookmarked
    if (savedBookmarks.includes(recipe)) {
      btn.textContent = "⭐";
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevents unwanted bubbling like expanding dropdown
      let bookmarks = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

      if (bookmarks.includes(recipe)) {
        // Remove bookmark
        bookmarks = bookmarks.filter((r) => r !== recipe);
        btn.textContent = "☆";
        localStorage.setItem("bookmarkedRecipes", JSON.stringify(bookmarks));
        showToast("❌ Recipe removed from bookmarks");
      } else {
        // Add bookmark
        bookmarks.push(recipe);
        btn.textContent = "⭐";
        localStorage.setItem("bookmarkedRecipes", JSON.stringify(bookmarks));
        showToast("✅ Recipe bookmarked!");
      }
    });
  });
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

