import { setupLoggin } from '../../src/api-gw/logging';
import express , { Express } from 'express';

describe('logging', () => {
  const mockApp: Express = express()
    const expressSpy = jest.spyOn(mockApp, "use")
    beforeEach(() => {
        jest.clearAllMocks();
    });

  it('debería Iniciar logging', () => {
    setupLoggin(mockApp);
    expect(expressSpy).toHaveBeenCalled()
  });

});