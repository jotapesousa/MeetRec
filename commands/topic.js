module.exports = {
    name: 'topic',
    description: 'Adds a new topic to the Ata',
    execute(texto, msg, args) {
        if (init == false) {
            msg.channel.send('Inicie a reunião antes!');
            return;
        }

        var topic = {
            name: '',
            comments: [],
        };

        args.forEach(function(key, value) {
        	topic.name = key;
        });
        
        topics.push(topic);

      	msg.channel.send('Tópico adicionado!');
    },
};