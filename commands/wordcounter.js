
module.exports = {
    name: 'counter',
    description: 'counts a single word in the server.',
    execute(message, args) {
        message.channel.send(message.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));
    },
}