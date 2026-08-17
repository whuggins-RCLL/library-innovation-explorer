/*
  prompts.js
  ----------
  The prompt library shown on the "Make it yours" page (build.html).

  These are starting points, not magic words. The useful pattern in almost all
  of them is: say what you want, say what to leave alone, and ask for a plan
  before a big change.

  Anything in ANGLE BRACKETS is a blank for you to fill in.

  Add your own prompts by copying one of the objects below.
*/

const promptGroups = [
  {
    id: "understand",
    title: "Start by understanding",
    note: "Do this before your first change, and any time you come back to the project after a break.",
    prompts: [
      {
        title: "Get a plain-language tour",
        text: `Before changing anything, inspect this project.

Explain in plain language what index.html, styles.css,
data.js, and script.js each do.

Then explain how the files work together.

Do not modify any files yet.`,
        why: "You get a tour, and the agent builds up an accurate picture of the project before it edits anything.",
      },
      {
        title: "Ask for a plan first",
        text: `I want to <WHAT YOU WANT>.

Before editing anything, tell me which files you would change,
what you would add or remove, and anything you are unsure about.

Wait for me to say go.`,
        why: "Cheaper to fix a plan than a pile of edits. It also surfaces misunderstandings before they turn into code.",
      },
    ],
  },

  {
    id: "topic",
    title: "Make it about your topic",
    note: "This starter is about library work, but nothing in the code cares about that. The six areas are placeholder content. Swap them for whatever you actually want to explore.",
    prompts: [
      {
        title: "Change the subject of the whole site",
        text: `This site is currently about areas of library work.
Change it so it is about <YOUR TOPIC> instead.

Replace the entries in data.js with six items that fit the new topic.
Give each one a title, a category, a short plain-language description,
and two or three example activities.

Update the page title, the headings, and the introduction text in
index.html so they match the new topic. Rewrite the challenge prompts
in data.js so they make sense for it too.

Keep the same file structure, the same filtering behavior, and the same
visual style. Do not add any libraries.`,
        why: "The single highest-value change in this project. It proves the starter is a template, not a finished site about libraries.",
      },
      {
        title: "Aim it at a specific audience",
        text: `Rewrite the introduction and the card descriptions on this site
for <WHO WILL READ IT — for example: new student workers, library trustees,
faculty in one department>.

Keep the same six areas and the same structure.
Change only the wording. Do not change any code or styling.

Aim for short sentences and no internal jargon.`,
        why: "Practice on wording alone. Because it touches no code, it is a safe first prompt and the result is easy to judge.",
      },
      {
        title: "Use your own real categories",
        text: `Right now the cards are grouped into the categories
"Public Services", "Behind the Scenes", and "Systems".

Replace those with categories that match how <YOUR ORGANIZATION>
is actually organized: <LIST YOUR CATEGORIES>.

Reassign each existing card to the most fitting new category.
The filter buttons are generated from the data, so confirm they update
automatically, and tell me if they do not.`,
        why: "Shows how one data change ripples through generated UI — and asks the agent to verify rather than assume.",
      },
    ],
  },

  {
    id: "branding",
    title: "Add your branding",
    note: "Keep everything local. No web fonts, no image URLs, no CDNs — the site should still work with no internet connection.",
    prompts: [
      {
        title: "Apply your brand colors",
        text: `Apply my organization's brand colors to this site.

Main color: <#HEX>
Accent or secondary color: <#HEX>

Change the CSS custom properties at the top of styles.css rather than
scattering new colors through the file.

Then check that every piece of text still has a contrast ratio of at
least 4.5 to 1 against its background. Tell me about any combination
that falls below that instead of silently leaving it.`,
        why: "Names the exact place to edit, and asks for an accessibility check — brand palettes often fail contrast.",
      },
      {
        title: "Add your name and a wordmark",
        text: `Add <YOUR ORGANIZATION NAME> to the header of every page,
and a footer line reading "<YOUR FOOTER TEXT>".

Use text styled with CSS for the wordmark. Do not link to an external
image, an external font, or a CDN — this project has to keep working
with no internet connection.

Keep the header uncluttered and make sure it still works on a phone.`,
        why: "The 'no external assets' constraint matters: agents reach for Google Fonts and image URLs unless told not to.",
      },
      {
        title: "Add a logo file you already have",
        text: `I have put my logo in this project as <FILENAME>.

Add it to the site header at a sensible size, with appropriate
alternative text for screen readers. Keep the existing layout and
spacing working on both desktop and mobile.

Reference the file with a relative path so it still works when the
site is deployed.`,
        why: "Relative paths and real alt text are two things worth getting right early.",
      },
    ],
  },

  {
    id: "design",
    title: "Change how it looks",
    note: "The design here is deliberately plain. There is a lot of easy room to improve it.",
    prompts: [
      {
        title: "Improve hierarchy and spacing",
        text: `Improve the visual hierarchy and spacing of this application.

Keep the overall design simple and professional.
Do not change any of the factual text and do not add dependencies.

Make sure the result still works well on mobile devices.`,
        why: "A broad design ask with tight guardrails. Compare before and after at both window sizes.",
      },
      {
        title: "Try a completely different look",
        text: `Restyle this site to feel <DESCRIBE THE FEELING — for example:
warmer and more editorial, denser and more utilitarian, calmer with
more white space>.

Change only styles.css. Do not change the HTML structure, the content,
or the behavior.

Use system fonts only. Keep it readable and keep contrast accessible.`,
        why: "Restricting the change to one file makes the result easy to review — and easy to throw away if you dislike it.",
      },
      {
        title: "Practice on the playground page",
        text: `Redesign playground.html however you like.

Treat it as a scratch page: change the layout, the components, the
colors, the type. You do not need to keep any of it.

Do not change index.html or build.html.`,
        why: "Somewhere to experiment freely without touching the pages you care about.",
      },
      {
        title: "Fix the mobile layout",
        text: `Look at this site at a 375 pixel wide screen and tell me
what looks wrong or cramped.

Then fix the three worst problems.

Do not change the desktop layout while you do it, and tell me if a fix
would require that tradeoff.`,
        why: "Asking for a diagnosis first gets you a list you can push back on before any code changes.",
      },
    ],
  },

  {
    id: "features",
    title: "Build something new",
    note: "Several obvious features are missing on purpose. Pick one and add it.",
    prompts: [
      {
        title: "Add a search box",
        text: `Add a search box that filters the existing cards as the user types.

It should match against the title, the description, and the example
activities. It should work together with the existing category filters
rather than replacing them.

Use only the existing HTML, CSS, and JavaScript.
Do not add packages or libraries.

Before editing, briefly explain your implementation plan.`,
        why: "The 'work together with the existing filters' clause prevents the usual outcome, where the new feature quietly breaks the old one.",
      },
      {
        title: "Add favorites that persist",
        text: `Let a user mark any card as a favorite, and add a way to show
only favorites.

Remember the favorites in the browser so they survive a page reload.

The controls must be real buttons that work with a keyboard and are
understandable to a screen reader.

Explain your plan before you modify anything.`,
        why: "Introduces stored state. Note the explicit keyboard and screen reader requirement — ask for it or you often will not get it.",
      },
      {
        title: "Compare two areas side by side",
        text: `Add a feature that lets a user select two cards and compare
their example activities side by side.

Use the existing data in data.js. Do not add external libraries.

Make sure the comparison view is usable on a phone, not just on
a wide screen.

Explain your plan before modifying the files.`,
        why: "A bigger feature. Worth doing in two or three rounds rather than one giant prompt.",
      },
      {
        title: "Add expandable detail to each card",
        text: `Add a way to expand each card to show more detail, with the
extra content collapsed by default.

Add a "details" field to each entry in data.js for the longer text.

Use semantic HTML for the expanding behavior and make sure it can be
operated with a keyboard.`,
        why: "Touches the data, the markup, and the behavior at once — a good end-to-end exercise.",
      },
    ],
  },

  {
    id: "check",
    title: "Inspect, test, and back out",
    note: "The habits that separate a useful agent session from a mess. An agent saying \"done\" is not a test.",
    prompts: [
      {
        title: "Ask exactly what changed",
        text: `Explain exactly what files you changed and what you changed in each one.

Then give me a short manual testing checklist so I can confirm
that the feature works before I save the changes.`,
        why: "Gives you a review summary and a test plan. Read both, then check the page yourself.",
      },
      {
        title: "Check for damage elsewhere",
        text: `Did that change affect anything other than what I asked for?

Check that the category filters, the challenge button, and the mobile
layout all still work, and tell me honestly if any of them broke.`,
        why: "Regressions are the most common failure mode. Ask directly and specifically.",
      },
      {
        title: "Report a bug precisely",
        text: `<WHAT YOU DID>, and <WHAT HAPPENED INSTEAD OF WHAT YOU EXPECTED>.

Find the cause and fix it. Do not change anything else.

If you are not sure what is causing it, tell me what you would check
rather than guessing.`,
        why: "Concrete steps and observed behavior beat 'it's broken' every time.",
      },
      {
        title: "Undo it",
        text: `Undo your last change and put the files back the way they were.

Then tell me what you removed.`,
        why: "Knowing you can back out makes it much easier to try ambitious things.",
      },
    ],
  },
];

// Workshop extension idea:
// A participant could add their own group here — the prompts that turned out
// to work well for their own project — and share the page with colleagues.
