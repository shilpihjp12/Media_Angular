import { Component, OnInit } from '@angular/core';
import { MediaItemService } from 'src/service/media-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent  implements OnInit{
     firstMediaItem : any;
    // firstMediaItem = [
    //     {
    //       id: 1,
    //       name: 'Firebug',
    //       medium: 'Series',
    //       category: 'Science Fiction',
    //       year: 2010,
    //       watchedOn: 1294166565384,
    //       isFavorite: false
    //     },
    //     {
    //       id: 2,
    //       name: 'The Small Tall',
    //       medium: 'Movies',
    //       category: 'Comedy',
    //       year: 2015,
    //       watchedOn: null,
    //       isFavorite: true
    //     }, {
    //       id: 3,
    //       name: 'The Redemption',
    //       medium: 'Movies',
    //       category: 'Action',
    //       year: 2016,
    //       watchedOn: null,
    //       isFavorite: false
    //     }, {
    //       id: 4,
    //       name: 'Hoopers',
    //       medium: 'Series',
    //       category: 'Drama',
    //       year: null,
    //       watchedOn: null,
    //       isFavorite: true
    //     }, {
    //       id: 5,
    //       name: 'Happy Joe: Cheery Road',
    //       medium: 'Movies',
    //       category: 'Action',
    //       year: 2015,
    //       watchedOn: 1457166565384,
    //       isFavorite: false
    //     }
    //   ];

    constructor(private serviceItem : MediaItemService) {

    }
    
    ngOnInit() {
        // this.serviceItem.get().subscribe(
        //   (data) => {
        //     console.log(data);
        //     this.firstMediaItem = data;
        //   }
        // );;
    }
}