var championFinder = require("../utils/championFinder.js");

module.exports = {
    name: 'gameinfo',
    description: 'gives you some info about the player ingame data.',
    execute(message, args) {

        if (args.length < 1) {
            throw 'Please provide an username.';
        }
        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', args.join(" ")).then(data_s =>  {
                message.client.lolApi.get('euw1', 'spectator.getCurrentGameInfoBySummoner', data_s.id).then(data => {
                   var gameMode = data.gameMode;
                   var championId;
                   //console.log(data);
                   for(var i =0; i < data.participants.length; i++){
                       if(data.participants[i].summonerId == data_s.id )
                            championId = data.participants[i].championId;
                   }
                    message.channel.send(""+data_s.name+"("+data_s.summonerLevel+") is playing with "+championFinder.getNameById(championId)+ " in "+gameMode);

                })
        });


    },
}