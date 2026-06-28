"use client";

import { useForm, getFormProps, getInputProps } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { UiStoreProvider, useUiStore } from "@/shared/store/ui-store-provider";
import { loginAction } from "./actions";
import { loginInputSchema } from "./schemas";

const inputClassName =
  "w-full rounded-2xl border border-app-border bg-white px-4 py-3.5 text-base text-app-text outline-none transition focus:border-app-primary focus:ring-2 focus:ring-app-primary/25";

function LoginFormFields() {
  const [lastResult, formAction, isPending] = useActionState(loginAction, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginInputSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const isPasswordVisible = useUiStore((store) => store.isPasswordVisible);
  const togglePasswordVisibility = useUiStore(
    (store) => store.togglePasswordVisibility,
  );

  return (
    <form
      {...getFormProps(form)}
      action={formAction}
      className="space-y-5 rounded-3xl border border-app-border bg-app-surface/90 p-6 shadow-[0_8px_32px_rgba(244,169,143,0.15)] backdrop-blur-sm"
    >
      <div>
        <h2 className="text-lg font-bold text-app-text">ログイン</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-app-text-muted">
          登録したメールアドレスとパスワードを入力してください
        </p>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-app-text">メールアドレス</span>
        <input
          {...getInputProps(fields.email, { type: "email" })}
          autoComplete="email"
          className={inputClassName}
        />
        {fields.email.errors ? (
          <p className="text-sm text-app-error">{fields.email.errors}</p>
        ) : null}
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-app-text">パスワード</span>
        <div className="flex overflow-hidden rounded-2xl border border-app-border bg-white focus-within:border-app-primary focus-within:ring-2 focus-within:ring-app-primary/25">
          <input
            {...getInputProps(fields.password, {
              type: isPasswordVisible ? "text" : "password",
            })}
            autoComplete="current-password"
            className="min-h-11 min-w-0 flex-1 px-4 py-3.5 text-base text-app-text outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="flex min-h-11 min-w-11 items-center justify-center px-3 text-xs font-medium text-app-text-muted"
          >
            {isPasswordVisible ? "隠す" : "表示"}
          </button>
        </div>
        {fields.password.errors ? (
          <p className="text-sm text-app-error">{fields.password.errors}</p>
        ) : null}
      </label>

      {form.errors ? (
        <p className="rounded-xl bg-app-error/10 px-3 py-2 text-sm text-app-error">
          {form.errors}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="min-h-12 w-full rounded-2xl bg-app-primary px-4 py-3.5 text-base font-bold text-app-primary-foreground transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "ログイン中..." : "ログインする"}
      </button>
    </form>
  );
}

export function LoginForm() {
  return (
    <UiStoreProvider>
      <LoginFormFields />
    </UiStoreProvider>
  );
}
