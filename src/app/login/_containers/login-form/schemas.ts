import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.string().trim().min(1, "メールアドレスを入力してください。"),
  password: z.string().min(1, "パスワードを入力してください。"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
