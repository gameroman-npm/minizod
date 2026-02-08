import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  dts: true,
  inlineOnly: ["zod"],
  minify: "dce-only",
  outputOptions: { minifyInternalExports: false },
  hash: false,
});
