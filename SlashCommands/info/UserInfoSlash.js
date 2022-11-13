const { EmbedBuilder , CommandInteraction , Client, ApplicationCommandOptionBase, ApplicationCommandOptionType , } = require('discord.js');



module.exports = {
    name: 'user_info',
    description: 'descriptions here',
    options: [{
        name:"user",
        description:"Wich user",
        required:true,
        type: ApplicationCommandOptionType.User,
    },],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     *  
     */

    run: async(client, interaction) => {
    const member = interaction.options.getMember('user');
      let checkbot = " "; if(member.user.bot) checkbot = "✅" ; else checkbot="❌";
      function FunctionRoles(){
        let rol = member.roles.cache.map(roles => `${roles}`).join(', ');
        return rol;     
    }
      const embed = new EmbedBuilder()
      .setTitle(`Member Information of ${member.user.tag}`)
      .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
      .setColor(0x0099FF)
      .setDescription(`
      __**Member Information**__

      >**Name**: ${member.user.tag} | ${member.user.toString()}
      >**Tag**: ${member.user.tag} 
      >**ID**: ${member.user.id} 
      >**Bot**: ${checkbot} 

      __**Account information**__

      >**Created at:** <t:${parseInt(member.user.createdTimestamp / 1000)}:R>
      >**Joined:** <t:${parseInt(member.joinedAt / 1000)}:R>    
      `)
      .addFields(
        {name: "Interested in:",value: FunctionRoles()}
        )
 

      await interaction.editReply({embeds: [embed]})
    }
}
