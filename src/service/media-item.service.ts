import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn : "root" // if we are using this. we don't need to declare in app module ts
})

export class MediaItemService {
    // mediaItems = [
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
    constructor(private httpClient: HttpClient) {

    }
    get(medium : String) : Observable<any>{
      if(medium) {
        return this.httpClient.get(`http://localhost:9091/media/getmediaByMedium?medium=${medium}`);
      } else {
        return this.httpClient.get("http://localhost:9091/media/getmedia");
      }
       
        //return this.mediaItems;
    }

    add(mediaItem : any) : Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.httpClient.post("http://localhost:9091/media/savemedia",mediaItem,httpOptions)
    }

    delete(mediaItem: any) : Observable<any> {
      return this.httpClient.delete(`http://localhost:9091/media/deletemediabyid?id=${mediaItem.id}`);
    }

    getCategory()  : Observable<any> {
      return this.httpClient.get('http://localhost:9091/media/getCategory')
    }

    getMedium()  : Observable<any> {
      return this.httpClient.get('http://localhost:9091/media/getMedium')
    }
}