const config = require("./../../config.json");

var possible_answers = [
    "wat is er, ben ik niet goed genoeg ofso?",
    "Waarom krijg ik geen aandacht?",
    ":'(",
    "Hey, heb je tijd om effe te praten?",
    "Weet jij toevallig mijn kousen zijn?",
    "kan je een taxi voor me bellen?",
    "weet jij waar Joran is?",
    "Mijn rug doet pijn",
    "Hey :)",
    "Wdj ?",
    "ZWIJG!",
    

];

module.exports = {
    name: 'complain',
    description: 'complains for you',
    execute(message, args) {
        if (Math.floor(Math.random() * 6) === 2 && message.content.includes("noopi")) { 
            if ( message.channel.id == config.general_id) {
                message.reply("AFBLIJVEN JORAN IS VAN MIJ");
                return;
            }
        }
        if (Math.floor(Math.random() * 8) === 2 && message.channel.id == config.general_id) {
            message.reply([possible_answers[Math.floor(Math.random() * (1 + possible_answers.length - 0))]]);
            return;
        }
    },
}