import type { App } from "vue";

export default async (app: App) => {
  if (!import.meta.env.SSR && process.env.NODE_ENV === "development") {
    const { worker } = await import("../../mocks/browser");
    await worker.start();
  }
};
