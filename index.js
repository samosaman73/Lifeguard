//const keepAlive = require('./server.js');

const TOKEN = process.env['TOKEN']

const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "",
  prefix: "|",
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.status({
  text: "version 23.1.3",
  type: "PLAYING",
  status: "onlne",
  url: "https://www.twitch.tv/samosaman73",
  time: 12
})

bot.onMessage()
bot.onJoin()
bot.onLeave()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

const {Panel} = require("@akarui/aoi.panel")

const panel = new Panel({
    username: "samosa",//username for logging in
    password: "SamosaDev22",//password for logging in
    secret: "aoijs",//session secret
    port: 4185,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "commands"// folder name in which all the edit needing files are there
})
panel.loadPanel()//Load The Panel

panel.onError()//Will detect errors, and send it to aoi.panel's error page

bot.loopCommand({
  code: `$deleteIn[23h]
@everyone
Please verify using the message from Wick above!
||You'll be pinged daily if you fail to verify!||`,
  channel: '1062874681474023495',
  executeOnStartup: false,
  every: 86400000
})

//keepAlive();
//this is a test from the panel
//eek it works
