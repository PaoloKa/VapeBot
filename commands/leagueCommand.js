module.exports = {
    name: 'lol',
    description: 'finds league data for you',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a message to say.';
        }
        let game_data;
        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', args.join(" "))
            .then(data =>   message.client.lolApi.get('euw1', 'spectator.getCurrentGameInfoBySummoner', data.id))
            .then(data => {
              console.log(data);
              game_data = data;
              for(let i = 0; i < data.participants.length; i++)
              {
                console.log(`PLAYER NUMMER ${i}`);
                console.log(data.participants[i]);
                console.log("_____________________________________________________________________")
              }
            });
    },
}
