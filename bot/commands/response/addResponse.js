const Discord = require("discord.js");
const db = require('../../db.js');

module.exports = {
    name: 'addresponse',
    description: 'Create a custom response.',
    execute(message, args) {
        console.log(args);
            if(args[1] == null || args[1] == undefined){
                message.channel.send("?????")
                return;
            }
            var response = "";
            for(var i = 1; i < args.length; i++){
                if(args[i] == "@everyone"){
                    message.channel.send("Just no.");
                    return;
                }
                console.log(args[i]);
                response = response.concat(args[i])+" ";
            }
            console.log(response);
            db.run('INSERT INTO responses(word,response) VALUES ("'+args[0]+'" , "'+response+'")');
            message.channel.send("Response  '"+response+ "' has been added :wink:")
            return;     
    }
}