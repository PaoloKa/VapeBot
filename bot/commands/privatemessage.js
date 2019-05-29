module.exports = {
    name: 'pm',
    description: 'send a private message to another player',
    execute(message, args) {
    const user = message.mentions.users.first();

    if (user) {

        const member = message.guild.member(user);

        if(member.id == "178933588136427521") {
            message.reply(`Doodserieus rot op gast @Shnek wilt geen fucking spam mongool ${user.tag}`);
            return;
        }
        if (member) {
            user.send("Hey ik ben een vriendelijke bot, ALLE BRUINE BUITEN, dit is een test sorry :)")

        } else {
            // The mentioned user isn't in this guild
            message.reply('That user isn\'t in this guild!');
        }
        // Otherwise, if no user was mentioned
    } else {
        message.reply('You didn\'t mention the user to kick!');
    }

    },
}