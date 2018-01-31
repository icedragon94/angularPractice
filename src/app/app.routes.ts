import { Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";



const routes: Routes = [
    { path: 'posts', loadChildren: 'app/post/post.module#PostModule' }
]

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);