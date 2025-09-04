import { Module } from '@nestjs/common';
import { DeepSeekService } from './deepseek.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    providers: [DeepSeekService],
    imports: [ConfigModule],
    exports: [DeepSeekService]
})
export class DeepSeekModule { }
