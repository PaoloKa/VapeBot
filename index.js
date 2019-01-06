const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const TeemoJS = require('teemojs');
let api = TeemoJS(config.league_token);


client.commands = new Discord.Collection();
client.config = config;
client.lolApi = api;

client.once('ready', () => {
    console.log('Ready!');

});

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//reading the messages in discord
client.on('message', message => {
    if (!message.content.startsWith(client.config.prefix) || message.author.bot)
        return;
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
        message.reply('there was an error trying to execute that command!');
    }
});
client.login(config.token);