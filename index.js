const Discord = require('discord.js');
const fs = require("fs");
const path = require('path');
const config = require("./config.json");
const client = new Discord.Client();
const TeemoJS = require('teemojs');
const sqlite3 = require('sqlite3').verbose();
const wordReacter = require('./bot/wordReacter.js');
const levelHandler = require('./bot/levelsystem/levelhandler.js');
const dl = require('discord-leveling');

/*
set discord clien variables
 */
client.commands = new Discord.Collection();
client.config = config;
client.lolApi = TeemoJS(config.league_token);	

client.once('ready', () => {
    client.user.setPresence({
        game: { 
            name: config.bot_activity,
            type: 'DOING'
        },
        status: 'idle'
    })
    console.log('Bot started');
});

const commandFiles = fs.readdirSync('./bot/commands/');

for (const folder of commandFiles) {
    console.log(folder);
     const commandFolder = fs.readdirSync(`./bot/commands/${folder}/`)
     for (const file of commandFolder) {
        const command = require(`./bot/commands/${folder}/${file}`)
        client.commands.set(command.name, command);
     }
}
//reading the messages in discord
client.on('message', async message => {
    levelHandler.addExp(message); 
    if (!message.content.startsWith(client.config.prefix) && !message.author.bot) {
           wordReacter.execute(message);
           if(config.complain) 
             client.commands.get('complain').execute(message,undefined);
        return;
    }

    const args = message.content.slice(client.config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
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