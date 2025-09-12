import { Controller, Logger, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);

  @Get('/wakeup')
  wakeup(): void {
    this.logger.log('Received request to wakeup backend');
  }
}
