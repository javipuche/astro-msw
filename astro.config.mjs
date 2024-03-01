import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import { server } from "./mocks/server";
import node from "@astrojs/node";

const msw = () => {
  return {
    name: "test-msw",
    hooks: {
      "astro:server:start": () => {
        if (process.env.NODE_ENV !== "development") return;
        server.listen();
      },
    },
  };
};

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [vue({ appEntrypoint: "/src/app/main" }), msw()],
  adapter: node({
    mode: "standalone",
  }),
});
