import { AfterViewInit, Directive, ElementRef, Input, HostListener } from '@angular/core';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[href]'
})
export class HrefPreventDefaultDirective implements AfterViewInit {
    @Input() href: string;

    @HostListener('click', ['$event']) click($event) {
        this.preventDefault($event);
    }

    constructor(private el: ElementRef) {

    }
    ngAfterViewInit() {

    }
    preventDefault(event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    }

}
