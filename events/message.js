module.exports = (Bot, message, member) => {
const prefix = "&" ;
  // Ignore all bots
  if (message.author.bot) return;
  if (message.channel === "dm") return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // Grab the command data from the Bot.commands Enmap
  let cmd_map = Bot.commands.get(command)
  var cmd = Bot.commands.get(command) || Bot.aliases.get(command);
  if(cmd === "None") {
    console.log(`Heh ${message.author} is a dumbfuck, he tried to use None as a command!`)
  }
  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return message.reply("That is not a valid command.");
  // Run the command
 cmd.run(Bot, message, args);
};
