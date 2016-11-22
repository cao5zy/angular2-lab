import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RootComponent} from './root.component';


import {EntMngModule} from './module/ent-mng/ent-mng.module';

import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        EntMngModule,
        FormsModule,
        routing
    ],
    declarations: [RootComponent],
    providers: [],
    bootstrap: [RootComponent]
})

export class AppModule {
}
