import clientPromise from "../../../../../lib/mongodb";
import { countries } from "../../../../../lib/countries";
import { isAdminAuthenticated } from "../../../../../lib/adminAuth";
import type { ClientConfigDocument } from "../../../../../lib/clientConfig";

const allowedPercentages = [25, 50, 75, 100];

function validPercentage(value: unknown) {
  return (
    typeof value === "number" &&
    allowedPercentages.includes(value)
  );
}

function validKey(value: unknown) {
  return value === "nk" || value === "hk";
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return Response.json(
      {
        success: false,
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const client = await clientPromise;
  const db = client.db("neuron");

  const config = await db.collection<ClientConfigDocument>("clientconfigs")
    .findOne({ _id: "main" });

  if (!config) {
    return Response.json(
      {
        success: false,
        error: "Configuration not found",
      },
      { status: 404 }
    );
  }

  return Response.json({
    success: true,

    config: {
      nk: config.nk || "",
      hk: config.hk || "",
      global: config.global,
      overrides: config.countries || [],
      version: config.version,
      updatedAt: config.updatedAt,
    },

    countries,
  });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return Response.json(
      {
        success: false,
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (
      typeof body.nk !== "string" ||
      typeof body.hk !== "string"
    ) {
      return Response.json(
        {
          success: false,
          error: "Invalid NK/HK values",
        },
        { status: 400 }
      );
    }

    if (
      typeof body.global?.enabled !== "boolean" ||
      !validPercentage(body.global?.percentage) ||
      !validKey(body.global?.key)
    ) {
      return Response.json(
        {
          success: false,
          error: "Invalid global configuration",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("neuron");

    await db.collection<ClientConfigDocument>("clientconfigs").updateOne(
      { _id: "main" },
      {
        $set: {
          nk: body.nk,
          hk: body.hk,

          global: {
            enabled: body.global.enabled,
            percentage: body.global.percentage,
            key: body.global.key,
          },

          updatedAt: new Date(),
        },

        $inc: {
          version: 1,
        },
      }
    );

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Unable to update configuration",
      },
      { status: 500 }
    );
  }
}