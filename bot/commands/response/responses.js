const Discord = require("discord.js");
const db = require('../../db.js');

module.exports = {
    name: 'responses',
    description: 'Lists all the current responses in the server.',
    execute(message, args) {

        db.all("select *  from responses ", (err, row) => {
            if (err) {
                return console.error(err.message);
            }
           
            var info = [];
            row.forEach(function(value){
                info.push(value.word+" - "+value.response);
            });
            let botembed = new Discord.RichEmbed().addField("Responses",info);
            message.channel.send(botembed);
        });  
    }
}