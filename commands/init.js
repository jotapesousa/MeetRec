module.exports = {
    name: 'init',
    description: 'Iniciar Reunião!',
    execute(texto, msg, args) {
        const PDFKit = require('pdfkit');
        const fs = require('fs');

        const pdf = new PDFKit();

        pdf.text('Inicio de Ata ', Date.now());

        pdf.pipe(fs.createWriteStream('testeAta.pdf'));
        pdf.end();

        msg.channel.send('Baixando ata...');
    },
  };