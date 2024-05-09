import { describe, expect, it } from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { CommonModule } from '../common.module.js';
import { HealthController } from './health.controller.js';

const setup = async () => {
  const app: TestingModule = await Test.createTestingModule({ imports: [CommonModule] }).compile();
  return app.get(HealthController);
};

describe('health endpoint', () => {
  it('should return the liveness status', async () => {
    expect.assertions(1);
    const healthController = await setup();

    expect(healthController.liveness().status).toBe('OK');
  });

  it('should return the readiness status', async () => {
    expect.assertions(1);
    const healthController = await setup();

    expect(healthController.readiness().status).toBe('OK');
  });
});
