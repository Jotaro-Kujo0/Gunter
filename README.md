# Gunter

Gunter from Adventure time here with you on slack! Its a Slack bot built with Node.js and the Slack Bolt framework. Created to mimic gunter in the form of a slack bot.

## Gunter can;

- Responds to custom Slack slash commands (crazy right)
- Fetches cat facts, jokes, quotes, and anime recommendations from external APIs
- Supports simple built-in bot interactions
- Uses Socket Mode for Slack connectivity
- Contains few easteraggs from the actual show.

## Available Commands

- `/gunter-hello` - Shows an hello message
- `/gunter-help` - Show help text with available commands
- `/gunter-catfact` - Get a cat fact
- `/gunter-joke` - Get a random joke
- `/gunter-latency` - Check the bot's latency
- `/gunter-stardance` - Get a stardance info message
- `/gunter-quote` - Get a random quote
- `/gunter-anime` - Get a random anime recommendation

- `/gunter-you-dont-know-who-you-are` - Reference to the actual show
- `/gunter-grob-gob-glob-grod` - Fun response command
- `/gunter-orgalorg` - ????????
- `/gunter-kitten` - Gunter's little kid
=======
- `/gunter-orgalorg` - Secret response command
- `/gunter-u-dont-know-who-you-are` - Does gunter know who he is!?
- `/gunter-you-dont-know-who-you-are` - Alias for the same lyric reference
- `/gunter-grob-gob-glob-grod` - Fun response command
- `/gunter-kitten` - Gunter's little



## Requirements

- Node.js 18+ or compatible
- Slack app configured with Socket Mode enabled
- Slack bot token and app token

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with the following values:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
```


## Running the bot

```bash
node index.js
```

## Notes from me

- This project uses `@slack/bolt` for Slack app handling
- External APIs used:
  - `catfact.ninja`
  - `official-joke-api.appspot.com`
  - `zenquotes.io`
  - `api.jikan.moe`

In the mean time you can test out this bot without downloading via slack hack club workspace! I will deploy it there, don't forget to check it out!

If you dont feel it doesnt capture the soul of gunter or you have a comment about this bot, you can always message me at @Boyra_Zeren_ on slack!
