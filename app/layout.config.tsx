import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/app/logo";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
  },
  githubUrl: "https://github.com/WyseOS",
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
      on: "menu",
    },
  ],
};
