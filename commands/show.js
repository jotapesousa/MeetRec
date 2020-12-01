module.exports = {
	name: 'show',
    description: 'It shows the Ata\'s details',
    execute(texto, msg, args) {
			msg.channel.send('**Titulo:** ' + title + '\n' +
						 '**Data:** ' + date + '\n' +
						 '**Tópicos:** ');
		
			var str_topics = '';

			topics.forEach(function(value, key) {
				str_topics += '['+ key + '] ' + value.name + '\n';
				value.comments.forEach((value) => {
					const title =  value.title != '' ? value.title + ': ' : null;
					str_topics += title + value.text + '\n';
				})
			});
			msg.channel.send(str_topics);
	},
};		