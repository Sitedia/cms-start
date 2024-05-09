import { ThrottlerModuleOptions } from '@nestjs/throttler';

export interface BackendModuleOptions {
  port: number;
  basePath: string;
  corsOrigin: string;
}

export interface Options {
  backend: BackendModuleOptions;
  throttler: ThrottlerModuleOptions;
}
