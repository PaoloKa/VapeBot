const dl = require('discord-leveling');

module.exports = {

    async addExp(message) {
            var profile = await dl.Fetch(message.author.id)
            dl.AddXp(message.author.id, 10)
            var expNeeded = profile.level * 10;
            if (profile.xp + 10 > expNeeded) {
                await dl.AddLevel(message.author.id, 1)
                await dl.SetXp(message.author.id, 0)
                message.reply(`You just leveled up!! You are now level: ${profile.level + 1}`)
            }
    },

};

