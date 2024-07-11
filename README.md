# com.mkoelle

Content and infrastructure for mkoelle.com

## Built with

* [![Eleventy][11ty_badge]](https://www.11ty.dev/)
* [![Svelte][Svelte_badge]](https://svelte.dev/)
* Tailwind
* PrismJS
* DaisyUI
* AlpineJS
* [Cusdis](https://cusdis.com/doc#/)

## Deployed with

This site is hosted on AWS

* Cloudformation

## Getting Started

This will get you a copy of the project up and running on
your local machine for development and testing purposes.
See [deployment](#Deployment) for notes on deploying the project on a live system.

### Prerequisites

Requires Node.js and npm.

## Deployment

## Tips

- `npx cspell src/**/* --show-suggestions --unique`
- `git diff --name-only | npx cspell --file-list stdin --show-suggestions --unique`

## Credits

### Inspirations and tutorials

Core ideas and code snippets were taken from the following sources:

- [How to set up a personal website with 11ty, Markdown, TailwindCSS, and Alpine.js][janowski_starter]
- [Eleventy (11ty), Vite, Tailwind, and Alpine.js – Rapid static site starter framework][fullstackdigital_starter]
- [An Eleventy Starter with Tailwind CSS and Alpine.js][css_tricks_starter]

Styles and layout were influenced by the following sources:

- [Atom, a free Tailwind CSS portfolio template][Atom_Template]
- [Hero Patterns][SVG_hero_paterns]
- [Thomashighbaugh / resume][Thomashighbaugh_resume]
- [Universal Résumé Template][WebPraktikos_universal_resume]
- [Let's Learn 11ty Part 7: Adding Tailwind][psypher1_learn_11ty_tailwind]
- [Create Responsive Side Navigation using TailwindCSS & AlpineJs][raddy_responsive_tailwindCSS_alpineJs]
- [11ty Tips I wish i knew from the start][davidea_11ty_tips]


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- Badges -->
[Svelte_badge]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte
[11ty_badge]: https://img.shields.io/badge/eleventy-4A4A55?style=for-the-badge&logo=eleventy
<!-- Guides -->
[janowski_starter]: https://www.janowski.dev/articles/how-to-set-up-personal-website-with-markdown-tailwind-alpinejs/
[fullstackdigital_starter]: https://fullstackdigital.io/blog/eleventy-vite-tailwind-and-alpine-js-rapid-static-site-starter-framework/
[Atom_Template]: https://redpixelthemes.com/templates/atom/
[SVG_hero_paterns]: https://heropatterns.com/
[Thomashighbaugh_resume]: https://github.com/Thomashighbaugh/resume
[WebPraktikos_universal_resume]: https://github.com/WebPraktikos/universal-resume
[css_tricks_starter]: https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/
[psypher1_learn_11ty_tailwind]: https://dev.to/psypher1/lets-learn-11ty-part-7-adding-tailwind-5cdh
[raddy_responsive_tailwindCSS_alpineJs]: https://raddy.dev/blog/how-to-create-responsive-side-navigation-using-tailwindcss-alpinejs/
[davidea_11ty_tips]: https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/