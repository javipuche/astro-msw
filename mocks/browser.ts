import { setupWorker } from "msw/browser";
import { delay, http, HttpResponse } from "msw";

const handlers = [
  http.get("http://localhost:4321/pets", async () => {
    await delay(1000);
    return HttpResponse.json(["Client", "Tom", "Jerry", "Spike"]);
  }),
];

export const worker = setupWorker(...handlers);
