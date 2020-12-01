const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
    ];

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
    initDate() {
        d = new Date();
        date = d.getDate() + ' de ' + meses[d.getMonth()] + ' de ' + d.getFullYear();
    }
};