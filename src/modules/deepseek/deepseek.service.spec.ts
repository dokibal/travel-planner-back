import { ConfigService } from '@nestjs/config';
import { DeepSeekService } from './deepseek.service';

describe('DeepSeek Service', () => {
  let configServiceMock: ConfigService;
  let deepSeekService: DeepSeekService;

  beforeEach(() => {
    configServiceMock = {
      get: vi
        .fn()
        .mockImplementationOnce(() => {
          return 'TEST BASE URL';
        })
        .mockImplementationOnce(() => {
          return 'TEST API KEY';
        }),
    } as unknown as ConfigService;
    deepSeekService = new DeepSeekService(configServiceMock);
  });

  it('should create DeepSeekService', () => {
    expect(deepSeekService).toBeInstanceOf(DeepSeekService);
  });
});
