const Discord = require("discord.js");
const db = require("quick.db");

///HAZIRLAYANLAR Bhutal#4014

exports.run =  async (client, message, args) =>  { 
  ///HAZIRLAYANLAR Bhutal#4014
  
const  hesap =  await db.fetch(`hesap-${message.guild.id}`)
  const hesapdurumu = await db.fetch(`hesapdurum-${message.guild.id}`)
  const hesapisim = await db.fetch(`hesapisim_${message.guild.id}`);
  let kontrol = await db.fetch(`hesapisim_${message.author.id}`);

  
  if (kontrol) return message.channel.send('Bir Hesabın Bulunuyor.') 

let isim = args.slice(0).join(' ')

  if(!isim) return message.channel.send("Rol İsmini Girmelisin!")

db.set(`hesap-${message.author.id}`,"Başarıyla Hesabınız Açıldı!")
  db.set(`hesapisim_${message.author.id}`,isim)
  db.add(`para_${message.author.id}`, 2000)
  if(!hesap) return message.channel.send("Ödül Olarak Sana 2000 Dolar Vereceğim.") //sdsaassda
  
}///HAZIRLAYANLAR Bhutal#4014
exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "hesap-aç"
};
///HAZIRLAYANLAR Bhutal#4014