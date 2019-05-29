const request = require('request');
const config = require("./../../config.json");

module.exports = {
    name: 'dogo',
    description: 'gives you a random picture of a dogo',
    execute(message, args) {
        request("https://random.dog/woof.json", { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.url);
            message.channel.send("Random dogo", {
                files: [body.url]
            });
        });
    },
}