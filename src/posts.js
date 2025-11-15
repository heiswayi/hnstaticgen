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
        <link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
        <link rel="stylesheet" href="../assets/styles/highlights.css">
        <link rel="stylesheet" href="../assets/styles/main.css">
        <title>${data.attributes.title} - ${config.blogName}</title>
    </head>
    <body>
        <div class="window" style="margin: 20px auto; max-width: 800px;">
            <div class="title-bar">
                <button aria-label="Close" class="close"></button>
                <h1 class="title">${data.attributes.title}</h1>
                <button aria-label="Resize" class="resize"></button>
            </div>
            <div class="separator"></div>

            <div class="window-pane">
                <div class="post-header">
                    <a href="/" class="btn">← Back to Home</a>
                    <div class="post-meta">
                        <span class="post-date" ${!data.attributes.date ? 'style="display:none"' : ''}>${data.attributes.date}</span>
                        ${data.attributes.tags ? `<div class="post-tags">${data.attributes.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>` : ''}
                    </div>
                </div>

                <div class="content">
                    ${data.body}
                </div>

                <div class="separator"></div>
                <footer style="text-align: center; padding: 10px 0;">
                    <p>© ${new Date().getFullYear()} ${config.authorName}</p>
                </footer>
            </div>
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
