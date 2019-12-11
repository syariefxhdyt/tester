const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
{
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: false
})

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Guild HALU🌛 Lurde",
            type: "STREAMING"
        }
    }); 
})
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'halo') {
    msg.reply('Halo Juga Lurde');
  }
  if (msg.content === 'assalamualaikum') {
    msg.reply('Waalaikumsalam Wr Wb Lurde :pray: ');
  }
  if (msg.content === 'ajg') {
    msg.reply('Mulut anda kotor Lurde!!');
  }
  if (msg.content === 'malem') {
    msg.reply('Malem juga Lurde');
  }
  if (msg.content === 'siang') {
    msg.reply('Siang juga Lurde');
  }
  if (msg.content === 'jancuk') {
    msg.reply('LOHE LOHE KASAR WKWKWKWKWK');
  }
  if (msg.content === 'bgsd') {
    msg.reply('unchh Suka deh WKOWKOWOWOW');
  }
  if (msg.content === 'ges') {
    msg.reply('iya ges ada apa ?');
  }
  if (msg.content === 'guys') {
    msg.reply('iya guys ada apa ?');
  }
});
client.on("message", async message => {
    const prefix = ",";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(process.env.TOKEN);
}