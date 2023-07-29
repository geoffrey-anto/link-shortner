import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const linkRouter = router({
  "get-link": publicProcedure
    .input(
      z.object({
        slug: z
          .string({
            description: "Please Enter Valid Slug (Min 6 - Max 12)",
          })
          .min(6)
          .max(12),
      })
    )
    .query(async ({ ctx: { prisma }, input: { slug } }) => {
      const res = await prisma.link.findFirst({
        where: {
          slug,
        },
      });

      if (!res) {
        throw new TRPCError({
          message: "No Url Found",
          code: "NOT_FOUND",
        });
      }

      const { ref } = res;

      return ref;
    }),
  "create-link": publicProcedure
    .input(
      z.object({
        slug: z
          .string({
            description: "Please Enter Valid Slug (Min 6 - Max 12)",
          })
          .min(6)
          .max(12),
        ref: z
          .string({
            description: "Please Enter A Valid Url",
          })
          .url(),
      })
    )
    .mutation(async ({ ctx, input: { ref, slug } }) => {
      const isLinkPresent = await ctx.prisma.link.findFirst({
        where: {
          slug,
        },
      });

      if (isLinkPresent) {
        return {
          success: false,
          data: isLinkPresent,
          message: "Slug Already Present!",
        };
      }

      const link = await ctx.prisma.link.create({
        data: {
          ref,
          slug,
        },
      });

      return {
        data: link,
        message: "Created Successfully!",
        success: true,
      };
    }),
});
