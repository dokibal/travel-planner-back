import { expect } from 'vitest';
import { AppController } from './app.controller';

describe('AppController test', () => {
  let appController: AppController;

  beforeEach(() => {
    console.log(`New app controller`);
    appController = new AppController();
  });

  it('should wakeup run successfully', () => {
    expect(() => {
      appController.wakeup();
    }).not.toThrow();
  });
});
