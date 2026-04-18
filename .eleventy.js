const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const { DateTime } = require("luxon");
const fs = require("fs");

module.exports = async function (eleventyConfig) {
    // Markdown
    eleventyConfig.setLibrary(
        "md",
        markdownIt({
            html: true,
            breaks: false,
            linkify: true,
        })
    );

    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Passthrough assets inside src/
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/audio");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    // Vite
    const EleventyVitePlugin = (await import("@11ty/eleventy-plugin-vite")).default;
    eleventyConfig.addPlugin(EleventyVitePlugin);

    // Shortcodes
    eleventyConfig.addShortcode("currentDate", () => DateTime.now().toISO());

    eleventyConfig.addAsyncShortcode("modifiedDate", async function (path) {
        const filePath = path || this.page?.inputPath;
        const stats = await fs.promises.stat(filePath);
        return stats.mtime.toISOString();
    });

    // Filters
    eleventyConfig.addFilter("postDate", (dateObj) =>
        DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    );

    return {
        dir: {
            input: "src",
            output: "_site",
            layouts: "_layouts",
        },
    };
};
