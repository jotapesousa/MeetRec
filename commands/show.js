module.exports = {
	name: 'show',
    description: 'It shows the Ata\'s details',
    execute(texto, msg, args) {
      msg.channel.send('Titulo: ' + title + '\n' +
      				   'Data: ' + date);
    },
};