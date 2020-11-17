module.exports = {
    name: 'hello',
    description: 'Hello World!',
    execute(texto, msg, args) {
        texto += 'hello ';
      msg.channel.send(texto);
    },
  };