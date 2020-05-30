import { Directive, HostBinding, Input } from "@angular/core";


@Directive({
    selector : '[myFavItem]'
})
export class FavoriteDirective {
    @HostBinding("class.is-favorite") isFavorite = true;
    @Input() set myFavValue(value) {
        this.isFavorite = value;
    }
}