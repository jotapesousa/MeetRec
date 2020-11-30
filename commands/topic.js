module.exports = {
	name: 'topic',
    description: 'Adds a new topic to the Ata',
    execute(texto, msg, args) {
    	point = '';
        args.forEach(function(key, value) {
        	point += key + ' ';
        });
        points.push(point);
      	msg.channel.send('Adicionado!');
    },
};