import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";

const targetUrl = 'https://www.tvbs.com.tw/';

interface News {
    title: string | null;
    href: string | undefined;
};

const crawl = async (): Promise<News> => {
    const res = await fetch(targetUrl, { method: 'GET'});
    const html = await res.text();
    const $ = cheerio.load(html);
    const popular = $('div.section_news a.news_popular');
    const href = popular.attr('href');
    const title = popular.children('h2').html();
    const news: News = {
        title: title,
        href: href
    };
    return news;
};

export default crawl;