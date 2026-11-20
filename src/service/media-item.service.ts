import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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
    get(medium: string): Observable<any[]> {
      const request$ = medium
        ? this.httpClient.get<any[]>(`http://localhost:9091/media/getmediaByMedium?medium=${encodeURIComponent(medium)}`)
        : this.httpClient.get<any[]>("http://localhost:9091/media/getmedia");

      return request$.pipe(
        map(data => Array.isArray(data) ? data : []),
        catchError(error => this.handleMissingResponse(error))
      );
    }

    add(mediaItem : any) : Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.httpClient.post("http://localhost:9091/media/savemedia",mediaItem,httpOptions)
    }

    delete(mediaItem: any) : Observable<any[]> {
      return this.httpClient.delete<any[] | null>(
        `http://localhost:9091/media/deletemediabyid?id=${encodeURIComponent(mediaItem.id)}`
      ).pipe(
        map(data => Array.isArray(data) ? data : []),
        catchError(error => this.handleMissingResponse(error))
      );
    }

    getCategory()  : Observable<any> {
      return this.httpClient.get('http://localhost:9091/media/getCategory')
    }

    getMedium()  : Observable<any> {
      return this.httpClient.get('http://localhost:9091/media/getMedium')
    }

    private handleMissingResponse(error: HttpErrorResponse): Observable<any[]> {
      if(error.status === 404 || error.status === 204) {
        return of([]);
      }
      return throwError(() => error);
    }
}