/**
 * Created by hjs on 02/02/2017.
 */
import { Component, OnChanges, Input,
         Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html'
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
