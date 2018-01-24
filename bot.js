//"node bot.js" will run on console
var Discord = require('discord.io');
var name = "purrBot";

var bot = new Discord.Client({
    autorun: true,
    token: "MzYwNDQxMzQwMjI1NTE5NjE3.DKWSmg.nhQjW_msTth1-Han0Ex3M44Uv9w"
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

///PARENTHESIS ERRORS!
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "~ping") {
        bot.sendMessage({
            to: channelID,
            message: "meow"
        });
    }

    if (message === "~pet") {
      bot.sendMessage({
        to: channelID,
        message: "*purr purr*"
      });
    }

    if (message === "~nametag") {
      bot.sendMessage({
        to: channelID,
        message: "Hello! My name is: " + name
      });
    }
});
