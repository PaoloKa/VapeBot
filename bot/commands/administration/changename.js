module.exports = {
    name: 'changename',
    description: 'lets you change the nickname of a player',
    execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            var newName = "";
            for(var i = 1; i < args.length; i++){
                newName = newName.concat(args[i])+" ";
            }
            member.setNickname(newName);
        } else {
            // The mentioned user isn't in this guild
            message.reply('User could not be found');
        }
    } else {
        message.reply('You didn\'t mention an user!');
    }
}
}
