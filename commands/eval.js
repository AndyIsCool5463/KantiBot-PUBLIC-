const settings = require('../settings.json')
exports.run = async (Bot, message, args) => { // eslint-disable-line no-unused-vars
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;

    //     if(message.author.id !== '201825529333153792') return;
         try {
           const code = args.join(" ");
           let evaled = eval(code);

           if (typeof evaled !== "string")
             evaled = require("util").inspect(evaled);

           message.channel.send(clean(evaled), {code:"xl"});
         } catch (err) {
           message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
         }


}
};
exports.help = {
  name: "eval",
  category: "System",
  description: "Evaluates arbitrary javascript.",
  usage: "eval [...code]",
  permission: "ADMINISTRATOR",
  alias: "None"
};
module.exports.settings = {
    disabled: false
}