const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");

module.exports = (eleventyConfig) => {

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy('src/assets')
    eleventyConfig.addPassthroughCopy('src/robots.txt')
    eleventyConfig.addWatchTarget('./tailwind.config.js')

    eleventyConfig.addShortcode('currentDate', (date = DateTime.now()) => {
        return date;
    })

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: { input: 'src', output: '_site' }
    };
}