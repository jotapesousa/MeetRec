module.exports = {
	name: 'date',
    description: 'Sets the Ata\'s begin_date',
    execute(texto, msg, args) {
    	date = '';
        args.forEach(function(key, value) {
        	date += key + ' ';
        });
      msg.channel.send('A data foi definida para: ' + date);
    },
};