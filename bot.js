const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', message => {
  try {
    // actions here
  } catch(err) {
    console.log(err);
  };
});

client.login("token here");
