import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "media-item",
    templateUrl: './mediaItem.component.html',
    styleUrls: ['./mediaItem.component.css']
})
export class MediaItemComponent {
    @Input() mediaItem;
    @Output() delete = new EventEmitter();
    
    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}