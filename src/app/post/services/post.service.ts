import { Post } from './../models/post';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from '../../libs/serviceHelpers/base.service';


@Injectable()
export class PostService extends BaseService<Post> {
    public items: Post[];

    constructor(private http: HttpClient) {
        super();
        this.items = [
            new Post({id: 1, title: 'This is first post', description: 'This is first post description', link: 'http://www.google.com'}),
            new Post({id: 1, title: 'This is second post', description: 'This is second post description', link: 'http://www.youtube.com'}),
            new Post({id: 1, title: 'This is third post', description: 'This is third post description', link: 'http://www.facebook.com'})
        ]
    }
}