import { router } from "../trpc";
import { linkRouter } from "./link";

export const appRouter = router({
  link: linkRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
