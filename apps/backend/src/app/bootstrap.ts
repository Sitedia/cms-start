import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";

export const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};
