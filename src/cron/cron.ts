import { cron } from 'https://deno.land/x/deno_cron/cron.ts';

const cronJob = (act: Function, cycle: string) => {
    cron(cycle, () => {
        act();
    });
};

export default cronJob;