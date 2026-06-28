import { z } from "zod";

export const memberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export const membersSchema = z.array(memberSchema);

export const authMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
});

export const loginResponseSchema = z.object({
  status: z.literal("ok"),
  member: authMemberSchema,
});

export type Member = z.infer<typeof memberSchema>;
export type AuthMember = z.infer<typeof authMemberSchema>;
