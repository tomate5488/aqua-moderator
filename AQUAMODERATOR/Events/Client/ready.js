const { Client } = require("discord.js")

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client
     */
    execute(client) {
        console.log("Le bot est bien connectée")
        client.user.setActivity("Moderation Bot by FTC", {type: "PLAYING"})
    }
}