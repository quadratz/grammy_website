---
layout: layouts/home.vto
---

<!-- markdownlint-disable no-inline-html first-line-h1-->

## Quickstart

Bots are written in [TypeScript](https://www.typescriptlang.org) (or JavaScript)
and run on various platforms, including [Node.js](https://nodejs.org).

`npm install grammy` and paste the following code:

::: code-group

```ts [TypeScript]
import { Bot } from "grammy";

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
```

```js [JavaScript]
const { Bot } = require("grammy");

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
```

```ts [Deno]
import { Bot } from "https://deno.land/x/grammy/mod.ts";

const bot = new Bot(""); // <-- put your bot token between the "" (https://t.me/BotFather)

// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));

bot.start();
```

:::

Works! :tada:

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
