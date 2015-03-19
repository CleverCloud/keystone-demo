var keystone = require('keystone');
var User = keystone.list('User');

var admins = [
	{ email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD, name: { first: 'Demo', last: 'User' }, isAdmin: trye, isProtected: true }
];

function createAdmin(admin, done) {
	new User.model(admin).save(done);
}

module.exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};
