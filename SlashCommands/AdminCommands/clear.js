const { EmbedBuilder , CommandInteraction , Client, ApplicationCommandOptionBase, ApplicationCommandOptionType, ALLOWED_EXTENSIONS, MembershipScreeningFieldType , } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'clear x number of messages',
    options: [{
        name:"number",
        description:"number of messages?",
        required:true,
        type: ApplicationCommandOptionType.Number,
    },

    
   
],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     *  
     */
    run: async(client, interaction , message , bot , args) => {
        if(interaction.member.roles.cache.has("1040617277290188851")){
        var amount = interaction.options.getNumber("number");
        let phrase = interaction.options.getString("phrase");
        amount+=1;
        
        if(amount>=1 && amount<=100 ){
                 interaction.channel.bulkDelete(amount);
                           
            }
        else{
            interaction.editReply({content: `Please only insert a number between 1 and 100`})           
        }
      
    
           
    }else{

        interaction.editReply({content: `You cant use this command only Admins can use it`})  
}
}
 }
