import send from "./lineNotify/lineNotify.ts";
import cronJob from "./cron/cron.ts";

const main = () => {
  cronJob(send, '0 0 */1 * * *');
};

main();