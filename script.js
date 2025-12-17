// Search Input 
const searchInput = document.getElementById("searchItems");

if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("Search:", searchInput.value.trim());
    }

    if (e.key === "Escape") {
      searchInput.value = "";
    }
  });
}

// Bestseller Filters
const filters = document.querySelectorAll(".filters .filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");

    console.log("Filter selected:", filter.innerText);
  });
});

// Color Selector
const colorGroups = document.querySelectorAll(".color-filter");

colorGroups.forEach((group) => {
  const colors = group.querySelectorAll(".color");

  colors.forEach((color) => {
    color.addEventListener("click", () => {
      colors.forEach((c) => c.classList.remove("active"));
      color.classList.add("active");
    });
  });
});

// ---------- Card Hover Effect ----------
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.02)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


