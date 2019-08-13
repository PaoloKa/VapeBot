const Discord = require("discord.js");
const db = require('../../db.js');

module.exports = {
    name: 'pls',
    description: 'Use to add pictures to the database, usage pls create or pls size',
    execute(message, args) {
        const type = args.join();
        if(type === undefined || type == ""){
            message.channel.send("No second argument found, possible arguments: [create, clean, size, slet]")
                return;
        }
        if(type.split(',')[0] == "create"){
            if(type.split(',')[1] == null || type.split(',')[1] == undefined){
                message.channel.send("No picture found, usage -> pls create [URL]")
                return;
            }
            db.run('INSERT INTO pictures(url,type) VALUES ("'+type.split(',')[1]+'" , "slet")');
            message.channel.send("Picture added. Thanks for the constribution :wink:")
            return;
        }
        switch(type){
            case "clean":
            const member = message.member.id;
        // If the member is in the guild
            if(member != "178933588136427521") {
            message.reply(`Doodserieus niet proberen ket ${member.tag}`);
            return;
            }
            db.run('DELETE from  pictures WHERE "1=1"');
            message.channel.send("Pictures have been cleaned.")
            break;
            case "size":
            db.get("select count(*) AS picturesCount from pictures", (err, row) => {
                if (err) {
                    return console.error(err.message);
                }
                if (row != undefined) {
                   message.channel.send("We currently have "+row.picturesCount+" pictures <:shh:570596329798107136>")
                } else {
                    message.channel.send("Please prive a type you want to view.");
                }
            });
            break;
            case "slet":
            db.get("select * from pictures where TYPE='" + type + "' ORDER BY RANDOM() LIMIT 1", (err, row) => {
                if (err) {
                    return console.error(err.message);
                }
                if (row != undefined) {
                    message.channel.send({
                        files: [row.url]
                    });
                } else {
                    message.channel.send("Please prive a type you want to view.");
                }
            });
            break;
            return true;
        }

        
    },
}