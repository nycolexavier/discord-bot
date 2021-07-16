console.log('Beep beep! 🤖');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log('💖')
}

const comnandHandler = require('./commands');

client.on('message', comnandHandler);

