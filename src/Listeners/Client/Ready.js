const ListenerStructure = require("../../Structures/ListenerStructure");

class Ready extends ListenerStructure {
    constructor() {
        super('ready', { once: false })
    }
    action(client) {
        console.log('Ready!')
    }
}

module.exports = new Ready();