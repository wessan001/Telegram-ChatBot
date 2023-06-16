const TelegramBot = require('node-telegram-bot-api');

const token = './token-tg';

const bot = new TelegramBot(token, {polling:true});

bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Quer entrar no grupo?');
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
