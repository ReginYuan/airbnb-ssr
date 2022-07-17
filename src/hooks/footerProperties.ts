import { reactive } from "vue";

export default function footerProperties() {
  const footerMenu = reactive([
    {
      title: "airbnb",
      menus: [
        {
          name: "careers",
          link: "https://careers.airbnb.com/",
        },
        {
          name: "news",
          link: "https://news.airbnb.com/zh/",
        },
        {
          name: "topic",
          link: "https://www.airbnb.cn/help/feature/2/%E6%B3%95%E5%BE%8B%E6%9D%A1%E6%AC%BE",
        },
        {
          name: "diversity",
          link: "https://www.airbnb.cn/accessibility",
        },
        {
          name: "accessibility",
          link: "https://www.airbnb.cn/accessibility",
        },
      ],
    },
    {
      title: "discovery",
      menus: [
        {
          name: "trustAndSafe",
          link: "https://www.airbnb.cn/trust",
        },
        {
          name: "invite",
          link: "https://www.airbnb.cn/invite?r=6",
        },
        {
          name: "evection",
          link: "https://www.airbnb.cn/work?s=footer",
        },
        {
          name: "magzine",
          link: "https://zh.airbnb.com/",
        },
        {
          name: "airbnborg",
          link: "https://Airbnb.org/",
        },
      ],
    },
    {
      title: "rent",
      menus: [
        {
          name: "whyRent",
          link: "https://www.airbnb.cn/host/homes?from_footer=1",
        },
        {
          name: "hospitality",
          link: "https://www.airbnb.cn/hospitality",
        },
        {
          name: "responsibleHosting",
          link: "https://www.airbnb.cn/help/article/1396",
        },
        {
          name: "experiences",
          link: "https://www.airbnb.cn/host/experiences?from_footer=1",
        },
      ],
    },
    {
      title: "service",
      menus: [
        {
          name: "help",
          link: "https://www.airbnb.cn/help?from=footer&audience=guest",
        },
        {
          name: "neighbors",
          link: "https://www.airbnb.cn/neighbors",
        },
      ],
    },
  ]);

  return {
    footerMenu
  }
}