import { strapi } from "@strapi/client";
import { STRAPI_API_TOKEN } from "$env/static/private";
import { PUBLIC_STRAPI_URL } from "$env/static/public";

const client = strapi({
  baseURL: `${PUBLIC_STRAPI_URL}/api`,
  auth: STRAPI_API_TOKEN,
});

export async function load() {
  const [global, header, footer, requestForm] = await Promise.all([
    client.single("global").find({
      populate: {
        favicon: true,
      },
    }),
    client.single("header").find({
      populate: {
        logo: true,
        navigationLinks: true,
      },
    }),
    client.single("footer").find({
      populate: {
        socialLinks: true,
      },
    }),
    client.single("request-form").find(),
  ]);

  return { global, header, footer, requestForm };
}
