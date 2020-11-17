const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const TOKEN = config.token;


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    // console.log(`Bot iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores`);
    // client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
});

client.on('guildCreate', guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). Númeto de participantes: ${guild.memberCount} membros!`);
})

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
})

client.on('message', async message => {

});

client.login(TOKEN);