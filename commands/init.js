const initDate = require('./date')

module.exports = {
    name: 'init',
    description: 'Iniciar Reunião!',
    execute(texto, msg, args) {
 
        if (init !== false) {
            msg.channel.send('Já existe uma reunião ocorrendo. Você precisa finalizá-la antes de dar início a uma outra.');

            return
        }

        init = true;

        var data = new Date();
        var str_hora = data.getHours() + ':' + data.getMinutes();
        var str_data = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();

        initDate.initDate();

        msg.channel.send('Reunião iniciada às ' + str_hora + ' do dia ' + str_data);
    },
  };
