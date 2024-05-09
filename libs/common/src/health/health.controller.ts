import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('probes')
@Controller('probes')
export class HealthController {
  constructor(private readonly logger: Logger) {}

  @Get('liveness')
  liveness() {
    this.logger.debug('Status is OK');
    return { status: 'OK' };
  }

  @Get('readiness')
  readiness() {
    this.logger.debug('Status is OK');
    return { status: 'OK' };
  }
}
