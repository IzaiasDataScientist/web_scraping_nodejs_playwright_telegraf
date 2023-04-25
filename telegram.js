import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config();

class Telegram {
    constructor(chatId) {
        this.telegraf = new Telegraf(process.env.BOT_TOKEN);
        this.chatId = chatId;
    }

    async send_to_telegram(msg) {
        return await this.telegraf.telegram.sendMessage(this.chatId, msg);
    }
}

export { Telegram }