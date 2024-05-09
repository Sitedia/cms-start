import { CommonModule } from '#libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { options } from './options.js';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [options], isGlobal: true }),
    ThrottlerModule.forRootAsync({
      useFactory: (config: ConfigService) => config.getOrThrow('throttler'),
      inject: [ConfigService],
    }),
    CommonModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
