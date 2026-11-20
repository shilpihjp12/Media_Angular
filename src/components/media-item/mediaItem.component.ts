import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    standalone: false,
    selector: "media-item",
    templateUrl: './mediaItem.component.html',
    styleUrls: ['./mediaItem.component.css']
})
export class MediaItemComponent {
    @Input() mediaItem: any;
    @Output() delete = new EventEmitter<any>();
    
    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}