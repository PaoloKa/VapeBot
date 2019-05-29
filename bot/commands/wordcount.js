module.exports = {
    name: 'wordcount',
    description: 'counts a certain word in a channel',
    execute(message, args) {
        var toFind = args.join();
        if(toFind == undefined || toFind == null){
            message.channel.send("!worldcount [search], no search was given.");
            return;
        }
        message.channel.fetchMessages({limit : 100 }).then(messages => {
            console.log(messages.array().length);
           var foundMessages = messages.filter(msg => msg.content === toFind);
           console.log(foundMessages.array().length);
           message.channel.send(foundMessages.array().length)
          
        })
    },
}