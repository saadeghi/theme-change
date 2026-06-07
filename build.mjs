import { build } from "esbuild";
import { copyFileSync } from "fs";

const entries = [
  { entry: "src/index.js", base: "index", globalName: "__tc" },
  { entry: "src/toggle.js", base: "toggle", globalName: "__tcToggle" },
  { entry: "src/btn.js", base: "btn", globalName: "__tcBtn" },
  { entry: "src/select.js", base: "select", globalName: "__tcSelect" },
];

await Promise.all(
  entries.flatMap(({ entry, base, globalName }) => [
    build({
      entryPoints: [entry],
      bundle: true,
      format: "esm",
      minify: true,
      outfile: `${base}.mjs`,
      target: ["es2020"],
    }),
    build({
      entryPoints: [entry],
      bundle: true,
      format: "iife",
      globalName,
      minify: true,
      outfile: `${base}.js`,
      target: ["es2020"],
      footer:
        base === "index"
          ? {
              js: "if(typeof window!=='undefined'){__tc.themeChange()}",
            }
          : undefined,
    }),
  ]),
);

copyFileSync("src/index.d.ts", "index.d.ts");

console.log("Build complete");
