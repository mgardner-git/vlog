const connection = require('./connection');
const user = require("./model/User");
const article = require("./model/Article");
const comment = require("./model/Comment");


async function init() {
	let userDef = connection.define("USER", user);
	let articleDef = connection.define("ARTICLE", article);
	let commentDef = connection.define("COMMENT", comment)
	await connection.sync({force: true});
	let jane = await userDef.create({
		username: "jane",
		password: "jane12",
		name: "jane" 
	});
	
	let artic1 = articleDef.create({
		title: "abcdefg",
		author: "jane",
		content: "abcdefghijklmnopqrstuvwxyz"
	});
	
}
connection.authenticate().then(init)
.catch((error) => {	
	console.error("unable to connect to the database: ", error);
});
