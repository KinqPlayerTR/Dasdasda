const Command = require('../../structures/Command');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../../util/Util');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatarım',
 description: 'Avatarınızı Atar ',
 usage: 'avatarım'
};
