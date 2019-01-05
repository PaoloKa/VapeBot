var hd = [
    "Heads",
    "Tails"
];

module.exports = {
    name: 'coinflip',
    description: 'flips a coin for you.',
    execute(message, args) {
        message.channel.send(message.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));
    },
}