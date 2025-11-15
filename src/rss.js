const config = require("./config");
const fs = require("fs");

const escapeXml = (unsafe) => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
};

const generateRSS = (posts) => {
  const siteUrl = config.siteUrl || 'http://localhost:8080';
  const buildDate = new Date().toUTCString();

  const publishedPosts = posts.filter(post => !post.attributes.draft);

  const rssItems = publishedPosts.map(post => {
    const postUrl = `${siteUrl}/${post.path}`;
    const pubDate = post.attributes.date
      ? new Date(post.attributes.date).toUTCString()
      : buildDate;

    return `
    <item>
      <title>${escapeXml(post.attributes.title)}</title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.attributes.description || '')}</description>
      ${post.attributes.tags ? post.attributes.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ') : ''}
    </item>`;
  }).join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(config.blogName)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(config.blogDescription)}</description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

  return rss;
};

const createRSSFeed = (posts) => {
  const rssContent = generateRSS(posts);

  fs.writeFile(`${config.dev.outdir}/rss.xml`, rssContent, e => {
    if (e) throw e;
    console.log(`rss.xml was created successfully`);
  });
};

module.exports = createRSSFeed;
