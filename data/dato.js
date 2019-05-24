const SiteClient = require('datocms-client').SiteClient;

export default async function getData() {
  const client = new SiteClient(process.env.DATO_API_TOKEN);
  let landing = (await client.items.all())[0];

  landing.heroImage = await client.uploads.find(landing.heroImage);

  const sectionIds = landing.content;
  landing.content = [];
  for(let i=0; i<sectionIds.length; i++) {
    let content = await client.items.find(sectionIds[i]);
    if(content.image) {
      content.image = await client.uploads.find(content.image);
    }
    landing.content.push(content);
  }

  return landing;
}
