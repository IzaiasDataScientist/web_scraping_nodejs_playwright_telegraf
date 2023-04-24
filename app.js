import * as dotenv from 'dotenv'
import { Bet365 } from './bet365.js';
import { Telegraf } from 'telegraf';

dotenv.config()

const bet365 = new Bet365();
const telegraf = new Telegraf(process.env.BOT_TOKEN);

const data = await bet365._nameCompetition();

await telegraf.telegram.sendMessage(process.env.CHAT_ID, 'Jogos que não estão empatados.');
await telegraf.telegram.sendMessage(process.env.CHAT_ID, bet365._obterDados(data, bet365.jogosNaoEmpatados));

await telegraf.telegram.sendMessage(process.env.CHAT_ID, 'Jogos que estão empatados.');
await telegraf.telegram.sendMessage(process.env.CHAT_ID, bet365._obterDados(data, bet365.jogosEmpatados));

await telegraf.telegram.sendMessage(process.env.CHAT_ID, 'Jogos que tiveram mais de 3 gols.');
await telegraf.telegram.sendMessage(process.env.CHAT_ID, bet365._obterDados(data, bet365.maisGols));

await telegraf.telegram.sendMessage(process.env.CHAT_ID, 'Jogos que tiveram mais de 2 gols.');
await telegraf.telegram.sendMessage(process.env.CHAT_ID, bet365._obterDados(data, bet365.maiorDoisGols));

await bet365.browser.close();