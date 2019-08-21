const config = require('../../config.json');

module.exports = {
       
    kickUser(message,user){
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

    async sendInivte(channel,user){
       return channel.createInvite().then(invite => {
            user.send(invite.url);
        });
    }
}