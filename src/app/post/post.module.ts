import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-list/post-item/post-item.component';
import { PostService } from './services/post.service';
import { PostRouter } from './post.routes';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        PostListComponent,
        PostItemComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PostRouter
    ],
    providers: [
        PostService
    ]
})
export class PostModule {}