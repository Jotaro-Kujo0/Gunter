javascript
const axios = require("axios")
require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/gunter-hello", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Gawk-Gawk` });
});

app.command("/gunter-orgalorg", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `How do you know that?` });
});

app.command("/gunter-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/gunter-hello - Say hello to the bot
/gunter-help - Show this help message
/gunter-catfact - Get a cat fact
/gunter-ask - Ask the bot a question
/gunter-joke - Get a random joke
/gunter-latency - Check the bot's latency
/gunter-stardance - Get info about stardance
/gunter-quote - Get a random quote
/gunter-anime - Get a random anime recommendation 
/gunter-orgalorg - ???????????????


`
  });
});

app.command("/gunter-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/gunter-anime", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://api.jikan.moe/v4/random/anime");
    const anime = response.data.data;
    await respond({
      text: `Random Anime Recommendation:\nTitle: ${anime.title}\nURL: ${anime.url}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch an anime recommendation." });
  }
});

app.command("/gunter-quote", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://api.quotable.io/random");
    await respond({
      text: `Random Quote:\n"${response.data.content}" - ${response.data.author}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a quote." });
  }
});

app.command("/gunter-stardance", async ({ ack, respond }) => {
  await ack();

  try {
    await respond({
      text: "Stardance is a mysterious cosmic phenomenon that occurs in the depths of space. It's said to be a mesmerizing display of lights and colors, often associated with celestial events."
    });
  } catch (err) {
    await respond({ text: "Failed to provide information about stardance." });
  }
});

app.command("/gunter-ask", async ({ ack, respond }) => {
  await ack();

  try {
    await respond({
      text: "Wenk Wenk! I dont know that, Im a penguin! "
    });
  } catch (err) {
    await respond({ text: "Failed to respond." });
  }
});

app.command("/gunter-you-dont-know-who-you-are", async ({ ack, respond }) => {
  await ack();

  try {
    await respond({
      text: "Yes I do, I am a lyricist!"
    });
  } catch (err) {
    await respond({ text: "Failed to respond." });
  }
});

app.command("/gunter-grob-gob-glob-grod", async ({ ack, respond }) => {
  await ack();

  try {
    await respond({
      text: "Those scums are the worst, they are the worst, they are the worst, they are the worst!"
    });
  } catch (err) {
    await respond({ text: "Failed to respond." });
  }
});

app.command("/gunter-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}



${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});


app.command("/gunter-latency", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Latency: ${latency}ms` });
});

app.command("/gunter-orgalorg", async ({ ack, respond }) => {
  await ack();

  try {
    await respond({ text: "How do you know that..." });
  } catch (err) {
    await respond({ text: "Failed to respond." });
  }
});

app.command("/gunter-kitten", async ({ ack, respond }) => {
  await ack();

  try {
    await respond({ text: "My child, I wonder what happened to it." });
  } catch (err) {
    await respond({ text: "Failed to respond." });
  }
});