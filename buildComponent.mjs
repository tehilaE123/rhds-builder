import esbuild from "esbuild";
import fs from "fs";

async function bundleComponents() {
  try {
    const result = await esbuild.build({
      entryPoints: ["components-entry.js"],
      bundle: true,
      format: "esm",
      target: "es2022",
      sourcemap: "inline",
      write: false,
      minify: true,
      loader: { ".css": "text" },
      external: [],
      // external: ["react", "@lit/react", "@rhds/elements/react/*"],

      allowOverwrite: true,
      logLevel: "info",
    });

    const bundledCode = result.outputFiles[0].text;

    // Write to file for Jinja to read
    fs.writeFileSync("dist/components-bundle.js", bundledCode);
    console.log("✅ Components bundled successfully");
  } catch (error) {
    console.error("❌ Bundle failed:", error);
  }
}

bundleComponents();
