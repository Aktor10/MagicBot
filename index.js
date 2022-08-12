const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "MTAwNzAxNjYxMjE4NjAzMDEwMA.GpsPcq.Jsg_it6d0EKTWxyjgJPYLGuy1TofaAox0TDFVw",
  prefix: "m!",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.onMessage()

bot.status({
    text: "My prefix is: m!",
    type: "WATCHING",
    time: 12
  })
  
  bot.status({
    text: "Host: discloud.app",
    type: "PLAYING",
    time: 12
  })

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

bot.readyCommand({
    channel: "",
    code: `$log[Jestem gotowy! - $userTag[$clientID]]`
})