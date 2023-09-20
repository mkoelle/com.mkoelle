const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const fs = require('fs')
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const electronics = require("./src/_data/electronics");

module.exports = (eleventyConfig) => {

    eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        breaks: false,
        linkify: true
    }));
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy('src/assets')
    eleventyConfig.addPassthroughCopy('src/robots.txt')
    eleventyConfig.addWatchTarget('./tailwind.config.js')

    eleventyConfig.addShortcode('currentDate', (date = DateTime.now()) => {
        return date;
    })

    eleventyConfig.addShortcode("mainItem", (name) => {
        item = electronics.components.find(i => i.name === name) ?? electronics.equipment.find(i => i.name === name)
        return `<div>${item.name}</div><div>${item.total}</div><div>${item.pricePerEach}</div>`
    });
    eleventyConfig.addShortcode("projectItem", (name, count) => {
        item = electronics.components.find(i => i.name === name) ?? electronics.equipment.find(i => i.name === name)
        return `<div>${item.name}</div><div>${count}</div><div>${item.pricePerEach}</div><div>${count * item.pricePerEach}</div>`
    });

    eleventyConfig.addShortcode("modifiedDate", (path = this.page?.inputPath) => {
        console.log(path)
        return fs.statSync(path)?.mtime?.toISOString()
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