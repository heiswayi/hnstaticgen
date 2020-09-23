const config = require("./config");
const fm = require("front-matter");
const fs = require("fs");
const md = require("./markdown-it");

const posthtml = data => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${data.attributes.description}" />
        <link rel="stylesheet" href="../assets/styles/highlights.css">
        <link rel="stylesheet" href="../assets/styles/markdown-body.css">
        <link rel="stylesheet" href="../assets/styles/main.css">
        <title>${data.attributes.title}</title>
    </head>
    <body>
        <div class="markdown-body site">
            <header>
                <a href="/">Go back home</a>
                <p>—</p>
            </header>

            <div class="content">
                <div class="post-meta">
                  <span class="post-date" ${!data.attributes.date ? 'style="display:none"' : ''}>${data.attributes.date}</span>
                  <h1 class="post-title">${data.attributes.title}</h1>
                </div>
                ${data.body}
            </div>

            <footer>
                <p>—</p>
                <p>© ${new Date().getFullYear()} ${config.authorName}</p>
            </footer>
        </div>
    </body>
</html>
`;

const createPost = postPath => {
  const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf8");
  const content = fm(data);
  content.body = md.render(content.body);
  content.path = postPath;
  return content;
};

const createPosts = posts => {
  posts.forEach(post => {
    if (!fs.existsSync(`${config.dev.outdir}/${post.path}`))
      fs.mkdirSync(`${config.dev.outdir}/${post.path}`);

    fs.writeFile(
      `${config.dev.outdir}/${post.path}/index.html`,
      posthtml(post),
      e => {
        if (e) throw e;
        console.log(`${post.path}/index.html was created successfully`);
      }
    );
  });
};

module.exports = {
  createPost: createPost,
  createPosts: createPosts
};
