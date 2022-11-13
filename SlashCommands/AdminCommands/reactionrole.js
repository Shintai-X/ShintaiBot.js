// const { EmbedBuilder , CommandInteraction , Client, ApplicationCommandOptionBase, ApplicationCommandOptionType , } = require('discord.js');


// module.exports = {
//     name: 'reactionrole',
//     description: "Sets up a reaction role message!",
//          /**
//      * 
//      * @param {Client} client 
//      * @param {CommandInteraction} interaction 
//      *  
//      */
//     async execute(message, args, Discord, client ) {
//         const channel = '1040615498032894045';
//         const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "java");
//         const blueTeamRole = message.guild.roles.cache.find(role => role.name === "devops");
//         const yellowTeamEmoji = '💛';
//         const blueTeamEmoji = '💙';

//         let embed = new Discord.MessageEmbed()
//             .setColor('#e42643')
//             .setTitle('Choose a team to play on!')
//             .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
//                 + `${yellowTeamEmoji} for yellow team\n`
//                 + `${blueTeamEmoji} for blue team`);
 
//         let messageEmbed = await message.channel.send(embed);
//         messageEmbed.react(yellowTeamEmoji);
//         messageEmbed.react(blueTeamEmoji);
 
//         client.on('messageReactionAdd', async (reaction, user) => {
//             if (reaction.message.partial) await reaction.message.fetch();
//             if (reaction.partial) await reaction.fetch();
//             if (user.bot) return;
//             if (!reaction.message.guild) return;
 
//             if (reaction.message.channel.id == channel) {
//                 if (reaction.emoji.name === yellowTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
//                 }
//                 if (reaction.emoji.name === blueTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
//                 }
//             } else {
//                 return;
//             }
 
//         });
 
//         client.on('messageReactionRemove', async (reaction, user) => {
 
//             if (reaction.message.partial) await reaction.message.fetch();
//             if (reaction.partial) await reaction.fetch();
//             if (user.bot) return;
//             if (!reaction.message.guild) return;
 
 
//             if (reaction.message.channel.id == channel) {
//                 if (reaction.emoji.name === yellowTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
//                 }
//                 if (reaction.emoji.name === blueTeamEmoji) {
//                     await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
//                 }
//             } else {
//                 return;
//             }
//         });
//     }
 
// }   

const { EmbedBuilder , CommandInteraction , Client, ApplicationCommandOptionBase, ApplicationCommandOptionType, ALLOWED_EXTENSIONS, MembershipScreeningFieldType , Discord } = require('discord.js');

module.exports = {
    name: 'react',
    description: 'clear x number of messages',

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     *  
     */
    run: async(client, interaction , message , bot , args) => {
        if(interaction.member.roles.cache.has("1040617277290188851")){
        const channel = '1040615498032894045';
        const javarole= interaction.guild.roles.cache.find(role => role.name === "java");
        const devopsrole = interaction.guild.roles.cache.find(role => role.name === "devops");
        const webrole = interaction.guild.roles.cache.find(role => role.name === "web");
        const java = client.emojis.cache.get("1041303054609297470"); 
        const devops = client.emojis.cache.get("1041303805783973898");
        const web = client.emojis.cache.get("1041313743222616126");
        

        

        let embed = new EmbedBuilder()
            .setColor('#e42643')
            .setTitle('Hello , please choose what technologie are you interessied in')
            .setDescription('Choosing a technologie will give you acces to special channels!\n\n'
                + `${java} for Java\n`
                + `${devops} for devops\n`
                + `${web} for web devloppement`
                );
 
           let   messageEmbed   = await interaction.editReply({embeds: [embed]})
        messageEmbed.react(java);
        messageEmbed.react(devops);
        messageEmbed.react(web);
        // console.log(javarole);
        // console.log(devopsrole);
       
 
 
        client.on('messageReactionAdd', async (reaction, user) => {
             if (reaction.message.partial) await reaction.message.fetch();
             if (reaction.partial) await reaction.fetch();
             if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === java.name) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(javarole);
                }
                if (reaction.emoji.name === devops.name) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(devopsrole);
                }
                if (reaction.emoji.name === web.name) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(webrole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === java.name) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(javarole);
                }
                if (reaction.emoji.name === devops.name) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(devopsrole);
                }
                if (reaction.emoji.name === web.name) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(webrole);
                }
            } else {
                return;
            }
        });
}else{
    interaction.editReply({content: `You cant use this command only Admins can use it`})  
}
 }
 }