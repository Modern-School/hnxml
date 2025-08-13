import packageJson from "../package.json" with { type: "json" };
import denoJson from "../deno.json" with { type: "json" };

Deno.writeTextFileSync(
  "./deno.json",
  Deno.readTextFileSync("./deno.json").replace(
    `"version": "${denoJson.version}"`,
    `"version": "${packageJson.version}"`,
  ),
);
