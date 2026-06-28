import { cookies } from "next/headers";

type SameSite = "strict" | "lax" | "none";

type ParsedSetCookie = {
  name: string;
  value: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: SameSite;
  expires?: Date;
  path?: string;
};

export async function getRequestCookieHeader() {
  return (await cookies()).toString();
}

export async function getSessionId() {
  return (await cookies()).get("session_id")?.value;
}

export async function getMemberId() {
  return (await cookies()).get("member_id")?.value;
}

export async function applySetCookieHeader(setCookieHeader: string | null) {
  if (!setCookieHeader) {
    return;
  }

  const parsedCookie = parseSetCookie(setCookieHeader);
  if (!parsedCookie) {
    return;
  }

  const cookieStore = await cookies();
  cookieStore.set(parsedCookie.name, parsedCookie.value, {
    httpOnly: parsedCookie.httpOnly,
    secure: parsedCookie.secure,
    sameSite: parsedCookie.sameSite,
    expires: parsedCookie.expires,
    path: parsedCookie.path,
  });
}

export async function setMemberIdCookie(memberId: string) {
  (await cookies()).set("member_id", memberId, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("session_id");
  cookieStore.delete("member_id");
}

function parseSetCookie(setCookieHeader: string): ParsedSetCookie | null {
  const [nameValue, ...attributes] = setCookieHeader.split(";").map((part) => part.trim());
  const separatorIndex = nameValue.indexOf("=");

  if (separatorIndex <= 0) {
    return null;
  }

  const parsedCookie: ParsedSetCookie = {
    name: nameValue.slice(0, separatorIndex),
    value: nameValue.slice(separatorIndex + 1),
  };

  for (const attribute of attributes) {
    const [rawKey, ...rawValueParts] = attribute.split("=");
    const key = rawKey.toLowerCase();
    const value = rawValueParts.join("=");

    if (key === "httponly") {
      parsedCookie.httpOnly = true;
      continue;
    }

    if (key === "secure") {
      parsedCookie.secure = true;
      continue;
    }

    if (key === "path") {
      parsedCookie.path = value;
      continue;
    }

    if (key === "expires") {
      parsedCookie.expires = new Date(value);
      continue;
    }

    if (key === "samesite" && isSameSite(value)) {
      parsedCookie.sameSite = value.toLowerCase() as SameSite;
    }
  }

  return parsedCookie;
}

function isSameSite(value: string): value is "Strict" | "Lax" | "None" {
  return ["strict", "lax", "none"].includes(value.toLowerCase());
}
