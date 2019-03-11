var possible_answers = [
    "wat is er, ben ik niet goed geneoeg ofso?",
    "@Kebabje doe de deur toe",
    "Waarom krijg ik geen aandacht?",
    ":'(",
    "Hey, heb je tijd om effe te praten?",

];

module.exports = {
    name: 'zaag',
    description: 'zaagt voor u',
    execute(message, args) {
        message.reply([possible_answers[Math.floor( Math.random() * ( 1 + possible_answers.length - 0 ) )]]);
    },
}