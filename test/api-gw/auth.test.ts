import { authSession } from '../../src/api-gw/auth';
import express, { Express } from 'express';
import { ROUTES } from './route.mock';

describe('authSession', () => {
  const mockApp: Express = express()
  const expressSpy = jest.spyOn(mockApp, "use")
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería Iniciar auth', () => {
    authSession(mockApp, ROUTES);
    expect(expressSpy).toHaveBeenCalledTimes(ROUTES.length)
  });

});