const CommandStructure = require("../../Structures/CommandStructure");


class PingCommand extends CommandStructure {
    constructor() {
        super('ping', { 
            description: 'Responds with pong', 
            aliases: ['pong'], 
            cooldown: 5000, 
            guildOnly: false,
            enabled: true,
            slashData: { 
                name: 'ping', options: [], enabled: true
            }
        })
    }

    async action(client, message, args) {
        message.channel.createMessage('pong!')
    }

    async slashAction(client, interaction) {
        interaction.createMessage('pong!')
    }
}

module.exports = new PingCommand();