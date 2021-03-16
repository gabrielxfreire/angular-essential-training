import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavouriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}
