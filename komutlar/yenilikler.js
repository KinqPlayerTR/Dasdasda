const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Yenilikler**", `k+starwars Komutu Eklendi Bakmak İçin *k+yardım* Yazınız. \nk+mcserver Komutu Eklendi Bakmak İçin *k+yardım* Yazınız. \nazınız. \nk+kahkaha Komutu Eklendi Bakmak İçin *k+yardım* Yazınız.\n`)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'yenilikler'
};
