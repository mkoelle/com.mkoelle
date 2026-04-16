const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const fs = require('fs')
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = async (eleventyConfig) => {
    const EleventyVitePlugin = (await import("@11ty/eleventy-plugin-vite")).default;
    eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        breaks: false,
        linkify: true
    }));
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPlugin(EleventyVitePlugin);
    eleventyConfig.addPassthroughCopy('src/assets/img')
    eleventyConfig.addPassthroughCopy('src/assets/audio')
    eleventyConfig.addPassthroughCopy('src/robots.txt')


    eleventyConfig.addShortcode('currentDate', (date = DateTime.now()) => {
        return DateTime.now().toISO();
    })

    eleventyConfig.addAsyncShortcode("modifiedDate", async function (path) {
        const filePath = path || this.page?.inputPath;
        const stats = await fs.promises.stat(filePath);
        return stats?.mtime?.toISOString();
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: 'src',
            output: '_site',
            layouts: '_layouts'
        }
    };
}