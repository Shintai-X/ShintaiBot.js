const {MessageEmbed, WelcomeChannel} = require("discord.js")
const canvas = require('../info/Canvas/WelcomeCanvas')
const Discord = require("discord.js")

module.exports = client =>{
    const channelId = '1040615498032894045'
    
    client.on('guildMemberAdd', async member =>{
        const img = await canvas(member)
        member.guild.channels.cache.get(channelId).send({
            content: `Welcome to <@${member.user.id}> to the server `,
            files: [img]

        })


    })
}