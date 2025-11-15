const config = require("./config");
const fs = require("fs");

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${config.blogDescription}" />
        <link rel="stylesheet" href="https://unpkg.com/@sakun/system.css" />
        <link rel="stylesheet" href="./assets/styles/main.css">
        <title>${config.blogName}</title>
    </head>
    <body>
        <div class="window" style="margin: 20px auto; max-width: 800px;">
            <div class="title-bar">
                <button aria-label="Close" class="close"></button>
                <h1 class="title">${config.blogName}</h1>
                <button aria-label="Resize" class="resize"></button>
            </div>
            <div class="separator"></div>

            <div class="window-pane">
                <div class="field-row" style="justify-content: center; margin-bottom: 20px;">
                    <p style="text-align: center;">
                        ${config.blogDescription}<br/>
                        Written by <a href="${config.authorWebsite}">${config.authorName}</a>, ${config.authorDescription}
                    </p>
                </div>

                <div class="separator"></div>

                <div class="posts">
                    ${posts
                      .filter(post => !post.attributes.draft)
                      .map(
                        post => `<div class="post" style="margin-bottom: 20px; padding: 10px; border: 1px solid #000;">
                          <div class="field-row">
                            <small style="color: #666;">${post.attributes.date ? post.attributes.date : ''}</small>
                          </div>
                          <h3 style="margin: 5px 0;"><a href="./${post.path}">${post.attributes.title}</a></h3>
                          <p style="margin: 5px 0;">${post.attributes.description}</p>
                          ${post.attributes.tags ? `<div class="post-tags">${post.attributes.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>` : ''}
                        </div>`
                      )
                      .join("")}
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

const addHomePage = posts => {
  fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;
