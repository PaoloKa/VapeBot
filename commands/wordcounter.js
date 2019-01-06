
module.exports = {
    name: 'emojiconvert',
    description: 'converts your sentence into an emoji sentence',
    execute(message, args) {

        var words = args.toString().toLowerCase();
        var emojiString = "";
        var letters = /^[A-Za-z]+$/;
        for(var i = 0; i < words.length; i++){
            var char = words.charAt(i);
            if(char.match(letters))
                emojiString += ":regional_indicator_"+char+":";
            else
                emojiString += char;
        }
        message.channel.send(emojiString);
    },
}