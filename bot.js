const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const botCommands = require('./commands');

const PDFKit = require('pdfkit');
const fs = require('fs');

const pdf = new PDFKit();

pdf.text('Hello Rocketseat PDF');

pdf.pipe(fs.createWriteStream('output.pdf'));
pdf.end();

Object.keys(botCommands).map(key => {
    client.commands.set(botCommands[key].name, botCommands[key]);
    // console.log(botCommands[key].name);
});

// Global variables
let texto = 'Inicio de texto ';
global.init      = false;
global.title     = '';
global.date      = '';
global.beginHour = '';
global.endHour   = '';
global.topic     = '';
global.topics    = [];

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    console.info(`Comando Chamado: ${command}`);

    try {
      client.commands.get(command).execute(texto, msg, args);
    } catch (error) {
      console.error(error);
      msg.reply('Erro ao tentar executar o comando!');
    }
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildCreate', guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). Númeto de participantes: ${guild.memberCount} membros!`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
});

client.login(token);