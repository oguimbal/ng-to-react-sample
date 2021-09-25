import { Directive, EventEmitter, Input, Output, Type } from '@angular/core';
import { useState } from 'react';
import { reactBridge } from './bridge';
import { MyNgInput } from './my-ng-input';
import { MyNgButton } from './ng-btn';

export function MyReactComponent({
    data,
    dataChange,
    children,
}: {
    data: string,
    dataChange: (data: string) => void,
    children: any,
}) {
    // declare a state
    const myState = useState<string>('initial state');
    return <div>

        <div>
            ⚛️ Here is a react component, using an NG component below:
        </div>

        {/* 👉 use your Angular component like any regular React component */}
        <MyNgInput

            // pass a value to a regular @Input()
            name="Name given in react"

            // use directive declared in bridge.ts
            focus

            // two-ways binding of a react state to
            //  the angular `@Input() value` and `@Ouptut() valueChange`
            value$={myState}
        />

        <div>
            ⚛️ The resulting state, displayed in React: {myState[0]}
        </div>
        <div>
            ⚛️ <MyNgButton onClick={() => dataChange(data + 1)}>
            ⚛️ Click here to increment {data} to {data + 1} from react, and trigger an angular event
            </MyNgButton>
        </div>
    </div>;
}



// Declare the inputs & outputs you want to map from your react component
//   => This component will be usable in angular, & bound to the corresponding react props
//    ... just add it to your ng module, and you're good to go!
@Directive({ selector: 'my-react-component' })
export class MyReactComponent_Angular extends reactBridge.toAngular(MyReactComponent) {
    @Input()
    data!: string;
    @Output()
    dataChange = new EventEmitter();
}
