export class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        return /^(?!.*\d{4})([a-zA-Z])([a-zA-Z0-9-_]{0,})([a-zA-Z])$/.test(this.username)
    }
}