class ListenerStructure {
    name;
    once;
    constructor(name, data) {
    
        this.name = name;
        this.once = data.once;
    }
}

module.exports = ListenerStructure