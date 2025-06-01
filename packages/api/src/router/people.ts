import type { TRPCRouterRecord } from "@trpc/server";
import { publicProcedure } from "../trpc";

export const peopleRouter = {
    list: publicProcedure.query(() => {
      return [
            { name: 'Paco' },
            { name: "Juan" }
        ]
    }),
} satisfies TRPCRouterRecord
