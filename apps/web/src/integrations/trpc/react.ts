import { createTRPCContext } from '@trpc/tanstack-react-query'
import type { TRPCRouter } from '@repo/api'

export const { TRPCProvider, useTRPC } = createTRPCContext<TRPCRouter>()
