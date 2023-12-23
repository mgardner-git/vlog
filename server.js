const connection = require('./connection');
const user = require("./model/User");
const article = require("./model/Article");
const comment = require("./model/Comment");
const express = require("express");
//const cors = require("cors");
const dotenv = require("dotenv");
const userApi = require("./api/UserApi");
const session = require("express-session");
var cookieParser = require("cookie-parser");

async function init() {
	let app = express();
	app.use(express.json());
	app.use(cookieParser());
	app.listen(process.env.port, () => {
		console.log("Server started on port " + process.env.port);
	});
	app.use(express.static("public"));
	const oneDay = 1000 * 60 * 60 * 24;
	app.use(session({
    	secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    	saveUninitialized:true,
    	cookie: { maxAge: oneDay },
    	resave: false 
	}));

	app.post("/api/users",userApi.createUser);
	app.get("/api/users", userApi.getAllusers);
	app.post("/api/login", userApi.login);
	app.get("/api/users/:userId", userApi.getUserById);
	app.put("/api/users/:userId", userApi.editUser);
	
	
	
	
}
connection.authenticate().then(init)
.catch((error) => {	
	console.error("unable to connect to the database: ", error);
});