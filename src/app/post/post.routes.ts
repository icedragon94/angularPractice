import { Routes } from '@angular/router'
import { PostListComponent } from './post-list/post-list.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: PostListComponent }
]

export const PostRouter: ModuleWithProviders = RouterModule.forChild(routes);