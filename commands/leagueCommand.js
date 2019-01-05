module.exports = {
    name: 'getrank',
    description: 'finds league data for you',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a message to say.';
        }
        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', args.join(" ")).then(data =>  {
                message.client.lolApi.get('euw1', 'league.getAllLeaguePositionsForSummoner', data.id).then(data => {
                    console.log(data);
                    for(var i = 0; i < data.length; i++){
                        console.log(data[i].tier);
                        var rank = data[i].queueType+" "+data[i].tier + " "+data[i].rank;
                        if(rank.includes("BRONZE"))
                            message.channel.send(rank + ":joy: :wheelchair:");
                            else
                                message.channel.send(rank);
                    }
                })
                message.client.lolApi.get('euw1', 'spectator.getCurrentGameInfoBySummoner', data.id).then(data => {


                    for(var i = 0; i < data.participants.length; i++){
                   //     console.log(data.participants[i]);
                       // console.log(data.participants[i].summonerName);
                    }

                })
            });


    },
}