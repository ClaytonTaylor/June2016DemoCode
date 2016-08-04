var Users = [{
	name: "Billy Bob", // String
	age: 30, // Integer,
	email: 'billybobbery@email.com',
	createdAt: 14598756847 // Integer
},{
	name: "Jimmy John", // String
	age: 50, // Integer
	email: 'jimmyjohnery@email.com', // String
	createdAt: 14598756847 // Integer
}];

module.exports = {
    findAll: function() {
        return Users;
    },
    findOne: function(index) {
        return Users[index]
    }
}
