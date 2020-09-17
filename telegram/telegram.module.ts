import { Module } from '@nestjs/common';
import { SuccessrateModule } from 'src/successrate/successrate.module';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';

@Module({
  imports: [SuccessrateModule],
  controllers: [TelegramController],
  providers: [TelegramService],
  exports: [TelegramService]
})
export class TelegramModule{}
