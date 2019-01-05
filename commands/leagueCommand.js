module.exports = {
    name: 'lol',
    description: 'finds league data for you',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a message to say.';
        }
        let game_data;
        message.client.lolApi.get('euw1', 'summoner.getBySummonerName', args.join(" "))
            .then(data =>   message.client.lolApi.get('euw1', 'spectator.getCurrentGameInfoBySummoner', data.id)
                .then(data => {
                    //console.log(data);
                    game_data = data;
                    //console.log(game_data)
                    for(let i = 0; i < data[5].length; i++){
                        console.log(data[5][i]);
                    }
                } ) );


    },
}