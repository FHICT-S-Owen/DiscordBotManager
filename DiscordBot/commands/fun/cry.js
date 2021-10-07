const discord = require(`discord.js`);
const { Random } = require(`something-random-on-discord`);
const random = new Random();

module.exports = {
  name: `cry`,
  category: `fun`,
  description: `Cry with gif`,
  run: async (client, message) => {
    const data = await random.getAnimeImgURL(`cry`);
    const embed = new discord.MessageEmbed()
      .setImage(data)
      .setColor(`RANDOM`)
      .setFooter(`Please talk with ${message.author.username} they are crying`)
      .setTimestamp();
    
    message.channel.send(embed);
  }
};