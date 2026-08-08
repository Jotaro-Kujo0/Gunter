require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/gunter-hello", async ({ ack, respond }) => {
  await ack();
  await respond({ text: "Gawk-Gawk" });
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
/gunter-grob-gob-glob-grod - See what Gunter thinks about them.
/gunter-orgalorg - ???????????????`
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
    const response = await axios.get("https://zenquotes.io/api/random");
    const quote = response.data[0]; // zenquotes returns an array
    await respond({ text: `Random Quote:\n"${quote.q}" - ${quote.a}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a quote." });
  }
});

app.command("/gunter-stardance", async ({ ack, respond }) => {
  await ack();
  await respond({
    text: "Stardance is a Hack Club event that this project was made for. Go check it out!"
  });
});

app.command("/gunter-ask", async ({ ack, respond }) => {
  await ack();
  await respond({ text: "Wenk Wenk! I dont know that, Im a penguin! " });
});

app.command("/gunter-you-dont-know-who-you-are", async ({ ack, respond }) => {
  await ack();
  await respond({ text: "Yes I do, I am a lyricist!" });
});

app.command("/gunter-grob-gob-glob-grod", async ({ ack, respond }) => {
  await ack();
  await respond({ text: "Those scums are the worst, they are the worst, they are the worst, they are the worst!" });
});

app.command("/gunter-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({ text: `${response.data.setup}\n${response.data.punchline}` });
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
  await respond({ text: "How do you know that... ?" });
});

app.command("/gunter-kitten", async ({ ack, respond }) => {
  await ack();
  await respond({ text: "My child, I wonder what happened to it." });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
