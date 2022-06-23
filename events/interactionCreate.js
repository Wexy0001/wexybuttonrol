const config = require('../config.json')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = (client, Discord) => {

    client.on('interactionCreate', async (interaction) => {

        if (!interaction.isButton()) return;

        if (interaction.customId === "cekilis") {

            const user = interaction.guild.members.cache.get(interaction.user.id)
            if (user.roles.cache.has(config.roles.cekilis)) return;

            await user.roles.add(config.roles.cekilis).catch()

            interaction.reply({content: `Başarılı bir şekilde <@&${config.roles.cekilis}> rolünü aldın. Artık çekiliş bildirimlerini alacaksın.`, ephemeral: true }).catch((e) => console.log(e))

        } else if  (interaction.customId === "etkinlik") {

            const user = interaction.guild.members.cache.get(interaction.user.id)
            if (user.roles.cache.has(config.roles.etkinlik)) return;
            
            await user.roles.add(config.roles.etkinlik).catch()

            interaction.reply({content: `Başarılı bir şekilde <@&${config.roles.etkinlik}> rolünü aldın. Artık etkinlik bildirimlerini alacaksın.`, ephemeral: true }).catch((e) => console.log(e))
        }
    
    

    client.on('interactionCreate', async (interaction) => {

        if (!interaction.isCommand()) {
            if (interaction.customId === "SarıRenk") {
  
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
          
              if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { 
            interaction.member.roles.remove(config.roles.sarıRenk)
   interaction.reply({ content: `<@&${config.roles.sarıRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.sarıRenk) 
   interaction.reply({ content: `<@&${config.roles.sarıRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
  
                  if (interaction.customId === "MorRenk") {
        if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
  
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { 
            interaction.member.roles.remove(config.roles.morRenk)
   interaction.reply({ content: `<@&${config.roles.morRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.morRenk) 
   interaction.reply({ content: `<@&${config.roles.morRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
  
                  if (interaction.customId === "MaviRenk") {
        if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
              
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { 
            interaction.member.roles.remove(config.roles.maviRenk)
   interaction.reply({ content: `<@&${config.roles.maviRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.maviRenk) 
   interaction.reply({ content: `<@&${config.roles.maviRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
  
                  if (interaction.customId === "TuruncuRenk") {
        if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
  
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { 
            interaction.member.roles.remove(config.roles.turuncuRenk)
   interaction.reply({ content: `<@&${config.roles.turuncuRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.turuncuRenk) 
   interaction.reply({ content: `<@&${config.roles.turuncuRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
  
                  if (interaction.customId === "YeşilRenk") {
        if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
  
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { 
            interaction.member.roles.remove(config.roles.yeşilRenk)
   interaction.reply({ content: `<@&${config.roles.yeşilRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.yeşilRenk) 
   interaction.reply({ content: `<@&${config.roles.yeşilRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
  
  //---------------------------| Boosterlara Özel Renk Seçim |----------------------------//
  
  
                  if (interaction.customId === "KahveRenk") {
          if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
  
  
        if(!interaction.member.roles.cache.has(config.roles.BooterRol)) return  interaction.reply({ content: `<@&${config.roles.kahveRenk}> Permi Boosterlere Özeldir!`, ephemeral: true });
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { 
            interaction.member.roles.remove(config.roles.kahveRenk)
   interaction.reply({ content: `<@&${config.roles.kahveRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.kahveRenk) 
   interaction.reply({ content: `<@&${config.roles.kahveRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
  
  
                if (interaction.customId === "BeyazRenk") {
            if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
  
              if(!interaction.member.roles.cache.has(config.roles.BooterRol)) return  interaction.reply({ content: `<@&${config.roles.beyazRenk}> Permi Boosterlere Özeldir!`, ephemeral: true });
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { 
            interaction.member.roles.remove(config.roles.beyazRenk)
   interaction.reply({ content: `<@&${config.roles.beyazRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.beyazRenk) 
   interaction.reply({ content: `<@&${config.roles.beyazRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
                  if (interaction.customId === "KırmızıRenk") {
          if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { interaction.member.roles.remove(config.roles.siyahRenk) }
              
  
  
                if(!interaction.member.roles.cache.has(config.roles.BooterRol)) return  interaction.reply({ content: `<@&${config.roles.kırmızıRenk}> Permi Boosterlere Özeldir!`, ephemeral: true });
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { 
            interaction.member.roles.remove(config.roles.kırmızıRenk)
   interaction.reply({ content: `<@&${config.roles.kırmızıRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.kırmızıRenk) 
   interaction.reply({ content: `<@&${config.roles.kırmızıRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
                  if (interaction.customId === "SiyahRenk") {
            if(interaction.member.roles.cache.has(config.roles.sarıRenk)) { interaction.member.roles.remove(config.roles.sarıRenk) }
              if(interaction.member.roles.cache.has(config.roles.morRenk)) { interaction.member.roles.remove(config.roles.morRenk) }
              if(interaction.member.roles.cache.has(config.roles.maviRenk)) { interaction.member.roles.remove(config.roles.maviRenk) }
              if(interaction.member.roles.cache.has(config.roles.turuncuRenk)) { interaction.member.roles.remove(config.roles.turuncuRenk) }
              if(interaction.member.roles.cache.has(config.roles.yeşilRenk)) { interaction.member.roles.remove(config.roles.yeşilRenk) }
              if(interaction.member.roles.cache.has(config.roles.kahveRenk)) { interaction.member.roles.remove(config.roles.kahveRenk) }
              if(interaction.member.roles.cache.has(config.roles.beyazRenk)) { interaction.member.roles.remove(config.roles.beyazRenk) }
              if(interaction.member.roles.cache.has(config.roles.kırmızıRenk)) { interaction.member.roles.remove(config.roles.kırmızıRenk) }
  
              if(!interaction.member.roles.cache.has(config.roles.BooterRol)) return  interaction.reply({ content: `<@&${config.roles.BooterRol}> Permi Boosterlere Özeldir!`, ephemeral: true });
              if(interaction.member.roles.cache.has(config.roles.siyahRenk)) { 
            interaction.member.roles.remove(config.roles.siyahRenk)
   interaction.reply({ content: `<@&${config.roles.siyahRenk}> Permi Üzerinizden Alındı.`, ephemeral: true });
  } else { interaction.member.roles.add(config.roles.siyahRenk) 
   interaction.reply({ content: `<@&${config.roles.siyahRenk}> Permi Üzerinize Verildi.`, ephemeral: true });
  }
            }
        
  
  
    


//---------------------------| Burç Rol Seçim |----------------------------//


client.on('interactionCreate', async (interaction) => {

    if (!interaction.isCommand()) {
        if (interaction.customId === "KoçBurç") {

          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          
      
          if(interaction.member.roles.cache.has(config.roles.koçBurç)) { 
        interaction.member.roles.remove(config.roles.koçBurç)
interaction.reply({ content: `<@&${config.roles.koçBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.koçBurç) 
interaction.reply({ content: `<@&${config.roles.koçBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }

              if (interaction.customId === "BoğaBurç") {
    if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          

          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { 
        interaction.member.roles.remove(config.roles.boğaBurç)
interaction.reply({ content: `<@&${config.roles.boğaBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.boğaBurç) 
interaction.reply({ content: `<@&${config.roles.boğaBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }

              if (interaction.customId === "İkizlerBurc") {
    if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          
          
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { 
        interaction.member.roles.remove(config.roles.ikizlerBurç)
interaction.reply({ content: `<@&${config.roles.ikizlerBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.ikizlerBurç) 
interaction.reply({ content: `<@&${config.roles.ikizlerBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }

              if (interaction.customId === "YengeçBurç") {
    if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          

          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { 
        interaction.member.roles.remove(config.roles.yengeçBurç)
interaction.reply({ content: `<@&${config.roles.yengeçBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.yengeçBurç) 
interaction.reply({ content: `<@&${config.roles.yengeçBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }

              if (interaction.customId === "AslanBurç") {
    if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          

          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { 
        interaction.member.roles.remove(config.roles.aslanBurç)
interaction.reply({ content: `<@&${config.roles.aslanBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.aslanBurç) 
interaction.reply({ content: `<@&${config.roles.aslanBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }


              if (interaction.customId === "BaşakBurç") {
      if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          


    
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { 
        interaction.member.roles.remove(config.roles.başakBurç)
interaction.reply({ content: `<@&${config.roles.başakBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.başakBurç) 
interaction.reply({ content: `<@&${config.roles.başakBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }


            if (interaction.customId === "TeraziBurç") {
        if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          

          
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { 
        interaction.member.roles.remove(config.roles.teraziBurç)
interaction.reply({ content: `<@&${config.roles.teraziBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.teraziBurç) 
interaction.reply({ content: `<@&${config.roles.teraziBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }
              if (interaction.customId === "YayBurç") {
      if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { interaction.member.roles.remove(config.roles.oğlakBurç) }
          


            
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { 
        interaction.member.roles.remove(config.roles.yayBurç)
interaction.reply({ content: `<@&${config.roles.yayBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.yayBurç) 
interaction.reply({ content: `<@&${config.roles.yayBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }
              if (interaction.customId === "OğlakBurç") {
        if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
          if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
          if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
          if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
          if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
          if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
          if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
          if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }

          
          if(interaction.member.roles.cache.has(config.roles.oğlakBurç)) { 
        interaction.member.roles.remove(config.roles.oğlakBurç)
interaction.reply({ content: `<@&${config.roles.oğlakBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(config.roles.oğlakBurç) 
interaction.reply({ content: `<@&${config.roles.oğlakBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
}
        }

        if (interaction.customId === "KovaBurç") {
            if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
              if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
              if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
              if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
              if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
              if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
              if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
              if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
    
              
              if(interaction.member.roles.cache.has(config.roles.kovaBurç)) { 
            interaction.member.roles.remove(config.roles.kovaBurç)
    interaction.reply({ content: `<@&${config.roles.kovaBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
    } else { interaction.member.roles.add(config.roles.kovaBurç) 
    interaction.reply({ content: `<@&${config.roles.kovaBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
    }
            }

            if (interaction.customId === "AkrepBurç") {
                if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
                  if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
                  if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
                  if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
                  if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
                  if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
                  if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
                  if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
        
                  
                  if(interaction.member.roles.cache.has(config.roles.akrepBurç)) { 
                interaction.member.roles.remove(config.roles.akrepBurç)
        interaction.reply({ content: `<@&${config.roles.akrepBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
        } else { interaction.member.roles.add(config.roles.akrepBurç) 
        interaction.reply({ content: `<@&${config.roles.akrepBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
        }
                }

            if (interaction.customId === "BalıkBurç") {
                if(interaction.member.roles.cache.has(config.roles.koçBurç)) { interaction.member.roles.remove(config.roles.koçBurç) }
                  if(interaction.member.roles.cache.has(config.roles.boğaBurç)) { interaction.member.roles.remove(config.roles.boğaBurç) }
                  if(interaction.member.roles.cache.has(config.roles.ikizlerBurç)) { interaction.member.roles.remove(config.roles.ikizlerBurç) }
                  if(interaction.member.roles.cache.has(config.roles.yengeçBurç)) { interaction.member.roles.remove(config.roles.yengeçBurç) }
                  if(interaction.member.roles.cache.has(config.roles.aslanBurç)) { interaction.member.roles.remove(config.roles.aslanBurç) }
                  if(interaction.member.roles.cache.has(config.roles.başakBurç)) { interaction.member.roles.remove(config.roles.başakBurç) }
                  if(interaction.member.roles.cache.has(config.roles.teraziBurç)) { interaction.member.roles.remove(config.roles.teraziBurç) }
                  if(interaction.member.roles.cache.has(config.roles.yayBurç)) { interaction.member.roles.remove(config.roles.yayBurç) }
        
                  
                  if(interaction.member.roles.cache.has(config.roles.balıkBurç)) { 
                interaction.member.roles.remove(config.roles.balıkBurç)
        interaction.reply({ content: `<@&${config.roles.balıkBurç}> Permi Üzerinizden Alındı.`, ephemeral: true });
        } else { interaction.member.roles.add(config.roles.balıkBurç) 
        interaction.reply({ content: `<@&${config.roles.balıkBurç}> Permi Üzerinize Verildi.`, ephemeral: true });
        }
                }
    
}})}})})}


           