export class ContactEmailData {
    firstName: string;
    lastName: string;
    email: string;
    comments: string;

    constructor(options: {[key: string]: string}) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.email = options.email;
        this.comments = options.comments;
    }
}