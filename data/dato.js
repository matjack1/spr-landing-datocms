import { GraphQLClient } from "graphql-request";

export default async function getData() {
  const client = new GraphQLClient('https://graphql.datocms.com/', {
    headers: {
      Authorization: process.env.DATO_API_TOKEN,
    },
  })

  const query = `{
    landing {
      title
      subtitle
      color {
        hex
      }
      seoMeta {
        title
        description
      }
      heroImage {
        url
      }
      content {
        title
        text
        image {
          url
        }
      }
    }
  }`;

  return (await client.request(query)).landing;
}