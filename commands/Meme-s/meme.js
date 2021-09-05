const { MessageAttachment } = require("discord.js");
const { get } = require("snekfetch");

module.exports = {
  name: "meme",
  guildOnly: true,
  cooldown: 6,
  permissions: "ATTACH_FILES",
  description: "Sends meme with file attachment!",
  category: "Meme-s",
  execute(message, args) {
    try {
      get("https://www.reddit.com/r/memes/random.json").then((res) => { 
        //let json = JSON.parse(res.body);
        (res.body);
        let json = res.body;

        // let topPost = json.data.children[0].data.url;
        let img = json[0].data.children[0].data.url;

        return message.channel.send(img);
      });
    } catch (err) {
      return message.channel.send(err);
    }
  },
};
