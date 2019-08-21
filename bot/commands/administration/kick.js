const discordAction = require("../../utils/discordactions.js")

module.exports = {
    name: 'kick',
    description: 'kicks a person',
    execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        discordAction.sendInivte(message.channel, member).then(x => {
            discordAction.kickUser(message,member);
        })
    } else {
        message.reply('You didn\'t mention the user to kick!');
    }
    },
}