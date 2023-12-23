const connection = require('../connection');
const user = require("../model/User");
const userDef = connection.define("USER", user);


const UserApi = {
		
	getAllusers: async function(request, response) {
		const users = await userDef.findAll();	
		response.send(users);
	},
	createUser: async function(request, response) {
		var user = request.body;
		console.log("Creating: ");
		console.log(user);
		await userDef.create(user);
		response.json(request.body);
	},
	getUserById: async function(request, response) {
		var searchId = request.params.userId;
		var foundUser = await userDef.findByPk(searchId);
		response.json(foundUser);
	}, 
	editUser: async function(request, response) {
		var updatedUser = request.body;
		await userDef.update(updatedUser,{
			where: {
				username: updatedUser.username
			}
		});
		var verifiedEdit = await userDef.findByPk(updatedUser.username);
		response.json(verifiedEdit);	
	}
	
}

module.exports = UserApi;