import { createClient } from "@sanity/client";
import { PUBLIC_ID, PUBLIC_DATASET } from "$env/static/public";

// export default function _client() {
//   const client = createClient({
//     projectId: PUBLIC_ID,
//     dataset: PUBLIC_DATASET,
//     apiVersion: "2021-10-21",
//     useCdn: false,
//   });
//   return client;
// }

export async function load() {
  const client = createClient({
    projectId: PUBLIC_ID,
    dataset: PUBLIC_DATASET,
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const data = await client.fetch(`*[_type == "post"]{title}`);

  if (data) {
    return {
      title: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
