/*
 * O comentário precisa ser no formato "-topico resto do comentario"
 * Necessita ter o "-" para identificar o tópico.
*/

module.exports = {
  name: 'comment',
  description: 'Adds a new comment to a existing topic',
  execute(texto, msg, args) {
    if (init == false) {
      msg.channel.send('Inicie a reunião antes!');
      return;
    } else if (1 >= args.length) {
      msg.channel.send('Erro encontrado. Verifique o comando.');
      return;
    }

    arg_topic = args[0];

    topics.forEach((topic) => {
      if ('-' + topic.name == arg_topic) {
        args.shift();
        var comment = {
          title: '',
          text: args.join(' '),
        };

        topic.comments.push(comment);

        msg.channel.send('Comentário adicionado!');
        return false;
      }
    });
    
    msg.channel.send('Não existe tópico com este nome. Verifique o comando.');
    return;
  },
};