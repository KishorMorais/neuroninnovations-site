import { cookies } from "next/headers";
import { ADMIN_COOKIE } from "../../../../../lib/adminAuth";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/clientinfo",
    maxAge: 0,
  });

  return Response.json({
    success: true,
  });
}