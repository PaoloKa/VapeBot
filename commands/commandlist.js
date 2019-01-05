module.exports = {
    name: 'commands',
    description: 'List all the commands',
    execute(message, args) {
        message.client.commands.forEach(command =>
            message.channel.send(command.name+ " - "+command.description)
        );
        },
}