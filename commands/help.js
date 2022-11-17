const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor("lista de ajuda")
    .setTitle("Lista de comandos e guia para o bot")
    .setDescription(
      "Abaixo estão os comandos que você pode fazer com o Bot."
    )
    .addField(
      "Backup Commands",
     "Say [x!info-backup(id)]"
    )

    .addField(
      "Backup Load Commands",
      "Say [x!load-backup]"
    )

    .addField(
      "Backup create Commands",
      "Say [x!make-backup]"
    )
 
    .addField("? Em formação ?", "stats", true)
    .addField("Link de convite de bot!", "[Convide-me para o seu servidor!](https://discord.com/oauth2/authorize?client_id=967542704596734032&permissions=8&scope=bot)")
    .setTimestamp()
    .setFooter(
      `Comando solicitado por ${message.author.tag}`,
      client.user.displayAvatarURL(),
      message.delete()
    );
  message.channel.send(help);

};

module.exports.help = {
  name: "help"
};