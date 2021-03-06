const MarkdownIt = require("markdown-it");
// const htmlMinTransform = require("./src/transforms/html-min-transform.js");
// const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
// const pluginRss = require("@11ty/eleventy-plugin-rss");
// const readingTime = require("eleventy-plugin-reading-time");
// const format = require("date-fns/format");
// const parseISO = require("date-fns/parseISO");
// const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  // Activate deep merge for data cascade
  eleventyConfig.setDataDeepMerge(true);

  // Plugins
  // eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addPlugin(pluginRss);
  // eleventyConfig.addPlugin(readingTime);

  // Custom collections
  // eleventyConfig.addCollection("blogposts", function (collection) {
  //   return collection.getFilteredByTag("posts").filter((post) => post.data.published);
  // });

  // eleventyConfig.addCollection("featuredProjects", function (collection) {
  //   return collection.getFilteredByTag("project").sort((a, b) => b.data.featured - a.data.featured);
  // });

  // // Custom filters
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("md", function (rawString) {
    return mdRender.render(rawString);
  });
  // // First three are taken from taken from https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  // eleventyConfig.addFilter("toDate", (dateString) => {
  //   return parseISO(dateString);
  // });
  // eleventyConfig.addFilter("readableDate", (dateObj) => {
  //   return format(dateObj, "MMMM d', 'yyyy");
  // });
  // eleventyConfig.addFilter("isoDate", (dateObj) => {
  //   return format(dateObj, "yyyy-MM-dd");
  // });
  // eleventyConfig.addFilter("isoDuration", (readingTime) => {
  //   return `PT${readingTime.split(" ")[0]}M`;
  // });
  // eleventyConfig.addFilter("myRssDate", (dateObj) => {
  //   // Fri, 24 Jul 2020 00:00:00 +0000
  //   return format(dateObj, "E, dd LLL yyyy HH:mm:ss xx");
  // });
  // eleventyConfig.addFilter("lastUpdated", (collection) => {
  //   return new Date(
  //     Math.max(
  //       ...collection.map((item) => {
  //         return item.date;
  //       })
  //     )
  //   );
  // });
  // // Get the first `n` elements of a collection.
  // eleventyConfig.addFilter("head", (array, n) => {
  //   if (n < 0) {
  //     return array.slice(n);
  //   }
  //   return array.slice(0, n);
  // });
  // // Return first segment of url path - used to highlight menu item for nested pages
  // eleventyConfig.addFilter("urlHead", (path) => {
  //   return path !== "/" ? path.split("/").slice(0, 2).join("/") + `/` : path; // url paths in 11ty ends with trailing slash
  // });
  // // generate text param for Twitter share button
  // eleventyConfig.addFilter("twitterShare", (path, quote) => {
  //   return `https://twitter.com/intent/tweet?text=${encodeURI(
  //     `${quote} https://pustelto.com${path}`
  //   )}`;
  // });
  // // Add ` - Tomas Pustelnik` to head title
  // eleventyConfig.addFilter("withAuthor", (title) => {
  //   return title ? `${title} - Tomas Pustelnik's personal website` : undefined;
  // });

  // // Custom shortcodes
  // eleventyConfig.addShortcode("codepen", function (penId, title, tabs = ["css", "result"]) {
  //   return `<p class="codepen" data-height="324" data-theme-id="dark" data-default-tab="${tabs.join(
  //     ","
  //   )}" data-user="Pustelto" data-slug-hash="${penId}" data-preview="true" style="height: 324px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="${title}">
  //   <span>See the Pen <a href="https://codepen.io/Pustelto/pen/${penId}">
  //   ${title}</a> by Tomas Pustelnik (<a href="https://codepen.io/Pustelto">@Pustelto</a>)
  //   on <a href="https://codepen.io">CodePen</a>.</span>
  //  </p>
  //  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  //  `;
  // });

  // async function optimImg(src, opts) {
  //   const finalOpts = {
  //     widths: [296, 608, 888, 1216, 1824],
  //     formats: ["webp", "jpg"],
  //     urlPath: "./",
  //     outputDir: "_site/images",
  //     ...opts,
  //   };
  //   let stats = await Image(src, finalOpts);
  //   if (finalOpts.widths.length > 1) return stats;
  //   else return stats["jpg"].pop();
  // }

  // eleventyConfig.addNunjucksAsyncShortcode("image", async function (src, alt, options) {
  //   if (alt === undefined) {
  //     throw new Error(`Missing \`alt\` on resImage from: ${src}`);
  //   }

  //   let stats = await optimImg("src" + this.page.url + src, { outputDir: "_site" + this.page.url });
  //   let lowestSrc = stats.jpg[0];
  //   let sizes = "(max-width: 39.4375rem) 100vw, 608px";

  //   // Iterate over formats and widths
  //   return `<picture>
  //     ${Object.values(stats)
  //       .map((imageFormat) => {
  //         return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat
  //           .map((entry) => `${entry.url} ${entry.width}w`)
  //           .join(", ")}" sizes="${sizes}">`;
  //       })
  //       .join("\n")}
  //       <img
  //         alt="${alt}"
  //         src="${lowestSrc.url}"
  //         width="${lowestSrc.width}"
  //         height="${lowestSrc.height}"
  //         loading="lazy"
  //         decoding="async">
  //     </picture>`;
  // });

  // eleventyConfig.addNunjucksAsyncShortcode("figure", async function (src, alt, caption, options) {
  //   if (alt === undefined) {
  //     throw new Error(`Missing \`alt\` on resImage from: ${src}`);
  //   }

  //   let stats = await optimImg("src" + this.page.url + src, { outputDir: "_site" + this.page.url });
  //   let lowestSrc = stats.jpg[0];
  //   let sizes = "(max-width: 39.4375rem) 100vw, 608px";

  //   // Iterate over formats and widths
  //   return `<figure><picture>
  //     ${Object.values(stats)
  //       .map((imageFormat) => {
  //         return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat
  //           .map((entry) => `${entry.url} ${entry.width}w`)
  //           .join(", ")}" sizes="${sizes}">`;
  //       })
  //       .join("\n")}
  //       <img
  //         alt="${alt}"
  //         src="${lowestSrc.url}"
  //         width="${lowestSrc.width}"
  //         height="${lowestSrc.height}"
  //         loading="lazy"
  //         decoding="async">
  //     </picture><figcaption>${caption}</figcaption></figure>`;
  // });

  // // Copy assets
  // eleventyConfig.addPassthroughCopy("src/fonts");
  // eleventyConfig.addPassthroughCopy("src/images");
  // eleventyConfig.addPassthroughCopy("src/blog/**/*.{gif}");
  // eleventyConfig.addPassthroughCopy("src/favicon*");

  // // Code transforms
  // eleventyConfig.addTransform("htmlmin", htmlMinTransform);

  // let markdownIt = require("markdown-it");

  // let options = {
  //   html: true,
  //   xhtmlOut: true,
  //   breaks: true,
  //   linkify: false,
  //   typographer: true,
  // };

  // // Markdown Parsing
  // eleventyConfig.setLibrary(
  //   "md",
  //   markdownIt(options)
  //     .use(require("markdown-it-anchor"), {
  //       permalink: true,
  //       permalinkSymbol: "#",
  //     })
  //     .use(require("markdown-it-toc-done-right"), {
  //       containerClass: "toc",
  //     })
  //     .use(require("markdown-it-kbd"))
  //     .use(require("markdown-it-abbr"))
  //     .use(require("markdown-it-playground"))
  // );

  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
    },
    templateFormats: ["njk", "md", "html", "11ty.js", "css"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
