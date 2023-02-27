//const keepAlive = require('./server.js');

const TOKEN = process.env['TOKEN']

const aoijs = require("aoi.js")

//legacy code
//const bot = new aoijs.AoiClient({
//  token: "",
//  prefix: "|",
//  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
//})
//legacy code

const bot = new aoijs.AoiClient({
  token: "MTA0NDMyMzE4NzQ3NjkyNjQ3NA.GUYr4v.0ecGzn-f2ErBtFIhyDwRhK1WJSXTl7oGAIETcQ",
  prefix: "|",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers"],
  events: ["onMessage", "onJoin", "onLeave"]
});

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.status({
  text: "Bot version: 23.2.1",
  type: "PLAYING",
  status: "onlne",
  time: 12
})
bot.status({
  text: "aoi.js version: 6.1.1",
  type: "PLAYING",
  status: "onlne",
  time: 12
})
bot.status({
  text: "the Discord Leisure Centre",
  type: "WATCHING",
  status: "onlne",
  time: 12
})

//bot.onMessage()
//bot.onJoin()
//bot.onLeave()

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
