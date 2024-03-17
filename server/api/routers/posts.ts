import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
const db = [{ text: 'ABC' }, { text: 'DEF' }]
export const postRouter = router({
    get: publicProcedure.query(async () => {
        return db
    }),
    post: publicProcedure.input(z.object({ text: z.string() })).mutation(async ({ input }) => {
        const newPost = { text: input.text }
        db.push(newPost)
        return newPost
    }),
    delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
        let deletedPost: (typeof db)[number] | undefined = undefined;
        const newPosts = db.reduce((acc, curr, i) => {
            if (i !== input.id) acc.push(curr)
            else deletedPost = curr
            return acc
        }, [] as unknown as typeof db)
        return deletedPost
    }),
});