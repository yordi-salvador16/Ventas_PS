const User = require('../src/models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function login(username, password) {
    return User.findOne({ username }).then(user => {
        if (!user) {
            throw new Error('Invalid credentials');
        }

        return bcrypt.compare(password, user.password).then(isValid => {
            if (!isValid) {
                throw new Error('Invalid credentials');
            }

            const token = jwt.sign({ username: user.username }, 'your-secret-key', { expiresIn: '1h' });
            return { token };
        });
    });
}

module.exports = { login };
