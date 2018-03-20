import {EventEmitter, ElementRef, OnInit, Directive, Input, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import {NgModel} from '@angular/forms';


@Directive({ selector: '[appDebounce]', providers: [NgModel], })
export class DebounceDirective implements OnInit {
    @Input() delay = 700;
    @Input() events = [];
    @Output() func: EventEmitter<any> = new EventEmitter();

    constructor(private elementRef: ElementRef, private model: NgModel) {
    }

    ngOnInit(): void {

        for (let event of this.events) {
            let eventStream = Observable.fromEvent(this.elementRef.nativeElement, event)
            .map(() => this.model.value)
            .debounceTime(this.delay);

            eventStream.subscribe(input => this.func.emit({input: this.elementRef.nativeElement, fired: event}));
        }
    }

}

export default {
    directives: [DebounceDirective]
};
