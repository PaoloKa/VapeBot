var championFinder = require("../utils/championFinder.js");
var championData = require("../../data/champions.json");

module.exports = {
    name: 'gameinfo',
    description: 'gives you some info about the player ingame data.',
    execute(message, args) {

        if (args.length < 1) {
            throw 'Please provide an username.';
        }
        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', args.join(" ")).then(data_s => {
            message.client.lolApi.get('euw1', 'spectator.getCurrentGameInfoBySummoner', data_s.id).then(data => {
                console.log(data);
                var gameMode = data.gameMode;
                var championId;
                var info = []
                for (var i = 0; i < data.participants.length; i++) {
                    if (data.participants[i].summonerId == data_s.id)
                        championId = data.participants[i].championId;

                        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', data.participants[i].summonerName).then(player_data => {
                            var winratio = player_data[0].wins / (data[0].wins + data[0].losses) * 100;
                            info.push( data.participants[i].summonerName+" "+winratio);
                        });
                        message.channel.send(info);
                }
                message.channel.send("" + data_s.name + "(" + data_s.summonerLevel + ") is playing with " + championFinder.getNameById(championId) + " in " + gameMode);
                

            })
        }).catch(function (error) {
            message.channel.send("No user with the name " + args.join(" ") + " found.");
        });
    }

}