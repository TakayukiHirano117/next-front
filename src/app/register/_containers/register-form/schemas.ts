import { z } from "zod";

export const createMemberInputSchema = z.object({
  name: z.string().trim().min(1, "名前を入力してください。"),
  email: z.string().trim().min(1, "メールアドレスを入力してください。"),
  rawPassword: z.string().min(1, "パスワードを入力してください。"),
  bio: z.string(),
  gender: z.string(),
  birthDate: z.string(),
});

export type CreateMemberInput = z.infer<typeof createMemberInputSchema>;
