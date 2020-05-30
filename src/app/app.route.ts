import { Routes, RouterLinkWithHref, RouterModule } from "@angular/router"
import { MediaItemFormComponent } from '../components/media-item-form/media-item-form.component';
import { MediaItemListComponent } from '../components/media-item-list/media-item-list.component';

const appRoutes : Routes = [
   // {path: 'add', component: MediaItemFormComponent}, 
   {
        path: 'add', 
        //achieve lazy loading like this.
        loadChildren: () => import('../components/media-item-form/media-item-form.module').then( m => {
            return m.MediaItemFormModule;
        })
   },
    {path: ':medium', component: MediaItemListComponent },
    {path : '', pathMatch: 'full', redirectTo: 'all'}
]


export const routing = RouterModule.forRoot(appRoutes);