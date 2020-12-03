export class ContactEmailData {
    firstName: string;
    lastName: string;
    comments: string;

    constructor(options: {[key: string]: string}) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.comments = options.comments;
    }
}