const Discord = require("discord.js");

module.exports = {
    name: 'commands',
    description: 'List all the commands',
    execute(message, args) {
        var commands = []
        message.client.commands.forEach(command => {
            commands.push(command.name+ " -> "+command.description)
        });
        let bicon = message.client.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setDescription("Command Information")
            .addField("Avaibale Commands",commands);

        message.channel.send(botembed);
        //message.channel.send(commands);
        },
}