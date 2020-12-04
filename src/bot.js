require('dotenv').config();

const HttpsProxyAgent = require('https-proxy-agent');
const Telegraf = require('telegraf');

let bot;
if (process.env.PROXY_USE) {
  console.log('Используется прокси ....');
  const { PROXY_IP, PROXY_USERNAME, PROXY_PASSWORD, PROXY_PORT } = process.env;
  const proxyUrl = `http://${PROXY_USERNAME}:${PROXY_PASSWORD}@${PROXY_IP}:${PROXY_PORT}`;
  bot = new Telegraf(process.env.TELEGRAM_TOKEN, {
    telegram: {
      agent: new HttpsProxyAgent(proxyUrl),
    },
  });
} else {
  bot = new Telegraf(process.env.TELEGRAM_TOKEN);
}

module.exports = bot;
