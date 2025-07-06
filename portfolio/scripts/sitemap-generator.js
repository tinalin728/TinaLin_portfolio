import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES Modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const sitemap = new SitemapStream({ hostname: 'https://tinalin.ca' });

const pages = [
    '/',
    '/about',
    '/projects',
];

pages.forEach(page => {
    sitemap.write({ url: page, changefreq: 'weekly' });
});

sitemap.end();

streamToPromise(sitemap).then(sm => {
    createWriteStream(`${__dirname}/../public/sitemap.xml`).write(sm.toString());
    console.log('✅ Sitemap generated successfully!');
});
