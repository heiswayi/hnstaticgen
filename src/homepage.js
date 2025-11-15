const config = require("./config");
const fs = require("fs");

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${config.blogDescription}" />
        <link rel="stylesheet" href="./assets/styles/markdown-body.css">
        <link rel="stylesheet" href="./assets/styles/highlights.css">
        <link rel="stylesheet" href="./assets/styles/main.css">
        <title>${config.blogName}</title>
    </head>
    <body>
        <div class="site">
            <header class="intro">
                <h1>${config.blogName}</h1>
                <p>${config.blogDescription}</p>
                <p>Written by <a href="${config.authorWebsite}">${config.authorName}</a>, ${config.authorDescription}</p>
            </header>

            <div class="posts">
                ${posts
                  .filter(post => !post.attributes.draft)
                  .map(
                    post => `<div class="post">
                      <small>${post.attributes.date ? post.attributes.date : ''}</small>
                      <h3><a href="./${post.path}">${post.attributes.title}</a></h3>
                      <p>${post.attributes.description}</p>
                    </div>`
                  )
                  .join("")}
            </div>

            <footer>
                <p>© ${new Date().getFullYear()} ${config.authorName}</p>
            </footer>
        </div>
    </body>
</html>
`;

const addHomePage = posts => {
  fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;
