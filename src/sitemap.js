const config = require("./config");
const fs = require("fs");

const generateSitemap = (posts) => {
  const siteUrl = config.siteUrl || 'http://localhost:8080';
  const today = new Date().toISOString().split('T')[0];

  const publishedPosts = posts.filter(post => !post.attributes.draft);

  const urls = [
    `  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`
  ];

  publishedPosts.forEach(post => {
    const postDate = post.attributes.date
      ? new Date(post.attributes.date).toISOString().split('T')[0]
      : today;

    urls.push(`  <url>
    <loc>${siteUrl}/${post.path}</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return sitemap;
};

const createSitemap = (posts) => {
  const sitemapContent = generateSitemap(posts);

  fs.writeFile(`${config.dev.outdir}/sitemap.xml`, sitemapContent, e => {
    if (e) throw e;
    console.log(`sitemap.xml was created successfully`);
  });
};

module.exports = createSitemap;
