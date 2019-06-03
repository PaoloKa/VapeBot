

module.exports = {
    name: 'say',
    description: 'lets the bot speak for you',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a message to say.';
        }
        message.delete();
        const words = args.join(" ")
        message.channel.send(words);
    },
}