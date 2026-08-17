/*
  script.js
  ---------
  The behavior of the page.

  Three things happen here:
    1. The cards from data.js are drawn onto the page.
    2. The filter buttons show or hide cards by category.
    3. The "innovation challenge" button picks a random area and prompt.

  Everything runs in the browser. There is no server, no build step, and no
  libraries to install.
*/

// Grab the parts of the page we need to work with, once, up front.
const cardGrid = document.getElementById("card-grid");
const filterBar = document.getElementById("filters");
const emptyMessage = document.getElementById("empty-message");
const challengeButton = document.getElementById("challenge-button");
const challengeOutput = document.getElementById("challenge-output");

// The category currently selected. "All" means show everything.
let activeCategory = "All";

/* ---------- Drawing the cards ---------- */

// Build the HTML for a single card. Takes one object from libraryAreas.
function createCard(area) {
  const item = document.createElement("li");
  item.className = "card";

  // Used by the filter to decide whether this card should be visible.
  item.dataset.category = area.category;

  // A stable handle for each card. Nothing uses it yet, but a feature like
  // favorites or a comparison view would need a way to refer to one card.
  item.dataset.id = area.id;

  const activityItems = area.activities
    .map((activity) => `<li>${activity}</li>`)
    .join("");

  item.innerHTML = `
    <span class="card-tag">${area.category}</span>
    <h3>${area.title}</h3>
    <p class="card-description">${area.description}</p>
    <p class="card-activities-label">For example</p>
    <ul class="card-activities">${activityItems}</ul>
  `;

  return item;
}

// Draw every card from data.js. Called once when the page loads.
function renderCards() {
  libraryAreas.forEach((area) => {
    cardGrid.appendChild(createCard(area));
  });
}

/* ---------- Filtering ---------- */

// Collect the categories that actually appear in the data, so a new area
// added to data.js gets a filter button automatically.
function getCategories() {
  const categories = [];

  libraryAreas.forEach((area) => {
    if (!categories.includes(area.category)) {
      categories.push(area.category);
    }
  });

  return ["All", ...categories];
}

// Show the cards that match the active category and hide the rest.
function applyFilter() {
  const cards = cardGrid.querySelectorAll(".card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const matches =
      activeCategory === "All" || card.dataset.category === activeCategory;

    // `hidden` removes the card from the page visually and from screen readers.
    card.hidden = !matches;

    if (matches) {
      visibleCount += 1;
    }
  });

  // Tell the user when a filter has left nothing to look at.
  emptyMessage.hidden = visibleCount > 0;

  // Keep each button's pressed state in sync with the active category.
  filterBar.querySelectorAll(".filter-button").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.category === activeCategory)
    );
  });
}

// Create one button per category.
function renderFilters() {
  getCategories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.dataset.category = category;
    button.textContent = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));

    // Real <button> elements are keyboard-accessible for free: they can be
    // reached with Tab and activated with Enter or Space.
    button.addEventListener("click", () => {
      activeCategory = category;
      applyFilter();
    });

    filterBar.appendChild(button);
  });
}

/* ---------- The innovation challenge ---------- */

// Pick one random item out of any array.
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Choose a random area and a random prompt, then show them together.
function showChallenge() {
  const area = pickRandom(libraryAreas);
  const prompt = pickRandom(challengePrompts);

  // Each prompt contains "{area}" as a placeholder for the area's title.
  const text = prompt.replace("{area}", area.title);

  challengeOutput.innerHTML = `
    <span class="challenge-area">${area.title}</span>
    ${text}
  `;
}

/* ---------- Start the page ---------- */

renderCards();
renderFilters();
applyFilter();
challengeButton.addEventListener("click", showChallenge);

// Workshop extension idea:
// A participant could add search or sorting here. The cards are already on the
// page with their category stored in data-category, so a search box could
// filter on the card's text the same way applyFilter() filters on category.
