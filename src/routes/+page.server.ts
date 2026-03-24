import { strapi } from "@strapi/client";
import { STRAPI_API_TOKEN } from "$env/static/private";
import { PUBLIC_STRAPI_URL } from "$env/static/public";

const client = strapi({
  baseURL: `${PUBLIC_STRAPI_URL}/api`,
  auth: STRAPI_API_TOKEN,
});

export async function load() {
  const [hero, partnerBanner, portfolio, mission, cta] = await Promise.all([
    client.single("hero").find({
      populate: {
        primaryButtonLink: true,
        secondaryButtonLink: true,
        image1: true,
        image2: true,
        image3: true,
      },
    }),
    client.single("partner-banner").find({
      populate: {
        partnerLogos: true,
      },
    }),
    client.single("portfolio").find({
      populate: {
        portfolioVideo: {
          fields: ["title", "youtubeLink"],
          populate: {
            thumbnail: true,
          },
        },
      },
    }),
    client.single("mission").find({
      populate: {
        buttonLink: true,
        image: true,
      },
    }),
    client.single("call-to-action").find({
      populate: {
        buttonLink: true,
      },
    }),
  ]);

  return { hero, partnerBanner, portfolio, mission, cta };
}
