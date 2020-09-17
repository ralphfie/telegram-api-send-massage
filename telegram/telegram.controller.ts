import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramService } from './telegram.service';

@ApiTags('Telegram')
@Controller('telegram')
export class TelegramController {
    constructor( private botService: TelegramService){}
    
    /*@Get()
    getBotDialog(@Res() res) {
    this.botService.botMessage();
    res.status(HttpStatus.OK).send("Bot service started");
  }*/
   
  
  @Get('send')
  getBotDialog1(@Res() res) {
  this.botService.botSendMessage();
  res.status(HttpStatus.OK).send("Bot service started");
}



}
