import clientPromise from "../../../../../../lib/mongodb";
import { countries } from "../../../../../../lib/countries";
import { isAdminAuthenticated } from "../../../../../../lib/adminAuth";
import type { ClientConfigDocument } from "../../../../../../lib/clientConfig";

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

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{
      code: string;
    }>;
  }
) {
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
    const params = await context.params;
    const code = params.code.toUpperCase();

    const country = countries.find(
      (item) => item.code === code
    );

    if (!country) {
      return Response.json(
        {
          success: false,
          error: "Invalid country",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("neuron");

    const collection =
      db.collection<ClientConfigDocument>("clientconfigs");

    const config = await collection.findOne({
      _id: "main",
    });

    if (!config) {
      return Response.json(
        {
          success: false,
          error: "Configuration not found",
        },
        { status: 404 }
      );
    }

    const currentCountries =
      Array.isArray(config.countries)
        ? config.countries
        : [];

    /*
     * Reset to Global:
     * remove the country override entirely.
     */
    if (body.useGlobal === true) {
      const updatedCountries =
        currentCountries.filter(
          (item: any) => item.code !== code
        );

      await collection.updateOne(
        { _id: "main" },
        {
          $set: {
            countries: updatedCountries,
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
    }

    if (
      typeof body.enabled !== "boolean" ||
      !validPercentage(body.percentage) ||
      !validKey(body.key)
    ) {
      return Response.json(
        {
          success: false,
          error: "Invalid country configuration",
        },
        { status: 400 }
      );
    }

    const override = {
      name: country.name,
      code: country.code,
      useGlobal: false,

      enabled: body.enabled,
      percentage: body.percentage,
      key: body.key,
    };

    const withoutCurrent =
      currentCountries.filter(
        (item: any) => item.code !== code
      );

    const updatedCountries = [
      ...withoutCurrent,
      override,
    ];

    await collection.updateOne(
      { _id: "main" },
      {
        $set: {
          countries: updatedCountries,
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
        error: "Unable to update country",
      },
      { status: 500 }
    );
  }
}