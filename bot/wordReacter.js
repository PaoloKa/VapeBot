const db = require('../bot/db.js');

module.exports = {
    execute(message) {
        if(message.author.bot)
            return;
            db.getResponses().forEach(function(value){
                if(message.content.toLowerCase().includes(value.word.toLowerCase())){
                    message.channel.send(value.response);
                    return;
                }   
            });
    },
}