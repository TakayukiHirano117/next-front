import { z } from "zod";

export const okResponseSchema = z.object({
  status: z.literal("ok"),
});

export const apiErrorResponseSchema = z.object({
  success: z.literal(false).optional(),
  error: z.string().optional(),
  message: z.string(),
  details: z.unknown().optional(),
});

export type OkResponse = z.infer<typeof okResponseSchema>;
