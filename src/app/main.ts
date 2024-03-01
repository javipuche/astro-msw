import type { App } from "vue";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;
  const { worker } = await import("../../mocks/browser");
  return worker.start();
}

export default async (app: App) => {
  if (typeof window !== "undefined") {
    await enableMocking();
  }
};
