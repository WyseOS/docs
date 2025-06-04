import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { openapi } from "@/lib/source";
import { APIPage } from "fumadocs-openapi/ui";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    APIPage: (props) => {
      console.log("props", props);
      return <APIPage {...openapi.getAPIPageProps(props)} />;
    },
    ...components,
  };
}
