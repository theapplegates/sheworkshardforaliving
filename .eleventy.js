module.exports = function(eleventyConfig) {
    // Copy CSS and JavaScript files to the output folder
    eleventyConfig.addPassthroughCopy("src/css.css");
    eleventyConfig.addPassthroughCopy("src/js.js");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};

