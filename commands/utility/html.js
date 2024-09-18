const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("html")
    .setDescription("Replies how can it help with HTML problems"),
  async execute(interaction) {
    await interaction.reply(
      "Hey, HTML is not that hard, even a baby could do it! Do you need help writing a <h1> element?"
    );
  },
};
