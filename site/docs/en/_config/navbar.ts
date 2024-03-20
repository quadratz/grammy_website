type NavbarList = {
  text: string,
  link: string,
  description?: string,
}

type NavbarGroup = {
  text: string,
  items: Array<NavbarList>
}

type NavbarMenu = {
  text: string,
  items: Array<NavbarGroup>
}

type NavbarItem = {
  text: string,
  link: string,
}

const guide: NavbarItem = {
  text: "Guide",
  link: "/guide/"
}

const learn: NavbarMenu = {
  text: "learn",
  items: [
    {
      text: "Guide",
      items: [
        {
          text: "Overview",
          link: "/guide/",
        },
        {
          text: "Introduction",
          link: "/guide/introduction",
        },
        {
          text: "Getting Started",
          link: "/guide/getting-started",
        },
        {
          text: "Sending and Receiving Messages",
          link: "/guide/basics",
        },
        {
          text: "Context",
          link: "/guide/context",
        },
        {
          text: "Bot API",
          link: "/guide/api",
        },
        {
          text: "Filter Queries and bot.on()",
          link: "/guide/filter-queries",
        },
        {
          text: "Commands",
          link: "/guide/commands",
        },
        {
          text: "Reactions",
          link: "/guide/reactions",
        },
        {
          text: "Middleware",
          link: "/guide/middleware",
        },
        {
          text: "Error Handling",
          link: "/guide/errors",
        },
        {
          text: "File Handling",
          link: "/guide/files",
        },
        {
          text: "Games",
          link: "/guide/games",
        },
        {
          text: "Long Polling vs. Webhooks",
          link: "/guide/deployment-types",
        },
      ],
    },
    {
      text: "Advanced",
      items: [
        {
          text: "Overview",
          link: "/advanced/",
        },
        {
          text: "Middleware Redux",
          link: "/advanced/middleware",
        },
        {
          text: "Scaling Up I: Large Codebase",
          link: "/advanced/structuring",
        },
        {
          text: "Scaling Up II: High Load",
          link: "/advanced/scaling",
        },
        {
          text: "Scaling Up III: Reliability",
          link: "/advanced/reliability",
        },
        {
          text: "Scaling Up IV: Flood Limits",
          link: "/advanced/flood",
        },
        {
          text: "Bot API Transformers",
          link: "/advanced/transformers",
        },
        {
          text: "Proxy Support",
          link: "/advanced/proxy",
        },
        {
          text: "Deployment Checklist",
          link: "/advanced/deployment",
        },
      ],
    },
  ],
};

export default {
  langCode: "en",
  items: [
    guide,
    learn
  ]
}