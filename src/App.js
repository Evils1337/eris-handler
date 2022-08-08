const MyClient = require("./Structures/Client");
const { readdirSync } = require('fs');

const client = new MyClient();

client.connect();

try {
readdirSync(__dirname+"/Commands/").forEach(async d => { 
const commands = readdirSync(__dirname+`/Commands/${d}/`);
for (let fsile of commands) {     
let file = require(__dirname+`/Commands/${d}/${fsile}`);  
client.commands.set(file.name, file);                   
};
});
}
catch (e) {
console.log(e)
}
    
try {
	readdirSync(__dirname+"/ContextMenus/").forEach(async d => { 
	const commands = readdirSync(__dirname+`/ContextMenus/${d}/`);
	for (let fsile of commands) {     
	let file = require(__dirname+`/ContextMenus/${d}/${fsile}`);  
	client.menus.set(file.name, file);                   
	};
	});
	}
	catch (e) {
	console.log(e)
	}

client.on("ready", () => {
	readdirSync(__dirname+"/ContextMenus/").forEach(async d => { 
	const commands = readdirSync(__dirname+`/ContextMenus/${d}/`);
	for (let fsile of commands) {     
	let file = require(__dirname+`/ContextMenus/${d}/${fsile}`);    
	if(d === "User") {
		
		client.createCommand({ name: file.name,type: 2})
	} else {
		client.createCommand({ name: file.name,type: 3})
	}
	
	} 
	});
	});

readdirSync(__dirname+'/Listeners/').forEach((dir) => {
	const events = readdirSync(__dirname+`/Listeners/${dir}/`);
	for (let file of events) {
     
		const evt = require(__dirname+`/Listeners/${dir}/${file}`);
        
        if(evt.once === true){ client.once(evt.name, evt.action.bind(null, client)) } else {
		client.on(evt.name, evt.action.bind(null, client));
        }
	}
});