export class Experience {
    title: string;
    imageName: string;
    description: string;

    constructor(options: {[key: string]: string}) {
        this.title = options.title;
        this.imageName = options.imageName;
        this.description = options.description;
    }
}