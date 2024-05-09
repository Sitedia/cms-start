import { INestApplication } from '@nestjs/common';
import { HttpsOptions } from '@nestjs/common/interfaces/external/https-options.interface.js';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module.js';
import { BackendModuleOptions } from './options.interface.js';

export const bootstrap = async (): Promise<INestApplication> => {
  let httpsOptions: HttpsOptions | undefined;
  if (process.env.APP_TLS_CERTIFICATE) {
    httpsOptions = {
      cert: process.env.APP_TLS_CERTIFICATE.replaceAll('\\n', '\n'),
      key: process.env.APP_TLS_KEY?.replaceAll('\\n', '\n'),
    };
  }

  const app = await NestFactory.create(AppModule, {
    logger: [process.env.NODE_ENV === 'test' ? 'fatal' : 'debug'],
    httpsOptions,
  });

  // Configuration the Nest application
  const options = app.get(ConfigService).getOrThrow<BackendModuleOptions>('backend');
  app.setGlobalPrefix(options.basePath);
  app.use(helmet());
  app.enableCors({ origin: options.corsOrigin });
  app.enableShutdownHooks();

  // Configure Swagger
  const config = new DocumentBuilder().setTitle('CMS API').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(options.basePath, app, document);

  await app.listen(options.port);

  return app;
};
