import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MediaItemService } from '../../service/media-item.service';


@Component({
    standalone: false,
    selector: "media-item-list",
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{
    medium = '';
    mediaItems: any[] = [];

    constructor(private service: MediaItemService, private activatedroute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedroute.paramMap.subscribe(param => {
            const medium = param.get('medium') ?? '';
            if(medium.toLowerCase() === 'all') {
                this.getMediaItem('');
            } else {
                this.getMediaItem(medium);
            }
        })
       
    }
    getMediaItem(medium: string) {
        this.mediaItems = [];
        this.service.get(medium).subscribe({
            next: (data) => {
                this.mediaItems = Array.isArray(data) ? data : [];
            },
            error: (error: unknown) => {
                console.error(error);
                this.mediaItems = [];
            }
        });
    }
    onMediaItemDelete(mediaItem: any) {
        this.service.delete(mediaItem).subscribe({
            next: (data) => {
                this.mediaItems = Array.isArray(data) ? data : [];
            },
            error: (error: unknown) => {
                console.error(error);
            }
        });
     }
}