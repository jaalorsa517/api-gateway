import {describe, jest, beforeEach, expect, it} from "@jest/globals"
import { setupProxies } from '../src/app/proxy';
import express, { Express } from 'express';
import { ROUTES } from './route.mock';

describe('proxy', () => {
  const mockApp: Express = express()
  const expressSpy = jest.spyOn(mockApp, "use")

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería Iniciar proxy', () => {
    setupProxies(mockApp, ROUTES);
    expect(expressSpy).toHaveBeenCalledTimes(ROUTES.length)
  });

});