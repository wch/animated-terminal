import esbuild from "esbuild";
import * as fs from "fs";
import process from "process";
import * as path from "path";

let watch = false;
let minify = false;
let reactProductionMode = false;
// Set this to true to generate a metadata file that can be analyzed for size of
// modules in the bundle, like with Bundle-Buddy.
const metafile = false;

if (process.argv.some((x) => x === "--watch")) {
  watch = true;
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
    entryPoints: ["src/index.tsx"],
    outdir: `build/`,
    format: "esm",
    target: "es2020",
    minify: minify,
    metafile: metafile,
    define: {
      "process.env.NODE_ENV": reactProductionMode
        ? '"production"'
        : '"development"',
    },
    ...watchProp,
    plugins: [
      // {
      //   name: "preact-compat",
      //   setup(build) {
      //     const preact = path.join(
      //       process.cwd(),
      //       "node_modules",
      //       "preact",
      //       "compat",
      //       "dist",
      //       "compat.module.js"
      //     );
      //     build.onResolve({ filter: /^(react-dom|react)$/ }, (args) => {
      //       return { path: preact };
      //     });
      //   },
      // },
    ],
  })
  .then((result) => {
    if (metafile) {
      fs.writeFileSync("esbuild-meta.json", JSON.stringify(result.metafile));
    }
  })
  .catch(() => process.exit(1));
