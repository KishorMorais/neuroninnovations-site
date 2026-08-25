import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "clientinfo_admin";

function safeCompare(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

export function validateAdminPassword(password: string) {
  const expected = process.env.CLIENTINFO_ADMIN_PASSWORD;

  if (!expected) {
    return false;
  }

  return safeCompare(password, expected);
}

export function getAdminSessionToken() {
  const password = process.env.CLIENTINFO_ADMIN_PASSWORD;
  const secret = process.env.CLIENTINFO_AUTH_SECRET;

  if (!password || !secret) {
    return null;
  }

  return createHash("sha256")
    .update(`${secret}:${password}`)
    .digest("hex");
}

export async function isAdminAuthenticated() {
  const expectedToken = getAdminSessionToken();

  if (!expectedToken) {
    return false;
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;

  if (!token) {
    return false;
  }

  return safeCompare(token, expectedToken);
}