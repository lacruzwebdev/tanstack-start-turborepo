import { trpcRouter as router } from '@repo/api'


/* export const trpcRouter = createTRPCRouter({
  people: peopleRouter,
}) */

export const trpcRouter = router
export type TRPCRouter = typeof trpcRouter
