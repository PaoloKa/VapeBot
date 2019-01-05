module.exports = {
    name: 'setprefix',
    description: 'changes the bot his prefix',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a prefix to set!';
        }
        const prefix = args.join(' ');
        message.client.config.prefix = prefix;
        message.channel.send('Prefix set to '+prefix);
    },
}