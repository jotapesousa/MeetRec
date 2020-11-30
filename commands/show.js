module.exports = {
	name: 'show',
    description: 'It shows the Ata\'s details',
    execute(texto, msg, args) {
		msg.channel.send('**Titulo:** ' + title + '\n' +
						 '**Data:** ' + date + '\n' +
						 '**Tópicos:** ');
		topics.forEach(function(value, key) {
			msg.channel.send('['+ key + '] ' + value);
		});
	},
};		