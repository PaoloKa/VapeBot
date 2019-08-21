const dl = require('discord-leveling');

module.exports ={
    name: 'highscore',
    description: 'gets the level highscore',
    async execute(message, args) {
    if (message.mentions.users.first()) {
        var output = await dl.Leaderboard({
          search: message.mentions.users.first().id
        })
        message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);
      } else {
        dl.Leaderboard({
          limit: 3
        }).then(async users => { //make sure it is async
          var firstplace = await message.client.fetchUser(users[0].userid) 
          var secondplace = await message.client.fetchUser(users[1].userid)
          var thirdplace = await message.client.fetchUser(users[2].userid)
          message.channel.send(`Server leaderboard:
            1 - ${firstplace.tag} : level: ${users[0].level} 
            2 - ${secondplace.tag} :  level: ${users[1].level} 
            3 - ${thirdplace.tag} :  level: ${users[2].level}`)
        })
      }
    }
}