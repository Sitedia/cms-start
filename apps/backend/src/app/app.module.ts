import { CommonModule } from '#libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { options } from './options.js';

@Module({
  imports: [ConfigModule.forRoot({ load: [options], isGlobal: true }), CommonModule],
})
export class AppModule {}
