console.log('Beep beep! 🤖');

require('dotenv').config();

// importa o módulo discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

//ligação com a API do discord.js e o bot
client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log('💖')
}

const comnandHandler = require('./commands');

client.on('message', comnandHandler);

