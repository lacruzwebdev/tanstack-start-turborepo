import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { TRPCRouter } from "./router";
import { trpcRouter } from "./router";
import { createCallerFactory, createTRPCContext } from "./trpc";

/**
 * Create a server-side caller for the tRPC API
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
const createCaller = createCallerFactory(trpcRouter);

/**
 * Inference helpers for input types
 * @example
 * type PostByIdInput = RouterInputs['post']['byId']
 *      ^? { id: number }
 **/
type RouterInputs = inferRouterInputs<TRPCRouter>;

/**
 * Inference helpers for output types
 * @example
 * type AllPostsOutput = RouterOutputs['post']['all']
 *      ^? Post[]
 **/
type RouterOutputs = inferRouterOutputs<TRPCRouter>;

export { createTRPCContext, trpcRouter, createCaller };
export type { TRPCRouter, RouterInputs, RouterOutputs };
