const utils = require('./../../utils/utils.js');
const discordAction = require('../../utils/discordactions.js');

module.exports = {
    name: 'kickroulette',
    description: 'kicks a random person',
    execute(message, args) {
        const randomMember = message.guild.members.random();
        const random = utils.getRandomInt(10);
        console.log(random);
        if(random == 1){
            discordAction.kickUser(message,message.guild.member(randomMember));
        } else if(random == 2){
            discordAction.kickUser(message,message.guild.member(message.author));
        } else {
            message.reply("No kick, better luck next time.");
        }
    },
}