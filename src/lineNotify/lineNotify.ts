import crawl from "../crawl/crawl.ts";

const token = 'WsqpD4g94IQ3aMtlGN0WUhYYDQzdL9mhLWu8TPvcEBY';

const send = async () => {
    const news = await crawl();
    const message = `
    【${news.title}】: 
    ${news.href}`;
    const payload = new URLSearchParams({
        "message": message
    });
    await fetch('https://notify-api.line.me/api/notify',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`
        },
        body: payload
    });
};

export default send;