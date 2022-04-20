const { Perms } = require("../Validation/permissions");
const { Client } = require(discord.js);
const { promisify } = require("discord.js");
const { glob } = require("glob");
const { Ascii } = require("ascii-table")
const PG = promisify(glob);

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
    const Table = new Ascii("Commandes chargées")

    CommandArray = [];

    (await PG (`${process.cwd()}/Commands/*/*.js`).map(async(file) => {
        const command = require(file);
        
        if(!command.name)
        return Table.addRow(file.split("/")[7], "ERREUR", "Nom manquant.")

        if(!command.context && !command.description)
        return Table.addRow(command.name,"ERREUR", "Description manquante.")

        if(command.permission) {
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else
            return Table.addRow(command.name, "ERREUR", "Permision invalide.")
        }
        
        client.commands.set(command.name , command);
        CommandArray.push(command);

        await Table.addRow(command.name, "✅ = SUCCES")
    }))
    
    // Permet de vérifier les permissions//
}