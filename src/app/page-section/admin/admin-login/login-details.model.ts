export class LoginDetails {
    username: string;
    password: string;

    constructor(loginDetails: {username: string, password: string}) {
        this.username = loginDetails.username;
        this.password = loginDetails.password;
    }
}