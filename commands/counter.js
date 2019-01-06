module.exports = {
    name: 'counter',
    description: 'counters the # of a word',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a message to say.';
        }

        console.log(message.channel.messages.array());
    },
}