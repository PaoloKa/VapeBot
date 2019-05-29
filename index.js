const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./bot/commands/').filter(file => file.endsWith('.js'));
const TeemoJS = require('teemojs');
let api = TeemoJS(config.league_token);


client.commands = new Discord.Collection();
client.config = config;
client.lolApi = api;

client.once('ready', () => {
    client.user.setPresence({
        game: { 
            name: 'HLN comments',
            type: 'WATCHING'
        },
        status: 'idle'
    })
    console.log('Bot started');

});
//reading all commands and putting them int the bot
for (const file of commandFiles) {
     const command = require(`./bot/commands/${file}`);
    client.commands.set(command.name, command);
}
//reading the messages in discord
client.on('message', message => {

    if (!message.content.startsWith(client.config.prefix) && !message.author.bot) {
           client.commands.get('complain').execute(message,undefined);
        return;
    }

    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.error(command);
    if (!client.commands.has(command))
        return;

    try {
        client.commands.get(command).execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply(error);
    }
});
client.login(config.token);