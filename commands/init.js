module.exports = {
    name: 'init',
    description: 'Iniciar Reunião!',
    execute(texto, msg, args) {
        texto += 'init ';
        msg.channel.send(texto);
    },
  };