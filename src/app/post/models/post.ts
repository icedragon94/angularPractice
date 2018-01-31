export class Post {
    id: number;
    title: string;
    description: string;
    link: string;

    constructor(init?: Partial<Post>) {
        Object.assign(this, init);
    }
}
