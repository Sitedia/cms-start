import { Options } from "./options.interface.js";

/* istanbul ignore next */
export const options = (): Options => ({
  backend: {
    port: Number.parseInt(process.env.PORT ?? "3000", 10),
    basePath: process.env.APP_BASE_PATH ?? "api",
  },
});
