const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.onText(/\/start/, (msg) => {

"reply_markup": {
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});

});

bot.on('message', (msg) => {   
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear user");
} 

var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}    
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
  
});



module.exports = bot;
