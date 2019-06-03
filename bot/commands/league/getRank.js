var pascalCase = require('pascal-case')
const Discord = require("discord.js");

module.exports = {
    name: 'getrank',
    description: 'finds the rank of a person for you.',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Provide an username.';
        }
        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', args.join(" ")).then(data => {
            if(data == null ){
                message.channel.send("No user with the name " + args.join(" ") + " found.");
                return;
            }
            message.client.lolApi.get('euw1', 'league.getAllLeaguePositionsForSummoner', data.id).then(data => {
                console.log(data);
                var rank_data = []
                for (var i = 0; i < data.length; i++) {
                    var queueType = "";
                    var winratio = data[i].wins / (data[i].wins + data[i].losses) * 100;
                    switch(data[i].queueType){
                        case "RANKED_FLEX_SR":
                        queueType = "Ranked Flex 5v5"
                        break;
                        case "RANKED_SOLO_5x5":
                        queueType = "Ranked Solo/Duo"
                        break;
                        case "RANKED_FLEX_TT":
                        queueType = "Ranked Flex 3v3"
                        break;
                    }
                    var rank = queueType + " " + pascalCase(data[i].tier) + " " + data[i].rank + " "+(Math.floor(winratio) < 45 ? ":fire: "+Math.floor(winratio)+"% :fire:": Math.floor(winratio)+"%");
                    if (rank.includes("Bronze"))
                       rank_data.push((rank) + " :joy: :wheelchair:");
                    else
                       rank_data.push(rank);
                
                }
                let botembed = new Discord.RichEmbed().setDescription(data[0].summonerName)
                .addField("Ranks",rank_data)
                message.channel.send(botembed);
            }).catch(function (error) {
                message.channel.send("No user with the name " + args.join(" ") + " found." + error);
            });


        });
    }
    

}