import clientPromise from "../../../../../lib/mongodb";
import { isAdminAuthenticated } from "../../../../../lib/adminAuth";
import type { ClientConfigDocument } from "../../../../../lib/clientConfig";

export async function POST() {
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
        const client = await clientPromise;
        const db = client.db("neuron");

        await db
            .collection<ClientConfigDocument>("clientconfigs")
            .updateOne(
                { _id: "main" },
                {
                    $set: {
                        countries: [],
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
    } catch {
        return Response.json(
            {
                success: false,
                error: "Unable to apply global settings",
            },
            { status: 500 }
        );
    }
}