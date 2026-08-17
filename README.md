# Library Innovation Explorer

A small starter website about areas of library work — and a starting point for
a hands-on workshop on AI-assisted coding.

---

## 1. What this is

This is a **starter project** for an AI-assisted coding workshop. It is a small,
working website built with plain HTML, CSS, and JavaScript. There are no
frameworks, no packages to install, and no build steps.

It is also **intentionally incomplete**. You are expected to change it. Nothing
here is precious, and there is no "correct" final version. If you break
something in your own copy, that is a normal part of the exercise.

**You do not need to understand every line of code before changing this
project.**

**Your job is to describe what you want, inspect what the coding agent changes,
test the result, and iterate.**

That loop — describe, inspect, test, iterate — is the actual skill this workshop
is about. The website is just something realistic to practice on.

---

## 2. What is in the project

Six files. Four of them matter for the exercise.

**`index.html`**
The structure of the webpage. It sets out the header, the challenge button, the
place where the cards appear, and the footer. It does not contain the card text
itself.

**`styles.css`**
How the site looks: colors, fonts, spacing, and how the layout rearranges itself
on smaller screens. The colors are defined once at the top of the file, so
changing a few lines there changes the whole look.

**`data.js`**
The content: the list of library work areas and the list of challenge prompts.
If you want to change what the page *says*, this is usually the file to edit.

**`script.js`**
The behavior: it reads `data.js`, draws the cards onto the page, runs the
category filters, and picks a random challenge when the button is clicked.

**`README.md`** is this file. **`LICENSE`** is the MIT license, which says
anyone may reuse this.

### Running it

You can open `index.html` directly in a web browser by double-clicking it. Most
AI coding tools also offer a preview or a "run" option, which serves the folder
as a small local website. Either works.

---

## 3. Step 1: Fork this repository

A **fork** is your own copy of this project, stored under your own GitHub
account. You can experiment with it freely without changing the workshop's
original repository.

1. Sign into GitHub.
2. Click **Fork** near the top of the repository page.
3. Keep the default repository name unless you want to rename it.
4. Click **Create fork**.
5. Confirm that you are now viewing a repository under **your own** GitHub
   account. The name at the top of the page should start with your username.

That last step matters. Everything from here on assumes you are working in your
fork.

---

## 4. Step 2: Open your fork in your preferred coding tool

Use whichever AI coding environment you already have or want to try. For
example:

- Codex
- Claude Code
- Cursor
- GitHub Copilot
- Replit
- another coding agent

The workshop does not depend on any one of these. The prompts in this README
work in all of them.

There are two general paths.

### Browser-based path

If you are using a browser-based coding environment such as Replit, look for its
option to import or open a project from a GitHub repository, and point it at
your fork.

**Import your fork, not the original workshop repository.** The URL should
contain your GitHub username. If you import the original, you will not be able
to save your work back to GitHub.

(These tools rearrange their buttons often, so this README does not try to
describe their screens step by step. Look for wording like "Import from GitHub"
or "Open a repository.")

### Local coding-agent path

If you are using a coding agent that runs on your own computer, you need a copy
of your fork on that computer. This is called **cloning**.

On your fork's GitHub page, use the green **Code** button to copy the
repository's URL, then run:

```bash
git clone YOUR-FORK-URL
```

Then move into the new folder. The folder is named after your fork, so if you
kept the default name:

```bash
cd vibe-code-starter-repo
```

Finally, open that folder in your AI coding tool.

**If you prefer not to use the command line,** GitHub Desktop does the same
thing with a graphical interface:

1. Open your fork on GitHub.
2. Choose the option to open or clone it with GitHub Desktop.
3. Choose where on your computer to save it.
4. Open that local folder in your preferred AI coding tool.

Either way: **make sure the repository you clone belongs to your GitHub
account.**

---

## 5. Start by asking the agent to understand the project

Before you ask for any changes, ask the agent to read the project and explain
it. Copy this prompt:

```text
Before changing anything, inspect this project.

Explain in plain language what index.html, styles.css,
data.js, and script.js each do.

Then explain how the files work together.

Do not modify any files yet.
```

Why bother? **Before asking an agent to change software, first give it a chance
to understand the environment.** You also get a plain-language tour of the
project, which makes the agent's later changes much easier to judge.

Read the answer. If something in it sounds wrong, ask about it. That is a
useful habit.

---

## 6. Make your first change

Here are four example prompts, roughly in order of ambition. Use them as
written, or change them — inventing your own is the point.

Notice what these prompts have in common: they say what to do, and they also say
what *not* to do. Setting limits ("do not redesign the application", "do not add
libraries") is one of the most useful habits in AI-assisted coding.

### Add content

```text
Add a new library work area called "Archives & Special Collections."

Follow the same data structure and visual style as the existing cards.

Do not redesign the application.
```

### Add a feature

```text
Add a search box that filters the existing library work cards
as the user types.

Use only the existing HTML, CSS, and JavaScript.
Do not add packages or libraries.

Before editing, briefly explain your implementation plan.
```

### Improve the design

```text
Improve the visual hierarchy and spacing of this application.

Keep the overall design simple and professional.
Do not change any of the factual text or add dependencies.

Make sure the result still works well on mobile devices.
```

### Build something new

```text
Add a feature that allows a user to select two library work areas
and compare their example activities side by side.

Use the existing data.
Do not add external libraries.

Explain your plan before modifying the files.
```

---

## 7. Inspect what changed

After the agent reports that it is finished, ask:

```text
Explain exactly what files you changed and what you changed in each one.

Then give me a short manual testing checklist so I can confirm
that the feature works before I save the changes.
```

**A coding agent saying "done" is not the same as testing the result.**

Agents are confident narrators. They will sometimes describe a feature that
does not quite work, or quietly change something you did not ask about. Reading
the summary and looking at the page yourself takes a minute and catches most of
it.

---

## 8. Test

Open the page and walk through this list:

- Does the page still load?
- Does the new feature actually work?
- Did anything unrelated change?
- Does it work at a narrow/mobile screen width?
- Can the feature be used with a keyboard?
- Does the result match what you originally asked for?

To check the mobile width, narrow your browser window until it is about as wide
as a phone. To check keyboard use, press `Tab` repeatedly: you should always be
able to see which control is selected, and `Enter` or `Space` should activate
it.

If something is wrong, say so plainly and specifically:

```text
The search box does not clear when I delete all the text.
Fix that, and do not change anything else.
```

---

## 9. Commit and push

Two words worth knowing:

- **Commit**: a saved checkpoint in your project's history, with a short note
  about what changed.
- **Push**: sending those checkpoints up to your GitHub fork, so they are stored
  online and not only on your computer.

Commit whenever something works. Small, frequent checkpoints make it easy to go
back if a later change goes badly.

For command-line users:

```bash
git status
git add .
git commit -m "Add search feature"
git push
```

`git status` shows what changed, `git add .` stages all of it, `git commit`
saves the checkpoint, and `git push` sends it to your fork on GitHub.

GitHub Desktop users can do exactly the same thing without a terminal: it lists
the changed files, you type a commit message, click to commit, then click to
push.

Many AI coding agents can also commit and push for you if you ask.

---

## 10. Suggested things to build

Ideas, roughly by difficulty. Pick something you actually want to see.

### Easy

- Add another library work area
- Add more innovation challenges
- Change the visual theme (colors, fonts, spacing)
- Add institutional branding
- Improve the mobile layout
- Add icons without introducing a framework
- Add another filter category

### Intermediate

- Add search
- Add sorting
- Add favorites
- Add a comparison feature
- Add a quiz
- Add expandable details on each card
- Add a "surprise me" exploration mode
- Remember selected favorites in browser storage

### More ambitious

- Allow users to add their own cards through the interface
- Import data from a local JSON file
- Add a small dashboard or visualization
- Create a guided workflow
- Turn one library area into a more substantial interactive prototype

And the best idea is probably not on this list. **The most interesting
modification may be something that only makes sense because you understand how
your library works** — a step in your own workflow, a question you answer over
and over, a form nobody likes filling out. Describe that, and see how far the
agent gets.

---

## 11. Suggested coding-agent workflow

This is the pattern to take home:

```text
UNDERSTAND
    ↓
DESCRIBE A SMALL CHANGE
    ↓
LET THE AGENT IMPLEMENT
    ↓
INSPECT
    ↓
TEST
    ↓
REVISE
    ↓
COMMIT
    ↓
PUSH
    ↓
BUILD THE NEXT THING
```

**Do not try to build everything in one prompt. Small changes are easier to
understand, test, and improve.**

---

## Facilitator note

This repository is intentionally:

- **small** — six files, a few hundred lines
- **static** — no server, no database, no accounts, no API keys
- **dependency-free** — nothing to install, nothing to update, nothing to break
  between the room and the wifi
- **understandable** — a participant can read `data.js` and see exactly where
  the words on the screen come from
- **incomplete** — no search, no favorites, no dark mode, no detail pages

The gaps are the curriculum. The exercise is about learning the AI-assisted
development workflow — describing intent, reading what an agent produced,
testing it, and iterating — rather than mastering a particular programming
language or framework. A starter that already did everything would leave
nothing to practice on.

A few extension points are marked in the code with `Workshop extension idea`
comments, but participants should feel free to ignore them entirely.

---

## License

MIT. See [LICENSE](LICENSE). You are welcome to reuse and adapt this for your
own workshops.
