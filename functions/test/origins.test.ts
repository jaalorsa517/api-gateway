import {describe, jest, it, beforeEach, expect} from "@jest/globals"
import express, { Express } from 'express';
import { originsSetup } from '../src/app/origins';

describe('Origins', () => {
  const mockApp: Express = express()
  const expressSpy = jest.spyOn(mockApp, "use")

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería Iniciar origins_cors', () => {
    originsSetup(mockApp);
    expect(expressSpy).toHaveBeenCalledTimes(4)
  });

});