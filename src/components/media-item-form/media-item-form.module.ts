import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { itemAddRoute } from './media-item-form.router'
import { MediaItemFormComponent } from './media-item-form.component'
import { MediaItemService } from '../../service/media-item.service'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        itemAddRoute
    ],
    declarations: [
        MediaItemFormComponent
    ],
    providers: [
        MediaItemService
    ]
})

export class MediaItemFormModule {

}