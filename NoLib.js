// Public Release
const Discord = require('discord.js');
// By NicoDev#6666
// Change bot with client if you prefer!
const bot = new Discord.Client();
function Send(msg) {
    message.channel.send(msg);
}
function Reply(msg) {
    message.reply(msg);
}
function isBannable(userid) {
    if (message.guild.members.get(userid).bannable) return true;
    else
    return false;
}
function isKickable(userid) {
    if (message.guild.members.get(userid).kickable) return true;
    else
    return false;
}
function getID(author, mention) {
    if (author) return message.author.id;
    if (mention) return message.mentions.user.first().id;
}
function Restart(token) {
    if (!token) return "Couldn't LogIn due to Missing Token";
    bot.destroy();
    delay(1000);
    bot.login(token);
    return "[!] Succesfully Restarted";
}
function DM(userid, msg) {
    bot.users.get(userid).send(msg);
}
function Embed(embedname, author, title, description, color, footer) {
    let embedname = new Discord.RichEmbed()
    embedname.setAuthor(author)
    embedname.setTitle(title)
    embedname.setDescription(description)
    embedname.setColor(color)
    embedname.setFooter(footer)
    Send(embedname);
}
function Start(token) {
    bot.login(token);
    console.log("[+] Bot Succesfully Started! Thanks for using NoLib! By NicoDev#6666");
}
function Destroy() {
    bot.destroy();
    console.log("[!] Bot Destroyed!")
}
function Bool(codetoboolean) {
    Boolean(codetoboolean);
}
function Stringy(x) {
    x.toString();
}
function Uppy(x) {
    x.toUpperCase();
}
function Lowy(x) {
    x.toLowerCase();
}
function isBot(userid) {
    if (message.guild.members.get(userid).bot) return true;
    else
    return false;
}
function hasAdmin(userid) {
    if (message.guild.members.get(userid).hasPermission("ADMINISTRATOR")) return true;
    else
    return false;
}
function hasPerm(userid, permission) {
    if (message.guild.members.get(userid).hasPermission(permission)) return true;
    else
    return false;
}
function hasID(userid, whichid) {
    if (userid == whichid) return true;
    else 
    return false;
}
function hasMsgPrefix(msg, prefix) {
    if (msg.startsWith(prefix)) return true;
    else 
    return false;
}
function setStatus(status) {
    bot.user.setActivity(status);
}
function getHighestPosition(userid) {
    return message.guild.members.get(userid).highestRole.position;
}
function Ping() {
    return Math.round(bot.ping);
}
