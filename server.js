const connection = require('./connection');
const user = require("./model/User");
const article = require("./model/Article");
const comment = require("./model/Comment");
const express = require("express");
//const cors = require("cors");
const dotenv = require("dotenv");
const userApi = require("./api/UserApi");

async function init() {
	let app = express();
	app.use(express.json());
	app.listen(process.env.port, () => {
		console.log("Server started on port " + process.env.port);
	});
	app.use(express.static("public"));
	
	app.post("/api/users",userApi.createUser);
	app.get("/api/users", userApi.getAllusers);
	app.get("/api/users/:userId", userApi.getUserById);
	app.put("/api/users/:userId", userApi.editUser);
	
}
connection.authenticate().then(init)
.catch((error) => {	
	console.error("unable to connect to the database: ", error);
});