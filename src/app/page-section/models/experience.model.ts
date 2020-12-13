export class Experience {
    title: string;
    imageSrc: string;
    description: string;
    _id: number;

    constructor(options: {[key: string]: any}) {
        this.title = options.title;
        this.imageSrc = options.imageSrc;
        this.description = options.description;
        this._id = options._id;
    }
}