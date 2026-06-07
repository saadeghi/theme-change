import { build } from "esbuild";
import { copyFileSync } from "fs";

const entries = [
  { entry: "src/index.js", out: "index.js" },
  { entry: "src/toggle.js", out: "toggle.js" },
  { entry: "src/btn.js", out: "btn.js" },
  { entry: "src/select.js", out: "select.js" },
];

await Promise.all(
  entries.map(({ entry, out }) =>
    build({
      entryPoints: [entry],
      bundle: true,
      format: "esm",
      minify: true,
      outfile: out,
      target: ["es2020"],
    }),
  ),
);

copyFileSync("src/index.d.ts", "index.d.ts");

console.log("Build complete");
