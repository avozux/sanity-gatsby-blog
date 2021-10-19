export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616ee69cb5b318311737d17b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-48yj7qi2",
                  apiId: "28319584-7f27-40c2-8202-71f69f832931",
                },
                {
                  buildHookId: "616ee69cea9a152dc56b97ae",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-67mhmsxe",
                  apiId: "3a8b7074-dd04-4de5-a4b3-15773b4471c3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/avozux/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-67mhmsxe.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
