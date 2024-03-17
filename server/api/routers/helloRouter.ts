
import { publicProcedure, router } from '../trpc';

export const helloRouter = router({
    get: publicProcedure
        .query(async () => {
            return {
                greeting: `Hello World`,
            };
        }),
});