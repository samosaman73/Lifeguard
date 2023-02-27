module.exports = [{
    name: "chat",
    code: `
<@&825355424798081058>
$title[Oh no! The chat has died.]
$description[Here is a random shower thought to discuss:
\`\`\`
$httpRequest[https://api.popcat.xyz/showerthoughts;GET;;result;HTTP Request Failed.]
\`\`\`
]
$color[AQUA]`
},
{   
    name: "showerthought",
    aliases: ["topic"],
    code: `
$title[Shower Thought]
$description[Here is a random shower thought to discuss:
\`\`\`
$httpRequest[https://api.popcat.xyz/showerthoughts;GET;;result;HTTP Request Failed.]
\`\`\`
]
$color[AQUA]`
}]