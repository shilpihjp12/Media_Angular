import { Routes, RouterModule } from '@angular/router'
import { MediaItemFormComponent } from './media-item-form.component'

const mediaItemFormRoute : Routes = [
    { path: '', component: MediaItemFormComponent }
]

export const itemAddRoute = RouterModule.forChild(mediaItemFormRoute);