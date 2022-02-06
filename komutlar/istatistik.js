const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,false)
  .addField(`:incoming_envelope: » Yapımcım` ,`Bhutal#4014`,true)
  .addField(`:label: » Versyon`, `${process.version}`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Otorolü Ayarlar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 