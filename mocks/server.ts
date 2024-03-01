import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("http://localhost:4321/pets", () => {
    return HttpResponse.json(["Server", "Tom", "Jerry", "Spike"]);
  }),
];

export const server = setupServer(...handlers);
