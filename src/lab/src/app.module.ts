import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RootComponent} from './root.component';


import {LabModule1Module} from './modules/lab-module1/lab-module1.module';

import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        LabModule1Module,
        FormsModule,
        routing
    ],
    declarations: [RootComponent],
    providers: [],
    bootstrap: [RootComponent]
})

export class AppModule {
}
