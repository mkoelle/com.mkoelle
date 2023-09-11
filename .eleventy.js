const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const fs = require('fs')

module.exports = (eleventyConfig) => {

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy('src/assets')
    eleventyConfig.addPassthroughCopy('src/robots.txt')
    eleventyConfig.addWatchTarget('./tailwind.config.js')

    eleventyConfig.addShortcode('currentDate', (date = DateTime.now()) => {
        return date;
    })

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