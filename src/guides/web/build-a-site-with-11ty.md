---
title: "Build a site with 11ty, tailwind, and alpine.js"
layout: default
tags: page
---

# Build a site with 11ty

## Get started

Initialize your project and install base dependencies.

```sh
npm init -y

npm install --save-dev @11ty/eleventy tailwindcss postcss-cli autoprefixer
```

Create a .gitignore file to keep noisy files out of the way.

```sh
# .gitignore
# mac filesystem  
.DS_Store

# 11ty generated files
_site/
_tmp/

# js
node_modules/
```

We'll be putting all our codebase into a src folder so go ahead and make that now. `mkdir src`.
Now to create your first page!

```md
# src/index.md
---
title: "Dinosaurs are cool!"
description: "An informed opinion on why dinosaurs are soo awesome!"
---
# Why dinosaurs are cool!
```

Edit the package.json to add a start and build scripts.

```json
// package.json
{
  ...
  "scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy"
  },
}
```

you might be ready to run the app now, but if you do and navigate to localhost:8080, the first thing you will see is a 404. This is because 11ty is serving up the files from the root, and not using `src` as the base of the site.  To see the page you'll have to go to localhost:8080/src/. It's time to add the 11ty config.

## Config

Create a `.eleventy.js` file at the root of the project. (next to the `package.json`)

```js
// .eleventy.js
module.exports = function (eleventyConfig) {
  // Set custom directories for input, includes, layouts, and data
  return {
    dir: {
      input: "src",
      includes: "_includes", // default value
      layouts: "_layouts",
      data: "_data", // default value
      output: "_site" // default value
    }
  };
};
```

Now that we specified `src` as the input, our site loads as expected with the src/index.md transforming to the base page.

## Layouts

Create a new folder `src/_layouts` and add a new `default.njk` file.
