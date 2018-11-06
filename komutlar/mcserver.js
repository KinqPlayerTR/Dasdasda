const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../../util/Util');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('KraliyetBOT Bot Minecraft Suncusu \n KraliyetNW.AxiTRBilisim.com Beta \n İşte Davet Linkim: https://bit.ly/KraliyetBOT \n KraliyetBOT Destek Discord Sunucusu  \nhttps://discord.gg/T3mjQqy');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'mcserver',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'mcserver'
};
