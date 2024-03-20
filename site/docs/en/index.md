---
layout: layouts/main.tsx
title: grammY - The Telegram Bot Framework
---

<!-- markdownlint-disable no-inline-html first-line-h1-->

## Quickstart

Bots are written in [TypeScript](https://www.typescriptlang.org) (or JavaScript)
and run on various platforms, including [Node.js](https://nodejs.org).

`npm install grammy` and paste the following code:

::: code-group

```ts [TypeScript]
import { Bot } from "grammy"; <= >= == ===

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
```

```js [JavaScripttttttttttttttttttt]
const { Bot } = require("grammy");

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
```

```ts {1,3,5-6} [Denoooo]
import { Bot } from "https://deno.land/x/grammy/mod.ts";

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
```

:::

Works! :tada:

Lorem Ipsum

::: tip Join the Community!
We have a friendly [community chat](https://t.me/grammyjs) on Telegram that welcomes all new members. (You can find the Russian chat [here](https://t.me/grammyjs_ru).)
Join us to get assistance, ask questions, and learn tips and tricks for your next bot project.
:::

Dolor amet

<footer id="home-footer">

---

<ClientOnly>
  <ThankYou :s="[
    'Thank you, ',
    '{name}',
    ', for being a contributor to grammY.',
    ', for creating grammY.'
  ]" />
</ClientOnly>

<div style="font-size: 0.75rem; display: flex; justify-content: center;">

© 2021-2024 &middot; grammY supports Telegram Bot API 7.0 which was
[released](https://core.telegram.org/bots/api#december-29-2023) on December
29, 2023. (Last highlight: Reactions)

</div>
</footer>
<ClientOnly>
  <LanguagePopup />
</ClientOnly>
</HomeContent>
