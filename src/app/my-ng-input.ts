import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { reactBridge } from './bridge';

@Component({
    selector: 'my-ng-input',
    template: `<div>
    🅰️ Some angular input ({{name}}) <input [ngModel]="value" (ngModelChange)="setData($event)" />
    </div>`
})
export class MyNgInputComponent implements OnInit, OnDestroy {

    @Input()
    value!: string;

    @Output()
    valueChange = new EventEmitter<string>();

    @Input()
    name?: string;

    setData($event: any) {
        this.valueChange.emit($event);
    }

    constructor() {
    }

    ngOnInit() { }

    ngOnDestroy() { }
}


export const MyNgInput = reactBridge.toReact(MyNgInputComponent);
