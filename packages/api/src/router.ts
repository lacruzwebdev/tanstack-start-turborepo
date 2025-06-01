import { peopleRouter } from './router/people'
import { createTRPCRouter } from './trpc'

export const trpcRouter = createTRPCRouter({
  people: peopleRouter,
})

export type TRPCRouter = typeof trpcRouter
