import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { reactBridge } from './bridge';

@Component({
    selector: 'my-ng-button',
    template: `
    <button (click)="onClick.emit()">
        <div>
        🅰️ Button declared in angular, which has content:
        </div>
        <ng-content></ng-content>
    </button>
    `,
})
export class MyNgButtonComponent implements OnInit, OnDestroy {

    @Output()
    onClick = new EventEmitter();

    constructor() {
    }

    ngOnInit() { }

    ngOnDestroy() { }
}


export const MyNgButton = reactBridge.toReact(MyNgButtonComponent, {
    // declares that this component accepts children
    children: true,
});
