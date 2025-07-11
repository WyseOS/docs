import * as OpenAPI from "fumadocs-openapi";
import { rimraf } from "rimraf";

const out = "./content/(api)";

async function generate() {
  // clean generated files
  await rimraf(out, {
    filter(v) {
      return !v.endsWith("index.mdx") && !v.endsWith("meta.json");
    },
  });

  await OpenAPI.generateFiles({
    // input files
    per: "tag",
    groupBy: "tag",
    input: ["./wyse.json"],
    output: out,
  });
}

void generate();
