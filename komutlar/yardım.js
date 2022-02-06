const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .setColor('WHİTE')
    .addField(':small_red_triangle_down:','`v!hesap-aç : Banka Hesap Açar (+2000 Vice Doları Verir) `')
    .addField(':small_red_triangle_down:','`v!hesabımı-sil : Banka Hesabınızı Siler`')
    .addField(':small_red_triangle_down:','`v!hesabım : Banka Hesabınız Hakkında Bilgi Verir`')
    .addField(':small_red_triangle_down:','`v!para-yolla : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir`')
    .addField(':small_red_triangle_down:','`v!market : Markteti Gösterir`')
    .addField(':small_red_triangle_down:','`v!bilgi : Botunuzun İstatistiklerini Gösterir`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/934028119269068841/939873030228832286/download.png') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y'],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};