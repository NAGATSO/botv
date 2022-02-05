const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`ᴠɪᴘ ᴏꜰꜰɪᴄɪᴀʟ`, client.user.avatarURL())
  .setColor("RED")
  .setThumbnail(client.user.avatarURL())
  .setDescription("!!avatar <@kişi> : belirtilen kişi nini profil ini atar \n !!ban-log <#kanal> : Belirtilen kanal ban log olarak ayarlanır \n !!ban-yetkili-rol <@rol> : Belirtilen role botta banlama yetkisi verir \n !!ban <@kişi> sebep : Belirtilen kişiyi banlar \n !!saat : Güncel saati gösterir \n !sil <sayı> : Belirtilen sayı kadar mesaj siler \n !!korona : Günlük korona vakasını gösterir :")
  .addField("Açıklama" , "ᴠɪᴘ ᴏꜰꜰɪᴄɪᴀʟ")
  .setImage("https://cdn.discordapp.com/attachments/899844885698457700/937716276799873115/Comp_1_1.gif")
.setFooter("Yardım Menüsü", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}