import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
//
