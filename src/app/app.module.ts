import { ApplicationModule, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { MyNgInputComponent } from './my-ng-input';
import { MyReactComponent_Angular } from './my-react';
import {MyNgButtonComponent} from './ng-btn';

@NgModule({
  declarations: [
    AppComponent,
    MyNgInputComponent,
    MyNgButtonComponent,
    MyReactComponent_Angular,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApplicationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
