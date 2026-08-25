import { cookies } from "next/headers";
import {
  ADMIN_COOKIE,
  getAdminSessionToken,
  validateAdminPassword,
} from "../../../../../lib/adminAuth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const password =
      typeof body.password === "string"
        ? body.password
        : "";

    if (!validateAdminPassword(password)) {
      return Response.json(
        {
          success: false,
          error: "Invalid password",
        },
        { status: 401 }
      );
    }

    const token = getAdminSessionToken();

    if (!token) {
      return Response.json(
        {
          success: false,
          error: "Authentication is not configured",
        },
        { status: 500 }
      );
    }

    const cookieStore = await cookies();

    cookieStore.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/clientinfo",
      maxAge: 60 * 60 * 12,
    });

    return Response.json({
      success: true,
    });
  } catch {
    return Response.json(
      {
        success: false,
        error: "Unable to login",
      },
      { status: 500 }
    );
  }
}