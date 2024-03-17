import { postRouter } from './routers/posts';
import { router } from './trpc';

export const appRouter = router({
    posts: postRouter
});

export type AppRouter = typeof appRouter;