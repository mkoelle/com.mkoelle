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

We'll be putting all our codebase into a src folder so go ahead and make that now.
`mkdir src`.
Now to create your first page!

```md
# src/index.md
---
title: "Dinosaurs are cool!"
description: "An informed opinion on why dinosaurs are soo awesome!"
---
# Why dinosaurs are cool!
```

Edit the `package.json` to add a start and build scripts.

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

If you were to run the app now the first thing you will see is a 404.
This is because 11ty is serving up the files from the project root, not `src`.
It's time to add the 11ty config.

## Config

Create a `.eleventy.js` file at the root of the project (next to the `package.json`).
Here we'll export the config and return some custom directories for 11ty to use,
particularly `input` to change the base directory and `layouts` which we'll go into next section.

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

Now that we specified `src` as the input, our site loads as expected with `src/index.md` transforming to the base page.

## Layouts

Now the site looks a bit boring right?
Time to add some pizzazz!
Create a new folder `src/_layouts` and add a new `default.liquid` file.

```liquid
{% raw %} 
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{{site.title}}{% if title %} - {{title}}{% endif %}
    </title>
    <meta charset="UTF-8"/>
    {% if description %}
      <meta name="description" content="{{description}}"/>
    {% endif %}
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"/>
    <link rel="stylesheet" href="{{ '/assets/css/tailwind.css' | url }}">
    <link href="https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css" rel="stylesheet">
    {% block head %}{% endblock %}
  </head>
  <body>
    
  {% render "partials/_navigation" %}
    {% block content %}
      {{ content | safe }}
    {% endblock %}
  </body>
</html>
{% endraw %}
```