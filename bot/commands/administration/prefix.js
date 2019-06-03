module.exports = {
    name: 'setprefix',
    description: 'changes the bot his prefix',
    execute(message, args) {
        if (args.length < 1) {
            throw 'Please provide a prefix to set!';
        }
        const prefix = args.join();
        if(prefix.length < 2) {
            message.client.config.prefix = prefix;
            message.channel.send('Prefix set to ' + prefix);
        } else {
            message.channel.send("Foute prefix mongool, max lengte is de hoeveelheid kutten dat thomas heeft aangeraakt.")
        }
    },
}