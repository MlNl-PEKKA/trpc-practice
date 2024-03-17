import { publicProcedure, router } from '../trpc';
import { z } from 'zod';

export const helloRouter = router({
    get: publicProcedure.input(z.object({ text: z.string() }))
        .query(async ({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
});