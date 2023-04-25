import { Bet365 } from './browser/bet365.js';
import { Telegram } from './telegram.js';

const bet365 = new Bet365();
const telegram = new Telegram(process.env.CHAT_ID);

const data = await bet365._nameCompetition();

await telegram.send_to_telegram('Jogos que não estão empatados.');
await telegram.send_to_telegram(bet365._obterDados(data, bet365.jogosNaoEmpatados));

await telegram.send_to_telegram('Jogos que estão empatados.');
await telegram.send_to_telegram(bet365._obterDados(data, bet365.jogosEmpatados));

await telegram.send_to_telegram('Jogos que tiveram mais de 3 gols.');
await telegram.send_to_telegram(bet365._obterDados(data, bet365.maisGols));

await telegram.send_to_telegram('Jogos que tiveram mais de 2 gols.');
await telegram.send_to_telegram(bet365._obterDados(data, bet365.maiorDoisGols));

await bet365.browser.close();