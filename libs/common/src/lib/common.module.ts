import { Logger, Module } from '@nestjs/common';
import { HealthController } from '../health/health.controller.js';

@Module({ controllers: [HealthController], providers: [Logger] })
export class CommonModule {}
