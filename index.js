require('dotenv').config();
const { Telegraf } = require('telegraf');
const express = require('express');
const mongoose = require('mongoose');
const { TONClient } = require('ton-client-node-js');
const User = require('./models/User');

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Telegram bot commands
bot.start((ctx) => {
  ctx.reply('Welcome! Please register by providing your wallet address.');
  // Registration logic
});

bot.command('my_garden', async (ctx) => {
  const user = await User.findOne({ username: ctx.message.from.username });
  if (user) {
    ctx.reply(`Your garden: ${JSON.stringify(user.garden)}`);
  } else {
    ctx.reply('You need to register first!');
  }
});

bot.command('plant', (ctx) => {
  // Plant microgreens logic
  ctx.reply('You planted some microgreens!');
});

bot.command('sell', (ctx) => {
  // List microgreens for sale logic
  ctx.reply('You listed your microgreens for sale!');
});

bot.command('refer', async (ctx) => {
  const user = await User.findOne({ username: ctx.message.from.username });
  if (user) {
    ctx.reply(`Your referral link: https://t.me/your_bot?start=${user._id}`);
  } else {
    ctx.reply('You need to register first!');
  }
});

// Start bot and server
bot.launch();
app.listen(port, () => console.log(`Server running on port ${port}`));
