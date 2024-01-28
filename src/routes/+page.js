import { createClient } from "@sanity/client";
import { PUBLIC_ID, PUBLIC_DATASET } from "$env/static/public";

const client = createClient({
  projectId: PUBLIC_ID,
  dataset: PUBLIC_DATASET,
  apiVersion: "2021-10-21",
  useCdn: false,
});

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "post"]`);

  if (data) {
    return {
      post: data,
      client: client,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
