import { helloRouter } from './routers/helloRouter';
import { router } from './trpc';

const appRouter = router({
    hello: helloRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;