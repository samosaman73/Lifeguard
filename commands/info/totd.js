module.exports = [{
    name: "totd",
    code: `
$title[Fact of the Day]
$httpRequest[https://api.popcat.xyz/fact;GET;;fact;ERR]
`
}]