import { defineConfig } from "tsdown";

export default defineConfig({
  exports: true,
  dts: true,
  deps: { onlyBundle: ["zod"] },
  minify: "dce-only",
  outputOptions: { minifyInternalExports: false },
  hash: false,
  inputOptions: { experimental: { attachDebugInfo: "none" } },
});
