import { Directive, HostBinding, Input } from "@angular/core";


@Directive({
    standalone: false,
    selector : '[myFavItem]'
})
export class FavoriteDirective {
    @HostBinding("class.is-favorite") isFavorite = true;
    @Input() set myFavValue(value: boolean) {
        this.isFavorite = value;
    }
}