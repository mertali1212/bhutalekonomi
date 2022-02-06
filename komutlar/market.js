const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply(`Markettekiler: `)
  
  if (args[0] === 'İphone') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyatcık = 1000
    
    if (para < fiyatcık) return message.reply('Paran Yetmiyor!')
    
    db.set(`ìştebişiler_${message.author.id}`, "İşte Eşya")
    db.add(`para_${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'mağza'
}