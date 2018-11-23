const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor('0xff0000')
  .addField("**» Eğlence Komutları**", `k+atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \nk+starwars = StarWars (Pixel Formatında) Filmini Gösterir. \nk+banned = Dene ve Görk+ \nk+kahkaha = Kahkaha Atarsınız \nk+herkesebendençay = Herkese Çay Alırsınız. \nk+koş = Koşarsınız.\nk+çayiç = Çay İçersiniz. \nk+çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nk+çayaşekerat = Çaya Şeker Atarsınız. \nk+yumruk-at = Yumruk Atarsınız. \nk+şanslısayım = Bot Sizin Şanslı Sayınızı Söyler.`)
  .addField("**» Kullanıcı Komutları**", `k+report = İstediğiniz Kullanıcıyı Reportlarsınız. \nk+kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \nk+yaz = Bota İsediğinizi Yazdırırsınız. \nk+sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nk+sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nk+kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nk+avatarım = Avatarınınızı Gösterir. `)
  .addField("**» Oyun Komutları**", `Yakında = `)
  .addField("**» Sunucu Yetkilisi Komutları**", `k+ban = İstediğiniz Kişiyi Sunucudan Banlar. \nk+kick  = İstediğiniz Kişiyi Sunucudan Atar. \nk+unban = İstediğiniz Kişinin Yasağını Açar. \nk+sustur = İstediğiniz Kişiyi Susturur. \nk+sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nk+oylama = Oylama Açar. \nk+duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "k+yardım = BOT Komutlarını Atar. \nk+bilgi = BOT Kendisi Hakkında Bilgi Verir. \nk+ping = BOT Gecikme Süresini Söyler. \nk+davet = BOT Davet Linkini Atar. \nk+istatistik = BOT İstatistiklerini Gösterir.")
  .setFooter('KaptanBot Güncel Sürüm [ BETA v0.0.1 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
