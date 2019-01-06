const get = require('simple-get')
module.exports = {
    name: 'memes',
    description: 'gives you a given amount popular meme templates, usage !memes 5',
    execute(message, args) {
        var amount = args.toString();
        if (args.length < 1) {
            throw 'Please provide an amount!';
        }
        if(amount > 10){ //don't want spam
            throw "Can't ask for more than 10 buddy."
        }
        get.concat('https://api.imgflip.com/get_memes', function (err, res, data) {
            if (err)
                throw err;


            console.log(res.statusCode) // 200
            var information = data.toString();
            var meme_data = JSON.parse(information).data.memes;
            console.log(JSON.parse(information).data.memes);
            for(var i = 0; i < amount; i++){
                message.channel.send(JSON.parse(information).data.memes[i].url.name, {
                    file: JSON.parse(information).data.memes[i].url // Or replace with FileOptions object
                });
            }

        })

    },
}