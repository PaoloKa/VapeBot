var possible_answers = [
    "Misschien", 
    "Ja", 
    "Nee", 
    "best",
    "kzou da niet doen",
    "zedde gij op uwe kop gevallen?",
    "bent gij strontachterlijk?",
    "nou ja",
    "nou nou",
    "nu even niet, mijn opa ligt te slapen",
    "ksta echt nat, hahaha, vraag straks nog eens"
];

module.exports = {
    name: 'askrobin',
    description: 'kan je vragen stellen aan mij :)',
    execute(message, args) {
        const question = args.join();
        if(question.endsWith('?')) {
            message.reply([possible_answers[Math.floor(Math.random() * (1 + possible_answers.length - 0))]]);
        } else {
            message.reply("Misschien een vraagteken gebruiken mongool.")
        }
    },
}