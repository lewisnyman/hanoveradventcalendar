module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addShortcode("day", function() {
    const now = new Date();
    const month = now.getUTCMonth();
    const day = now.getUTCDate();
    // If it's November, show nothing
    if(month == 10) {
      return 0;
    }
    // If it's any other month but december, show the show map
    if(month !== 11) {
      return 23;
    }
    // If it's beyond the 23rd, show the whole map
    if(day > 23) {
      return 23;
    }
    return day;
  });
};
