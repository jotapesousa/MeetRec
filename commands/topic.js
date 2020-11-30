module.exports = {
	name: 'topic',
    description: 'Adds a new topic to the Ata',
    execute(texto, msg, args) {
    	topic = '';
        args.forEach(function(key, value) {
        	topic += key + ' ';
        });
        topics.push(topic);
      	msg.channel.send('Adicionado!');
    },
};