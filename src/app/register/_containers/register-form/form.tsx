"use client";

import { useForm, getFormProps, getInputProps } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { registerAction } from "./actions";
import { createMemberInputSchema } from "./schemas";

export function RegisterForm() {
  const [lastResult, formAction, isPending] = useActionState(registerAction, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createMemberInputSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      {...getFormProps(form)}
      action={formAction}
      className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-lg font-semibold text-zinc-950">会員登録</h2>
        <p className="mt-1 text-sm text-zinc-600">
          詳細な入力制約は API の Domain 層で検証します。
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-700">名前</span>
          <input
            {...getInputProps(fields.name, { type: "text" })}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition focus:border-zinc-950"
          />
          {fields.name.errors ? (
            <p className="text-sm text-red-600">{fields.name.errors}</p>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-700">メールアドレス</span>
          <input
            {...getInputProps(fields.email, { type: "email" })}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition focus:border-zinc-950"
          />
          {fields.email.errors ? (
            <p className="text-sm text-red-600">{fields.email.errors}</p>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-700">パスワード</span>
          <input
            {...getInputProps(fields.rawPassword, { type: "password" })}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition focus:border-zinc-950"
          />
          {fields.rawPassword.errors ? (
            <p className="text-sm text-red-600">{fields.rawPassword.errors}</p>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-700">生年月日</span>
          <input
            {...getInputProps(fields.birthDate, { type: "date" })}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition focus:border-zinc-950"
          />
          {fields.birthDate.errors ? (
            <p className="text-sm text-red-600">{fields.birthDate.errors}</p>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-700">性別</span>
          <input
            {...getInputProps(fields.gender, { type: "text" })}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition focus:border-zinc-950"
          />
          {fields.gender.errors ? (
            <p className="text-sm text-red-600">{fields.gender.errors}</p>
          ) : null}
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-zinc-700">自己紹介</span>
          <input
            {...getInputProps(fields.bio, { type: "text" })}
            className="w-full rounded-2xl border border-zinc-300 px-4 py-3 text-zinc-950 outline-none transition focus:border-zinc-950"
          />
          {fields.bio.errors ? (
            <p className="text-sm text-red-600">{fields.bio.errors}</p>
          ) : null}
        </label>
      </div>

      {form.errors ? (
        <p className="text-sm text-red-600">{form.errors}</p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-2xl bg-zinc-950 px-4 py-3 font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        {isPending ? "登録中..." : "登録する"}
      </button>
    </form>
  );
}
