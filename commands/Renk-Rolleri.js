const { MessageEmbed, MessageActionRow, MessageButton  } = require("discord.js");
const config = require('../config.json')

    exports.run = async(client, interaction) => {

    const embed = new MessageEmbed()
    const normal = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("SarıRenk")
          .setLabel("Sarı Renk") // Button Yazı
          .setEmoji("971731833853194330") // Button Emoji
          .setStyle("DANGER")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("MorRenk")
          .setLabel("Mor Renk") // Button Yazı
          .setEmoji("971731833853194330") // Button Emoji
          .setStyle("DANGER")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("MaviRenk")
          .setLabel("Mavi Renk") // Button Yazı
          .setEmoji("971731833853194330") // Button Emoji
          .setStyle("DANGER")
      )
          .addComponents(
        new MessageButton()
          .setCustomId("TuruncuRenk")
          .setLabel("Turuncu Renk") // Button Yazı
          .setEmoji("971731833853194330") // Button Emoji
          .setStyle("DANGER")
      )
          .addComponents(
        new MessageButton()
          .setCustomId("YeşilRenk")
          .setLabel("Yeşil Renk") // Button Yazı
          .setEmoji("971731833853194330") // Button Emoji
          .setStyle("DANGER")
      );
    const boost = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("BeyazRenk")
        .setLabel("Beyaz Renk") // Button Yazı
        .setEmoji("971731833853194330") // Button Emoji
        .setStyle("DANGER")
    )
    .addComponents(
        new MessageButton()
        .setCustomId("KırmızıRenk")
        .setLabel("Kırmızı Renk") // Button Yazı
        .setEmoji("971731833853194330") // Button Emoji
        .setStyle("DANGER")
    )
    .addComponents(
        new MessageButton()
        .setCustomId("KahveRenk")
        .setLabel("Kahve Renk") // Button Yazı
        .setEmoji("971731833853194330") // Button Emoji
        .setStyle("DANGER")
    )
          .addComponents(
        new MessageButton()
        .setCustomId("SiyahRenk")
        .setLabel("Siyah Renk") // Button Yazı
        .setEmoji("971731833853194330") // Button Emoji
        .setStyle("DANGER")
    );

//----------------------------| Embedsiz Mesaj /----------------------------//

// NOT EĞER TEK KANALDA OLSUN DİYORSANIZ BUNU KAPATMAYIN 
client.channels.cache.get(config.Kanal.RenkRolKanal).send({ content: `Renk Rollerini Almak İçin Aşağıdaki Butona Tıklayınız`, components: [normal,boost]})
    
//----------------------------| Embedli Mesaj /----------------------------//

/* client.channels.cache.get(config.Kanal.RenkRolKanal).send({ embeds: [embed.setDescription(`
Tüm Üyeler İçin:

💛 = <@&${config.roles.sarıRenk}>
💜 = <@&${config.roles.morRenk}>
💙 = <@&${config.roles.maviRenk}>
🧡 = <@&${config.roles.turuncuRenk}>
💚 = <@&${config.roles.yeşilRenk}>


`).setColor('DARK_AQUA').setFooter(config.bot.footer)], components: [normal]}) */

//----------------------------| Embedsiz Mesaj /----------------------------//

// NOT EĞER BOOSTER FARKLI KANALDA OLSUN DİYORSANIZ BUNU AÇIP YUKARDAKİ NORMAL,BOOST YAZAN BOOST'U SİLİN
//client.channels.cache.get(config.Kanal.BoosterRenkRolKanal).send({ content: `Boosterlere Özel Renk Rollerini Almak İçin Aşağıdaki Butona Tıklayınız`, components: [boost]})


//----------------------------| Embedli Mesaj /----------------------------//
/*
     client.channels.cache.get(config.Kanal.BoosterRenkRolKanal).send({ embeds: [embed.setDescription(`

Boost Basanlara Özel:

🤍 = <@${config.roles.beyazRenk}>
❤️ = <@&${config.roles.kırmızıRenk}>
🤎 = <@&${config.roles.kahveRenk}>
🖤 = <@&${config.roles.siyahRenk}>
`).setColor('DARK_AQUA').setFooter(config.bot.footer)], components: [ boost]})

    */

    }
    
    exports.config = {
        name: "renk",
        aliases: []
    };

    