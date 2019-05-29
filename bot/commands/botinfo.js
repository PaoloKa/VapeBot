const Discord = require("discord.js");

module.exports = {
    name: 'botinfo',
    description: 'gives information about this bot.',
    execute(message, args) {
        let bicon = message.client.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
            .setDescription("Bot Information")
            .setColor("#15f153")
            .setThumbnail(bicon)
            .addField("Bot Name", message.client.user.username)
            .addField("Info","use !commands for a list of all available commands.");

        message.channel.send(botembed);
    },
}