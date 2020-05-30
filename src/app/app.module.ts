import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { MediaItemComponent } from '../components/media-item/mediaItem.component';
import { MediaItemListComponent } from '../components/media-item-list/media-item-list.component';
import { FavoriteDirective } from '../directive/favorite.directive';
import { CategoryListPipe } from '../pipes/category-list.pipe';
import { MediaItemService } from 'src/service/media-item.service';
//import {MediaItemFormModule  } from '../components/media-item-form/media-item-form.module';
import { routing } from './app.route';

@NgModule({
    imports:[
        BrowserModule, 
        FormsModule, 
        HttpClientModule,
        routing,
       // MediaItemFormModule --- removing to acieve lazy loading. add it in app rote to achieve lazy loading.
    ],
    providers:[
    ],
    declarations : [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}