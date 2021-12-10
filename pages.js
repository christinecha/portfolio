const path = require("path");
const fs = require("fs");
const showdown = require("showdown");
const converter = new showdown.Converter();

const TAGS = {
  REMOTE_WORK: "Remote Work",
  HUMANS: "Humans",
  WEB_DEV: "Web Development",
  WEB_DEV_0: "Web Dev: 0 to 1",
};

const markdownFileToHTML = (relPath) => {
  const markdown = fs.readFileSync(path.resolve(__dirname, relPath), "utf8");
  return converter.makeHtml(markdown);
};

const blogPosts = [
  {
    postTitle: "How to Apologize Remotely",
    tags: [TAGS.REMOTE_WORK, TAGS.HUMANS],
    contentPath: "src/blog/how-to-apologize-remotely.md",
    slug: "how-to-apologize-remotely",
    lastUpdated: "2021-01-30",
    featured: true,
  },
  {
    postTitle: "What is a Website?",
    tags: [TAGS.WEB_DEV, TAGS.WEB_DEV_0],
    contentPath: "src/blog/web-dev-0/what-is-a-website.md",
    slug: "what-is-a-website",
    lastUpdated: "2021-06-06",
    featured: true,
  },
];

module.exports = [
  {
    title: "Christine Cha",
    template: "src/templates/index.hbs",
    name: "index",
    bodyId: "index",
  },
  {
    title: "Christine Cha",
    template: "src/templates/blog.hbs",
    name: "blog",
    bodyId: "blog",
    posts: blogPosts,
  },
  ...blogPosts.map((post) => ({
    title: `${post.postTitle} • Christine Cha`,
    template: "src/templates/blog-post.hbs",
    name: `blog/${post.slug}`,
    content: markdownFileToHTML(post.contentPath),
    bodyId: "blog-post",
    ...post,
  })),
];
