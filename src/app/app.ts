import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <my-react-component [(data)]="counter">
  </my-react-component>

  <div>
    🅰️ Counter result, displayed in Angular:  {{counter}}
  </div>
  `,
})
export class AppComponent {
  counter = 0;
}
