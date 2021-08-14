console.log('Beep beep! 🤖');

require('dotenv').config();

// importa o módulo discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

//ligação com a API do discord.js e o bot
client.login(process.env.BOTTOKEN);

// evento específico
client.on("ready", readyDiscord);

function readyDiscord() {
    console.log('💖')
}

const replies = [
    "eae",
    "outra",
    "pergunta"
]

client.on('message' , gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.channel.id == '839791071290589204' && msg.content === 'oii') {
        // vai responder marcando a pessoa
        // msg.reply('');

        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
}