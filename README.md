# Mkoelle.com

Content and infrastructure for [mkoelle.com](https://mkoelle.com).

## Built with

[![Eleventy][11ty_badge]](https://www.11ty.dev/)
[![Tailwind][Tailwind_badge]](https://tailwindcss.com/)
[![PrismJS][PrismJS_badge]](https://prismjs.com/)
[![AlpineJS][AlpineJS_badge]](https://alpinejs.dev/)
[![Cusdis][Cusdis_badge]](https://cusdis.com/)

## Deployed with

This site is hosted on [![Amazon Web Services][AWS_badge]](https://aws.amazon.com/)
using the following services:

* S3
* Route53
* Cloudfront
* CloudFront Functions
* Certificate Manager
* Cloudformation

## Getting Started

This will get you a copy of the project up and running on
your local machine for development and testing purposes.
See [deployment](#deployment) for notes on deploying the project on a live system.

### Prerequisites

Requires Node.js and npm. NVM is also recommended.

### Installation

```bash
nvm use
npm install
```

### Development

```bash
# start the development server
npm run start

# build the site
npm run build

# clean build site
npm run clean

# clean build and dependencies
npm run clean-all
```

### Testing

Validation is currently limited to spell checking.
CSpell is used to check spelling in markdown and other files.

```bash
# check all source files
npm run cspell-source

# check all files changed since last commit
npm run cspell-changed
```

## Deployment

The site is deployed to [mkoelle.com](https://mkoelle.com) 
via pipeline on check-in or merge to the `main` branch.
Deployments to a staging environment are triggered for all other branches.

### Content

Content is deployed via the `scripts/content-deploy.sh` script.
This script will build the site and sync the content to the S3 bucket.

### Infrastructure

The infrastructure is defined using AWS Cloudformation.
The stack is defined in `infra/cfn/infra.yaml`.

This stack is dependant on another centralized stack for the hosted zone.

The infrastructure is deployed via the `scripts/infra-deploy.sh` script.
This script will deploy the infrastructure stack.

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
[11ty_badge]: https://img.shields.io/badge/eleventy-4A4A55?style=for-the-badge&logo=eleventy
[Tailwind_badge]: https://img.shields.io/badge/Tailwind-007080?style=for-the-badge&logo=tailwindcss
[PrismJS_badge]: https://img.shields.io/badge/PrismJS-000000?style=for-the-badge
[Cusdis_badge]: https://img.shields.io/badge/Cusdis-000000?style=for-the-badge
[AlpineJS_badge]: https://img.shields.io/badge/AlpineJS-408090?style=for-the-badge&logo=alpinedotjs
[AWS_badge]: https://img.shields.io/badge/Amazon_Web_Services-202030?style=flat&logo=amazonwebservices
<!-- Links -->
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