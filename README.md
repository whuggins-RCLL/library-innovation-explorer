# Library Innovation Explorer

A small starter website for a hands-on workshop on AI-assisted coding. It ships
with content about areas of library work, but the content is a placeholder —
the project is a template for whatever topic you want to explore.

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

### The topic is not the point

The starter site describes areas of library work. **That is placeholder
content.** None of the code knows what the cards are about — it reads a list
from `data.js` and draws whatever it finds.

So the subject is yours to pick. The same cards, filters, and challenge button
work just as well for the services one department offers, a set of museum
objects, the stages of a grant process, the systems your team maintains, a
reading list, or something nobody has built a page for yet. Changing the topic
is one of the most satisfying things you can do in a short session, and it is
mostly a matter of editing one file.

The site says this to you as well. Open the **Make it yours** page in the
running site for a library of prompts you can copy, including ones for swapping
the topic and applying your own branding.

---

## 2. What is in the project

Three pages, and a few files behind them.

### The pages

**`index.html` — Explore**
The home page. Sets out the header, the challenge button, the place where the
cards appear, and the footer. It does not contain the card text itself.

**`build.html` — Make it yours**
A guide, inside the site, that explains the project is a template and offers a
library of prompts you can copy. Read this one early.

**`playground.html` — Design playground**
A scratch page holding a few plain sample pieces — headings, buttons, a card,
tags, an input. Somewhere to try design ideas without worrying about breaking
the home page. Redesign it or delete it.

### The files behind them

**`styles.css`**
How everything looks: colors, fonts, spacing, and how the layout rearranges
itself on smaller screens. The colors are defined once at the top of the file,
so changing a few lines there changes the look of all three pages.

**`data.js`**
The content of the home page: the work areas and the challenge prompts. If you
want to change what the site *says*, this is usually the file to edit.

**`script.js`**
The behavior of the home page: it reads `data.js`, draws the cards, runs the
category filters, and picks a random challenge when the button is clicked.

**`prompts.js`**
The prompt library shown on the Make it yours page. Add your own as you find
prompts that work.

**`build.js`**
Draws that prompt library and handles the copy buttons.

**`README.md`** is this file. **`LICENSE`** is the MIT license, which says
anyone may reuse this.

Each page loads only the JavaScript it needs, which is why there is more than
one script file.

### Running it

You can open `index.html` directly in a web browser by double-clicking it. Most
AI coding tools also offer a preview or a "run" option, which serves the folder
as a small local website. Either works.

One small difference: the copy buttons on the Make it yours page need a real
web address to reach your clipboard. Opened straight from a file, they fall
back to selecting the prompt so you can copy it with `Ctrl`/`Cmd` + `C`.

---

## 3. Step 1: Fork this repository

A **fork** is your own copy of this project, stored under your own GitHub
account. You can experiment with it freely without changing the workshop's
original repository.

1. Sign into GitHub.
2. Click **Fork** near the top of the repository page.
3. Keep the default repository name. (You can rename it if you like — nothing
   in the project depends on what it is called.)
4. Click **Create fork**.
5. Confirm that you are now viewing a repository under **your own** GitHub
   account. The name at the top of the page should start with your username.

That last step matters. Everything from here on assumes you are working in your
fork.

You do not need to rename anything, move anything, or set anything up. A fresh
fork runs as-is.

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

Cloning creates a folder named after your fork, whatever that name is. Move
into it:

```bash
cd NAME-OF-YOUR-REPOSITORY
```

If you are not sure of the name, run `ls` to see the folder that was just
created.

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

Then open the site itself and read the **Make it yours** page. It holds a
copy-pasteable prompt library grouped by what you are trying to do — change the
topic, add branding, adjust the design, add a feature, check the work. The
examples below are a taste of it; that page has the full set.

---

## 6. Make your first change

Here are some example prompts, roughly in order of ambition. Use them as
written, or change them — inventing your own is the point. The **Make it yours**
page in the site has many more.

Notice what these prompts have in common: they say what to do, and they also say
what *not* to do. Setting limits ("do not redesign the application", "do not add
libraries") is one of the most useful habits in AI-assisted coding.

### Add content

```text
Add a new library work area called "Archives & Special Collections."

Follow the same data structure and visual style as the existing cards.

Do not redesign the application.
```

### Make it about your own topic

Probably the most satisfying change available, and easier than it sounds.

```text
This site is currently about areas of library work.
Change it so it is about <YOUR TOPIC> instead.

Replace the entries in data.js with six items that fit the new topic.
Give each one a title, a category, a short plain-language description,
and two or three example activities.

Update the page title, the headings, and the introduction text in
index.html so they match. Rewrite the challenge prompts in data.js
so they make sense for the new topic too.

Keep the same file structure, the same filtering behavior, and the
same visual style. Do not add any libraries.
```

### Add your branding

```text
Apply my organization's brand colors to this site.

Main color: <#HEX>
Accent or secondary color: <#HEX>

Change the CSS custom properties at the top of styles.css rather than
scattering new colors through the file.

Then check that every piece of text still has a contrast ratio of at
least 4.5 to 1 against its background, and tell me about any
combination that falls below that.
```

Keep branding assets local — no web fonts and no image URLs — so the project
still works with no internet connection.

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
- Add institutional branding — your colors, your name, your logo
- Rewrite the content for a different audience
- Improve the mobile layout
- Add icons without introducing a framework
- Add another filter category
- Redesign the Design playground page however you like
- Add your own prompts to `prompts.js`

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

- Repoint the whole site at a different topic of your own
- Allow users to add their own cards through the interface
- Import data from a local JSON file
- Add a small dashboard or visualization
- Create a guided workflow
- Turn one area into a more substantial interactive prototype
- Add a page of your own alongside the three that exist

And the best idea is probably not on this list. **The most interesting
modification may be something that only makes sense because you understand how
your library works** — a step in your own workflow, a question you answer over
and over, a form nobody likes filling out. Describe that, and see how far the
agent gets.

That is the real invitation here. The cards about library work are scaffolding.
What you replace them with is the point.

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

- **small** — three pages, a handful of files, a few hundred lines
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

Note that the guidance is deliberately *inside* the artifact, not only in this
README. The **Make it yours** page tells participants the topic is a
placeholder and hands them prompts; the **Design playground** gives them a
low-stakes surface for design experiments. Participants who never open the
README still meet the invitation to customize, because the site they are editing
makes it. Both pages are fair game to delete.

A few extension points are marked in the code with `Workshop extension idea`
comments, but participants should feel free to ignore them entirely.

**On the library content:** if the room is not all library staff, or you would
rather they practice on their own subject matter from the first minute, the
topic-swap prompt on the Make it yours page is a good opening exercise. It
touches one data file and produces a visibly different site in a few minutes.

---

## License

MIT. See [LICENSE](LICENSE). You are welcome to reuse and adapt this for your
own workshops.
