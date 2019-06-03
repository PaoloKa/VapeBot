# VapeBot
Discord bot made with discord.js lib, makes usage of the following API's
* https://dog.ceo/api/ -> for random dog pictures
* League of legends API -> for receiving league of legends information
* https://api.imgflip.com/ -> for random meme pictures
## Info
This is a personal bot, which is used in my private discord channel. 
List of commands:
* kick -> kicks a person
* setprefix -> changes the bot his prefix
* pm -> send a private message to another player
* complain -> complains for you
* dogo -> gives you a random picture of a dogo
* emojiconvert -> converts your sentence into an emoji sentence
* memes -> gives you a given amount popular meme templates, usage !memes 5
* pls -> Use to add pictures to the database, usage pls create or pls size
* say -> lets the bot speak for you
* vakantiesquad -> mensen toevoegen aan de vakantiesquad
* botinfo -> gives information about this bot.
* commands -> List all the commands
* gameinfo -> gives you some info about the player ingame data.
* getrank -> finds the rank of a person for you.
* askrobin -> kan je vragen stellen aan mij :)
* coinflip -> flips a coin for you.
* addresponse -> Create a custom response.
* responses -> Lists all the current responses in the server. The bot will react whenever he sees the occurence of the word you entered.
## Setup
Second create a config.json in the main folder and make it look like this
```json
{
  "token": "discord_token",
  "prefix": "prefix_you_want_to_use",
  "league_token": "league_of_legends_api_key"
}
```

after that use . Use ```npm install``` to install al the modules, than use ```node index.js``` to launch the bot.
