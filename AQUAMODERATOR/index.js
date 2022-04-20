const { Client, Collection} = require("discord.js")
const client = new Client({intents: 1});
const { Token } = require("./config.json");

require("./Handlers/Events")(client);
client.command = new Collection()

client.login("OTY1MzM5ODgyODc0NjMwMTk0.Ylxw0w.Ppqxl-BPs2YOf4As9BStN3b3dy4")