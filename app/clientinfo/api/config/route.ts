import clientPromise from "../../../../lib/mongodb";
import type { ClientConfigDocument } from "../../../../lib/clientConfig";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    /*
     * Production:
     * Vercel automatically provides x-vercel-ip-country.
     *
     * Development:
     * We use DEV_COUNTRY from .env.local.
     */

    const vercelCountry = request.headers
      .get("x-vercel-ip-country")
      ?.toUpperCase();

    const developmentCountry =
      process.env.NODE_ENV !== "production"
        ? process.env.DEV_COUNTRY?.toUpperCase()
        : undefined;

    const country = vercelCountry || developmentCountry || "ZZ";

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
          error: "Configuration not initialized",
        },
        {
          status: 503,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    /*
     * Look for an individual country configuration.
     */
    const countryConfig = config.countries.find(
      (item:any) => item.code.toUpperCase() === country
    );

    /*
     * If:
     *
     * - country doesn't exist
     * OR
     * - country is configured to use global
     *
     * then global settings are used.
     */
    const effectiveConfig =
      countryConfig && !countryConfig.useGlobal
        ? countryConfig
        : config.global;

    /*
     * Choose NK or HK.
     */
    const selectedValue =
      effectiveConfig.key === "nk"
        ? config.nk
        : config.hk;

    return Response.json(
      {
        success: true,

        country,

        ads: {
          enabled: effectiveConfig.enabled,
          percentage: effectiveConfig.percentage,
        },

        route: {
          key: effectiveConfig.key,
          value: selectedValue || null,
        },

        source:
          countryConfig && !countryConfig.useGlobal
            ? "country"
            : "global",

        version: config.version,

        updatedAt: config.updatedAt,
      },
      {
        status: 200,

        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Client config API error:", error);

    return Response.json(
      {
        success: false,
        error: "Unable to retrieve configuration",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}