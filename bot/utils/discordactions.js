const config = require('../../config.json');

module.exports = {
       
    kickUser(message,user){
        console.log(user.id + " "+config.admin_ids);
        if(config.admin_ids.includes(user.id)){
            message.reply(`Could not kick user ${user.user.username} since it's an admin.`);
            return;
        }
        user.kick('Optional reason that will display in the audit logs').then(() => {
        message.reply(`Successfully kicked ${user.user.username}`);
        }).catch(err => {
            message.reply('I was unable to kick this member');
        });
    },

    sendInivte(channel,user){
        channel.createInvite().then(invite => {
            console.log(invite.url);
            user.send(invite.url)
        });
    }
}