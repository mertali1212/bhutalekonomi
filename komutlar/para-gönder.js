const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.members.first() 
if (!kişi) return message.reply('Kişi Belirt')

  let parası = await db.fetch(`para_${kişi.id}`) 
  let hesap =  await db.fetch(`hesap-${message.guild.id}`)
  
  if (kişi.bot) return message.reply('Botlara Para Yollayamazsın!')
    if (kişi.id === message.author.id) return message.reply('Kendine Para Gönderemezssin')

let paragönderme = args.slice(1).join(' ')

if (!paragönderme) return message.reply('Miktar Belirtiniz')
  
  ///yenı komut yerı acıyorum tamam
  if (isNaN(paragönderme)) return message.reply('Bir Sayı Belirtmelisin')
  
  if (parası < paragönderme) return message.reply('Bukadar Paran Bulunmuyor!')

  
  db.add(`para_${kişi.id}`, paragönderme)
  db.add(`para_${message.author.id}`, -paragönderme)
  return message.reply(`${kişi} Bu Kişiye ${paragönderme} Dolar Gönderdin Şuanki Paran ${paragönderme}`)
  
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {

  name: 'para-yolla'
};
