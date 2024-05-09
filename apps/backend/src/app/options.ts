import { Options } from './options.interface.js';

/* istanbul ignore next */
export const options = (): Options => ({
  backend: {
    port: Number.parseInt(process.env.PORT ?? '3000', 10),
    basePath: process.env.APP_BASE_PATH ?? 'api',
    corsOrigin: process.env.APP_CORS_ORIGIN ?? 'http://localhost:3000',
  },
  throttler: [
    {
      ttl: Number.parseInt(process.env.APP_THROTTLER_TTL ?? '1000', 10),
      limit: Number.parseInt(process.env.APP_THROTTLER_LIMIT ?? '100', 10),
    },
  ],
});
