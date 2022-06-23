const { MessageEmbed, MessageActionRow, MessageButton  } = require("discord.js");
const config = require('../config.json')

    exports.run = async(client, interaction) => {

    const embed = new MessageEmbed()
    const normal = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("KoçBurç")
          .setLabel("Koç Burç") // Button Yazı
          .setEmoji("971731841658794044") // Button Emoji
          .setStyle("DANGER")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("BoğaBurç")
          .setLabel("Boğa Burç") // Button Yazı
          .setEmoji("971731841658794044") // Button Emoji
          .setStyle("DANGER")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("İkizlerBurc")
          .setLabel("İkizler Burc") // Button Yazı
          .setEmoji("971731841658794044") // Button Emoji
          .setStyle("DANGER")
      )
          .addComponents(
        new MessageButton()
          .setCustomId("YengeçBurç")
          .setLabel("Yengeç Burç") // Button Yazı
          .setEmoji("971731841658794044") // Button Emoji
          .setStyle("DANGER")
      );
      const ney = new MessageActionRow()
          .addComponents(
        new MessageButton()
          .setCustomId("AslanBurç")
          .setLabel("Aslan Burç") // Button Yazı
          .setEmoji("971731841658794044") // Button Emoji
          .setStyle("DANGER")
      )
  
    .addComponents(
        new MessageButton()
        .setCustomId("BaşakBurç")
        .setLabel("Başak Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    )
    .addComponents(
        new MessageButton()
        .setCustomId("TeraziBurç")
        .setLabel("Terazi Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    )
    .addComponents(
        new MessageButton()
        .setCustomId("YayBurç")
        .setLabel("Yay Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    )    
     const burc = new MessageActionRow()  
    .addComponents(
        new MessageButton()
        .setCustomId("AkrepBurç")
        .setLabel("Akrep Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    )  
   
          .addComponents(
        new MessageButton()
        .setCustomId("OğlakBurç")
        .setLabel("Oğlak Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    )

    .addComponents(
        new MessageButton()
        .setCustomId("KovaBurç")
        .setLabel("Kova Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    )

    .addComponents(
        new MessageButton()
        .setCustomId("BalıkBurç")
        .setLabel("Balık Burç") // Button Yazı
        .setEmoji("971731841658794044") // Button Emoji
        .setStyle("DANGER")
    );

//----------------------------| Embedsiz Mesaj /----------------------------//

client.channels.cache.get(config.Kanal.burcrolKanal).send({ content: `Burç Rollerini Almak İçin Aşağıdaki Butona Tıklayınız`, components: [normal,ney,burc]})


    }
    
    exports.config = {
        name: "burc",
        aliases: []
    };

    