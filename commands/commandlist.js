module.exports = {
    name: 'commands',
    description: 'List all the commands',
    execute(message, args) {
       /* for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            message.channel.send('Command :'+ command.name+ " - "+command.description);
        }*/


        message.client.commands.forEach(command =>
            message.channel.send(command.name+ " - "+command.description)
        );
        },
}