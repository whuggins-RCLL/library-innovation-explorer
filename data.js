/*
  data.js
  --------
  All of the content for this site lives here.

  If you want to change what the page says, this is usually the file to edit.
  You (or a coding agent) can add, remove, or reword entries without touching
  the layout or the behavior of the page.

  Two lists live in this file:
    1. libraryAreas       - the cards shown on the page
    2. challengePrompts   - the sentences used by the "innovation challenge" button
*/

// Each object below becomes one card on the page.
// Keep the same keys (id, title, category, description, activities) for new entries.
//
// These six areas are EXAMPLE CONTENT. Nothing in the code knows they are about
// libraries — it just draws whatever list it finds here. Replace them with your
// own topic and the site keeps working. See build.html for prompts that do this.
const libraryAreas = [
  {
    id: "access-circulation",
    title: "Access & Circulation",
    category: "Public Services",
    description:
      "Getting materials into people's hands: checkouts, holds, renewals, interlibrary loan, and the front desk questions that come with them.",
    activities: [
      "Processing holds and recalls",
      "Coordinating interlibrary loan requests",
      "Troubleshooting patron account problems",
    ],
  },
  {
    id: "collections",
    title: "Collections",
    category: "Behind the Scenes",
    description:
      "Deciding what the library buys, keeps, licenses, and withdraws, and making sure the budget matches what people actually need.",
    activities: [
      "Reviewing usage data before a renewal",
      "Building a subject-area purchase list",
      "Planning a weeding or storage project",
    ],
  },
  {
    id: "metadata",
    title: "Metadata",
    category: "Behind the Scenes",
    description:
      "The descriptive work that makes everything findable: cataloging, authority control, batch record loads, and cleanup projects.",
    activities: [
      "Cleaning up inconsistent subject headings",
      "Loading a batch of vendor records",
      "Mapping fields between two systems",
    ],
  },
  {
    id: "discovery",
    title: "Discovery",
    category: "Systems",
    description:
      "How people search. Catalogs, discovery layers, link resolvers, and the many small settings that decide what shows up first.",
    activities: [
      "Testing common searches for bad results",
      "Adjusting relevance or facet settings",
      "Fixing broken links to full text",
    ],
  },
  {
    id: "research-services",
    title: "Research Services",
    category: "Public Services",
    description:
      "Helping people find, evaluate, and use sources: reference questions, consultations, instruction sessions, and research guides.",
    activities: [
      "Meeting with a researcher about a literature review",
      "Teaching a class session on source evaluation",
      "Updating a subject research guide",
    ],
  },
  {
    id: "digital-scholarship",
    title: "Digital Scholarship",
    category: "Systems",
    description:
      "Supporting projects that treat collections as data: text analysis, digitization, repositories, and long-term preservation.",
    activities: [
      "Advising on a text-mining project",
      "Preparing files for a digital repository",
      "Documenting a preservation workflow",
    ],
  },
];

// The randomizer picks one area above and one sentence below, then joins them.
// "{area}" is replaced with the title of the chosen area.
const challengePrompts = [
  "Choose one repetitive task in {area}. How might you make it easier?",
  "What is the most common question people ask about {area}? Could a better answer live somewhere self-service?",
  "Where does a request in {area} sit waiting on a person? What would remove that wait?",
  "If you had to explain {area} to a new colleague in two minutes, what would you leave out — and does anyone actually need it?",
  "Which step in {area} still moves through email or paper? What would it take to change that?",
  "What information about {area} do you re-type or re-check more than once a week?",
  "Imagine {area} had twice the requests and the same staff. What would you fix first?",
];

// Workshop extension idea:
// A participant could add a "difficulty" or "audience" field to each area here,
// then use it for sorting or a second filter.
