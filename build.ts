import esbuild from "esbuild";
import fs from "fs";
import process from "process";

let watch = false;
let serve = false;
let minify = false;
let reactProductionMode = false;
// Set this to true to generate a metadata file that can be analyzed for size of
// modules in the bundle, like with Bundle-Buddy.
const metafile = false;

if (process.argv.some((x) => x === "--watch")) {
  watch = true;
}
if (process.argv.some((x) => x === "--serve")) {
  watch = true;
  serve = true;
}
if (process.argv.some((x) => x === "--prod")) {
  minify = true;
  reactProductionMode = true;
}

const onRebuild = (
  error: esbuild.BuildFailure | null,
  result: esbuild.BuildResult | null
): void => {
  console.log(
    `[${new Date().toISOString()}]` +
      (error ? error : " Rebuilding JS files...")
  );
};

let watchProp = {};
if (watch) {
  watchProp = { watch: { onRebuild } };
}

esbuild
  .build({
    logLevel: "info",
    bundle: true,
    entryPoints: [
      // "src/App.tsx",
      "src/AnimatedTerminal.tsx",
    ],
    outdir: `build/`,
    format: "esm",
    target: "es2020",
    minify: minify,
    outExtension: minify ? { ".js": ".min.js", ".css": ".min.css" } : {},
    metafile: metafile,
    preserveSymlinks: true,
    define: {
      "process.env.NODE_ENV": reactProductionMode
        ? '"production"'
        : '"development"',
    },
    ...watchProp,
  })
  .then((result) => {
    if (metafile) {
      fs.writeFileSync("esbuild-meta.json", JSON.stringify(result.metafile));
    }
  })
  .catch(() => process.exit(1));

if (serve) {
  esbuild.serve({ servedir: "build/", port: 3002 }, {});
}
