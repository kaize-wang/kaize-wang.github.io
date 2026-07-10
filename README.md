# Kaize Wang Academic Homepage

This repository serves a static bilingual personal academic website for GitHub Pages.

The site is inspired by:

- Jiaxuan Zou's academic homepage structure: About, Publications, Projects, Blog, and bilingual presentation.
- Shaochong Lin's opening-position page structure: clear sections for project overview, topics, requirements, and contact.

## Local Preview

The site is plain HTML/CSS/JavaScript and does not require Jekyll.

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Main Files

- `index.html`: homepage
- `research/index.html`: research interests
- `publications/index.html`: publications and working papers
- `projects/index.html`: projects
- `blog/index.html`: blog index
- `blog/first-note/index.html`: first blog post
- `openings/index.html`: collaboration opportunities
- `cv/index.html`: CV page
- `assets/css/site.css`: site design
- `assets/js/site.js`: language toggle and mobile navigation

The `.nojekyll` file tells GitHub Pages to serve this as a static site.
