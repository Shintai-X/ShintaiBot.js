const Canvas = require('canvas');
const Discord = require('discord.js');
const { cpus } = require('os');
const { registerFont } = require('canvas');
registerFont('./assets/Roboto-Italic.ttf', { family: 'Roboto' });

const background = "https://cdn.discordapp.com/attachments/820377106931777562/1041068021499822100/07efbbb77da30df07dabb35b8e0c527e.png"

const canvas =  async(member) => {
    const canvas = Canvas.createCanvas(1024,500) // W and H
    const ctx = canvas.getContext('2d');
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg,0,0,1024,500)
    const avURL = member.user.displayAvatarURL({forceStatic:false , extension:"png"})
    const avimg = await Canvas.loadImage(avURL)
    ctx.font = '60px Roboto Italic';
    ctx.fillStyle = '#000000';
    ctx.textAlign="center";
    ctx.fillText(member.user.tag, 512, 410);
    ctx.beginPath(),
    ctx.arc(512,166,199 ,0 , Math.PI*2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avimg,393,47,238,238)
    // ctx.beginPath()
    // ctx.font = '60px sans-serif';
    // ctx.fillStyle = '#000000';
    // ctx.fillText(member.user.tag, canvas.width / 2.5, canvas.height / 1.8);
    // ctx.arc(125,125,100,0, Math.PI*2 , true)
    // ctx.closePath()
    // ctx.clip()
    // ctx.drawImage(avimg,25,25,200,200)
    const attachment = new Discord.AttachmentBuilder(canvas.toBuffer() , "welcome.png")
    return attachment
}

module.exports = canvas

