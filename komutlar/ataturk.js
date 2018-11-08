const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + `  Atatürk u Çok Sevmiş Olmalı.`)
    .setColor("#D2D2D2")
    .setDescription('')
  .setImage(`https://imgur.com/cCOhWy1`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ataturk'],
  permLevel: 0
};

exports.help = {
  name: 'ataturk',
  description: 'Atatürkü Gösterir',
  usage: 'ataturk'
};
