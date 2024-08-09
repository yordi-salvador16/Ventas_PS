class UserBuilder {
    constructor() {
        this.user = {
            name: '',
            email: '',
            password: ''
        };
    }

    setName(name) {
        this.user.name = name;
        return this;
    }

    setEmail(email) {
        this.user.email = email;
        return this;
    }

    setPassword(password) {
        this.user.password = password;
        return this;
    }

    build() {
        return this.user;
    }
}

module.exports = UserBuilder;
