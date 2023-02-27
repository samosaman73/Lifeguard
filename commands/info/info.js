module.exports = [{
    name: "info",
    code: `
    $author[Bot Stats;$userAvatar[$clientID]]
    $description[
    💿 Node.JS Version: $nodeVersion
    📖 Library: Aoi.JS
    💾 Aoi.JS Version: $packageVersion

    💻 CPU Usage: %$cpu
    💻 CPU Model: $djsEval[require ('os').cpus()[0].model;yes]
    🏓 Ping: $pingms
    ⏱️ Uptime: $client[readytimestamp]
    ⚙️ Commands Count: $commandsCount
    🚦 Ram Usage: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
    🐧 Platform: $replaceText[$djsEval[require ('os').platform();yes];linux; 🐧 Linux;-1]
    
    👑 Owner: $userTag[$botOwnerID]]
    $color[AQUA]
    $thumbnail[$userAvatar[$clientid]]
    $footer[$userTag[$clientID];$userAvatar[$clientID]]
    $addTimestamp
    `
}]