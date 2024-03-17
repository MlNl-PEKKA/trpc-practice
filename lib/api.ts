import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/api/root';
const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
        }),
    ],
});

export default trpc;