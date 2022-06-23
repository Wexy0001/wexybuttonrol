const Discord = require('discord.js')
const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
const config = require('../config.json')

exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return
  
  


  var row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setCustomId("etkinlik")
    .setLabel(`Etkinlik Katılımcısı!`)
    .setEmoji('🎉')
    .setStyle("DANGER"),

    new MessageButton()
    .setCustomId("cekilis")
    .setLabel(`Çekiliş Katılımcısı!`)
    .setEmoji('🎁')
    .setStyle(`DANGER`)
  )

  //await message.channel.send({content: mesaj, components: [row]}).catch((e) => {console.log(e)})
  client.channels.cache.get(config.Kanal.EtkinlikRolKanal).send({ content: `Aşağıda bulunan butonlardan **Etkinlik Katılımcısı** & **Çekiliş Katılımcısı** alarak Sunucumuzdaki Çekilişlerden Veya Etkinliklerden Haberdar Olabilirsin.`, components: [row]})
}

exports.config = {
    name: "etkinlik",
    aliases: []
};
