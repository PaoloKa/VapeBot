const db = require('../bot/db.js');

module.exports = {
    execute(message) {
        if(message.author.bot)
            return;
        db.all("select *  from responses ", (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            row.forEach(function(value){
                if(message.content.toLowerCase().includes(value.word)){
                    message.channel.send(value.response);
                    return;
                }   
            });
        });
    },
}