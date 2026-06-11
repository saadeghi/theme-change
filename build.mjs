import { build } from "esbuild";
import { copyFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const entries = [
  { entry: "src/index.js", base: "index", globalName: "__tc" },
  { entry: "src/toggle.js", base: "toggle", globalName: "__tcToggle" },
  { entry: "src/btn.js", base: "btn", globalName: "__tcBtn" },
  { entry: "src/select.js", base: "select", globalName: "__tcSelect" },
];

await Promise.all(
  entries.flatMap(({ entry, base, globalName }) => [
    build({
      entryPoints: [resolve(rootDir, entry)],
      bundle: true,
      format: "esm",
      minify: true,
      outfile: resolve(rootDir, `${base}.mjs`),
      target: ["es2020"],
    }),
    build({
      entryPoints: [resolve(rootDir, entry)],
      bundle: true,
      format: "iife",
      globalName,
      minify: true,
      outfile: resolve(rootDir, `${base}.js`),
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

const declarations = ["index", "btn", "select", "toggle"];
for (const name of declarations) {
  copyFileSync(
    resolve(rootDir, `src/${name}.d.ts`),
    resolve(rootDir, `${name}.d.ts`),
  );
}

console.log("Build complete");
