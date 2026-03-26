import { Hono } from "hono";
import { EmailSubmitSchema } from "../types";

const emailsRouter = new Hono();

emailsRouter.post("/emails", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json(
      { error: { message: "Invalid JSON body.", code: "INVALID_JSON" } },
      400
    );
  }

  const parsed = EmailSubmitSchema.safeParse(body);
  if (!parsed.success) {
    return c.json(
      {
        error: {
          message: parsed.error.message,
          code: "VALIDATION_ERROR",
        },
      },
      400
    );
  }

  const { email, name } = parsed.data;

  const airtableToken = process.env.AIRTABLE_TOKEN;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;

  if (!airtableToken || !airtableBaseId) {
    return c.json(
      {
        error: {
          message:
            "Airtable is not configured. Please set AIRTABLE_TOKEN and AIRTABLE_BASE_ID environment variables.",
          code: "AIRTABLE_NOT_CONFIGURED",
        },
      },
      500
    );
  }

  const airtableUrl = `https://api.airtable.com/v0/${airtableBaseId}/Emails`;

  const fields: Record<string, string> = {
    Email: email,
    "Signed Up": new Date().toISOString(),
  };

  if (name) {
    fields["Name"] = name;
  }

  let airtableRes: Response;
  try {
    airtableRes = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields }],
      }),
    });
  } catch {
    return c.json(
      {
        error: {
          message: "Failed to reach Airtable. Please try again later.",
          code: "AIRTABLE_UNREACHABLE",
        },
      },
      500
    );
  }

  if (!airtableRes.ok) {
    let detail = "";
    try {
      const errBody = (await airtableRes.json()) as {
        error?: { message?: string };
      };
      detail = errBody?.error?.message ?? "";
    } catch {
      // ignore parse errors
    }
    return c.json(
      {
        error: {
          message: `Airtable returned an error${detail ? `: ${detail}` : "."}`,
          code: "AIRTABLE_ERROR",
        },
      },
      500
    );
  }

  return c.json({ data: { success: true } });
});

export { emailsRouter };
