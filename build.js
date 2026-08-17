/*
  build.js
  --------
  Draws the prompt library on build.html from the data in prompts.js,
  and handles the "Copy" buttons.

  Note that this file builds elements and sets their `textContent` instead of
  assembling a string of HTML. That is on purpose: the prompts contain angle
  brackets like <YOUR TOPIC>, and a browser would treat those as HTML tags and
  throw them away.
*/

const promptLibrary = document.getElementById("prompt-library");

/* ---------- Copying ---------- */

// Briefly change a button's label, then put it back.
function flashLabel(button, message) {
  const original = button.dataset.label;

  button.textContent = message;
  button.classList.add("is-copied");

  window.setTimeout(() => {
    button.textContent = original;
    button.classList.remove("is-copied");
  }, 1600);
}

// Fallback for when the clipboard is not available: select the text so the
// person can copy it with the keyboard.
function selectText(element) {
  const range = document.createRange();
  range.selectNodeContents(element);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function copyPrompt(text, textElement, button) {
  // The clipboard API only works in a "secure context" — an https:// address
  // or localhost. Opening the file straight from disk with file:// does not
  // qualify, so this has to be able to fail gracefully.
  if (!navigator.clipboard) {
    selectText(textElement);
    flashLabel(button, "Selected — press Ctrl/Cmd + C");
    return;
  }

  navigator.clipboard.writeText(text).then(
    () => flashLabel(button, "Copied"),
    () => {
      selectText(textElement);
      flashLabel(button, "Selected — press Ctrl/Cmd + C");
    }
  );
}

/* ---------- Drawing one prompt ---------- */

function createPromptCard(prompt) {
  const card = document.createElement("li");
  card.className = "prompt";

  const heading = document.createElement("h4");
  heading.className = "prompt-title";
  heading.textContent = prompt.title;

  // <pre> keeps the line breaks in the prompt exactly as written.
  const text = document.createElement("pre");
  text.className = "prompt-text";
  text.textContent = prompt.text;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-button";
  button.textContent = "Copy";
  // Remembered so flashLabel() can restore it after showing "Copied".
  button.dataset.label = "Copy";
  // Screen readers hear which prompt this button belongs to.
  button.setAttribute("aria-label", `Copy prompt: ${prompt.title}`);
  button.addEventListener("click", () =>
    copyPrompt(prompt.text, text, button)
  );

  const why = document.createElement("p");
  why.className = "prompt-why";
  why.textContent = prompt.why;

  card.append(heading, text, button, why);
  return card;
}

/* ---------- Drawing the groups ---------- */

function createGroup(group) {
  const section = document.createElement("section");
  section.className = "prompt-group";

  const heading = document.createElement("h3");
  heading.id = `group-${group.id}`;
  heading.textContent = group.title;
  section.setAttribute("aria-labelledby", heading.id);

  const note = document.createElement("p");
  note.className = "prompt-group-note";
  note.textContent = group.note;

  const list = document.createElement("ul");
  list.className = "prompt-list";
  group.prompts.forEach((prompt) => {
    list.appendChild(createPromptCard(prompt));
  });

  section.append(heading, note, list);
  return section;
}

function renderPromptLibrary() {
  promptGroups.forEach((group) => {
    promptLibrary.appendChild(createGroup(group));
  });
}

renderPromptLibrary();

// Workshop extension idea:
// A participant could add a "copy all prompts in this group" button, or a way
// to filter the library down to one group at a time.
