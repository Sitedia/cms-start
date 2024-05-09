export interface BackendModuleOptions {
  port: number;
  basePath: string;
}

export interface Options {
  backend: BackendModuleOptions;
}
