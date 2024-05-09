import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { BackendModuleOptions } from './options.interface.js';

export const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  // Configuration the Nest application
  const options = app.get(ConfigService).getOrThrow<BackendModuleOptions>('backend');
  app.setGlobalPrefix(options.basePath);

  // Configure Swagger
  const config = new DocumentBuilder().setTitle('CMS API').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(options.basePath, app, document);

  await app.listen(3000);
};
