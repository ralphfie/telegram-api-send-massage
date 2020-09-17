import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SuccessrateService } from 'src/successrate/successrate.service';

const TelegramBot = require('node-telegram-bot-api');

// token bot. Get from botFather
const token = '1269618331:AAGC4XVqIxq8AyizGrcoCyD9CDGaE7W4jSU';


@Injectable()
export class TelegramService {

    constructor(private readonly successRate: SuccessrateService) { }
    onModuleInit() {
        //this.botMessage();
        this.botSendMessage();
    }
    
    // Automatic send to telegram
    async botSendMessage() {
        process.env.NTBA_FIX_319 = "1";
        const bot = new TelegramBot(token, { polling: true });
        const test1: string = await this.successRate.getSuccessRateFiber();
        bot.sendMessage(726882852, "haha");
        bot.getMe()
        .then(console.log())
    }
    
    // Require feedback from user then bot reply 
    /*async botMessage() {
        process.env.NTBA_FIX_319 = "1";
        const TelegramBot = require('node-telegram-bot-api');
        const test1: string = await this.successRate.getSuccessRateFiber();
        const token = '1269618331:AAGC4XVqIxq8AyizGrcoCyD9CDGaE7W4jSU';

        const bot = new TelegramBot(token, { polling: true });

        bot.on('message', (msg) => {
            let Hi = "hi";
            if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
                bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + ", Can i help you ? ");
                console.log(msg.from.id)
            }

            let response = "Who are you";
            if (msg.text.toString().toLowerCase().includes("who")) {
                bot.sendMessage(msg.chat.id, "I am an intelligent telegram robot, built with Nest.js. Thanks for asking");
            }

            let response2 = "Do you love JavaScript";
            if (msg.text.toString().toLowerCase().includes("javascript")) {
                bot.sendMessage(msg.from.id, "Oh, did I hear you say JavaScript? \n I really love JavaScript");
            }

            let response3 = "Success";
            if (msg.text.toString().toLowerCase().includes("success")) {
                bot.sendMessage(msg.from.id, "Success Rate for Fiber : " + test1);
            }
        });*/


}