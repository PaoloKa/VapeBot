const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

client.config = config;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
    console.log('Ready!');
});

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}


client.login(config.token);