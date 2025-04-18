const keep_alive = require('./keep_alive.js')
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req,res) => res.send('satus up.'))
app.listen(port, ()  => console.log('your app is listening http://localhost:${port}')
);



const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
  if (msg.content === 'Ping') {
    msg.channel.send('Pong');
  }
});

const mySecret = process.env['TOKEN']
console.log(mySecret);
client.login(mySecret);
