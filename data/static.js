export default function getData() {
  return {
    seoMeta: {
      title: "Serverless Pre-Rendering",
      description: "This is the description that will show up in search engines",
    },
    color: {
      hex: "#49fcd4"
    },
    title: "My SPR site",
    subtitle: "A static page, with a static file as backend",
    heroImage: {
      url: "https://www.datocms-assets.com/12121/1558704929-image-js.jpeg"
    },
    content: [
      {
        title: "Serverless Pre-Rendering",
        text: "This is an example landing page whose content is stored and edited via a static file. Yet all responses are instant, served from our edge cache.\n\nWhen you refresh this page, it feels like it's a **static website**.",
        image: {
          url: "https://www.datocms-assets.com/12121/1558704971-image-js2.jpeg"
        }
      },
      {
        title: "Static meets Dynamic",
        text: "Statically generated websites are fast, **but they take a long time to build**, are hard to iterate on, and don't scale beyond a few pages.\n\nServerless Pre-Rendering _ensures_:\n\n- **Instant page loads** 🔥. No matter how fast or slow your backend or datasources\n- **Fault tolerance**. By default, backend errors don't invalidate the pre-generated copy\n- **Realtime updates**. Updates can be triggered as frequently as every second. Say goodbye to slow page rebuilds!\n- **Cost effectiveness**. We only issue one request to your backend functions, while serving it **millions of times a second**.\n- **Great for SEO**. Solutions involving client-heavy stacks delay Google's crawling by up to two weeks. Serverless pre-rendering fixes that.",
        image: {
          url: "https://www.datocms-assets.com/12121/1558705087-image-js3.jpeg"
        }
      },
      {
        title: "Use-cases",
        text: "The benefits of **serverless pre-rendering** impact your ability to **iterate on content**, by leveraging databases and headless CMS solutions. _They make your business and your page loads run faster_.\n\n- **Marketing pages**. Such as the pages explaining a new product or service.\n- **E-commerce websites**. With lots of items, categories, user reviews, etc.\n- **Blogs and Newspapers**. With multiple users editing stories in realtime and breaking news.\n- **High-traffic APIs**. Where computation is debounced in order to minimize load.\n- **Mission-critical dashboards**. Where lots of dynamic is consumed by many users.",
      }
    ]
  };
}