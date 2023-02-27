module.exports = [{
    name: "info",
    code: `
    $author[Bot Stats;$userAvatar[$clientID]]
    $description[
    💿 Node.JS Version: $nodeVersion
    📖 Library: Aoi.JS
    💾 Aoi.JS Version: $packageVersion

    💻 CPU Usage: %$cpu
    💻 CPU Model: Disabled until further notice
    🏓 Ping: $pingms
    ⏱️ Uptime: $client[readytimestamp]
    ⚙️ Commands Count: $commandsCount
    🚦 Ram Usage: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
    🐧 Platform: Linux
    
    👑 Owner: $userTag[$botOwnerID]]
    $color[00ffff]
    `
}]