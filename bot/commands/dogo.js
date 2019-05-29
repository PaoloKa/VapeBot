const request = require('request');
const config = require("./../../config.json");

module.exports = {
    name: 'dogo',
    description: 'gives you a random picture of a dogo',
    execute(message, args) {
        request(config.dog_API_url+"breeds/image/random", { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.message);
            message.channel.send("Random dogo", {
                file: body.message
            });
        });
    },
}