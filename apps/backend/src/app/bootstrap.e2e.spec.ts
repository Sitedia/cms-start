import { describe, expect, it } from '@jest/globals';
import { HttpStatus } from '@nestjs/common';
import * as http from 'node:http';
import * as request from 'supertest';
import { bootstrap } from './bootstrap.js';

describe('nestjs application', () => {
  it('should start the application', async () => {
    expect.assertions(1);
    const app = await bootstrap();
    const httpServer = app.getHttpServer() as http.Server;

    // Liveness
    const livenessResponse = await request.agent(httpServer).get('/api/probes/liveness');
    expect(livenessResponse.statusCode).toBe(HttpStatus.OK);

    await app.close();
  });
});
