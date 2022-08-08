module.exports = class ContextMenuStructure {
    name;
    description;
    constructor(name, data) {

        this.name = name;
        this.description = data.description;
    }
}