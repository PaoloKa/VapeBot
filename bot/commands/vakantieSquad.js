var users = []

module.exports = {
    name: 'vakantiesquad',
    description: 'mensen toevoegen aan de vakantiesquad',
    execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {

        if(users.includes(user)){
            message.reply(`Deze gebruiker is al reeds een lid van de Vakantiesquad.`);
            return;
        }
        const member = message.guild.member(user);
        if(member.id == "178933588136427521") {
            message.reply(`LMAO HAHAHAHA SERIEUS KET??? DIE GAST WERKT MEER DAN GIJ IN HEEL UW LEVEN TABAKKES`);
            return;
        }
        users.push(member);
        message.delete();
        message.channel.send('<@'+user.id+'> is nu lid van de vakantiesquad');
        // Otherwise, if no user was mentioned
    } else {
        message.channel.send("Onze vakantiesquad boys :"+users);
    }

    },
}