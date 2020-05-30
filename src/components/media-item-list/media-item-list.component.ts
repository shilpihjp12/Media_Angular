import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MediaItemService } from 'src/service/media-item.service';


@Component({
    selector: "media-item-list",
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{
    medium = '';
    mediaItems;

    constructor(private service: MediaItemService, private activatedroute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedroute.paramMap.subscribe( param =>{
            let medium = param.get('medium');
            if(medium.toLowerCase() === 'all') {
                medium = '';
            }
             this.getMediaItem(medium);
        })
       
    }
    getMediaItem(medium) {
        this.service.get(medium).subscribe(
            (data) => {
            console.log(data);
            this.mediaItems = data;
            }
        ), error => {
            console.log(error);
        };
    }
    onMediaItemDelete(mediaItem) {
        this.service.delete(mediaItem).subscribe(
            (data) => {
              console.log(data);
              this.mediaItems = data;
            }
        ), error => {
            console.log(error);
        };
     }
}