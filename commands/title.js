module.exports = {
	name: 'title',
    description: 'Sets the Ata\'s title',
    execute(texto, msg, args) {
    	title = '';
        args.forEach(function(key, value) {
        	title += key + ' ';
        });
      	msg.channel.send('O título foi definido para: ' + title);
    },
};