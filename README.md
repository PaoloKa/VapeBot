# discordbot
Discord bot made with discord.js lib, also uses the league of legends api.
## Info
This will be a mixed bot, mostly for league of legends related content, but will also contain custom commands
## Setup
Create a config.json in the main folder and make it look like this
```json
{
  "token": "discord_token",
  "prefix": "prefix_you_want_to_use",
  "league_token": "league_of_legends_api_key"
}
```
after that use . Use ```npm install``` to install al the modules, than use ```node index.js``` to launch the bot.
## League Commands
- getrank 'summoner name'   : gives you all the ranks of the current/previous season 
- gameinfo 'summoner name'  : gives you information about the player ingame (mode, champion, ...)
