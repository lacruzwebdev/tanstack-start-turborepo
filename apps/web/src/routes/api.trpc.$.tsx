import { createAPIFileRoute } from '@tanstack/react-start/api'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { createTRPCContext, trpcRouter } from '@repo/api'

function handler({ request }: { request: Request }) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    router: trpcRouter,
    req: request,
    createContext: () =>
      createTRPCContext({
        session: null,
        headers: request.headers,
      }),
    onError({ error, path }) {
      console.error(`>>> tRPC Error on '${path}'`, error);
    },
  })
}

export const APIRoute = createAPIFileRoute('/api/trpc/$')({
  GET: handler,
  POST: handler,
})
