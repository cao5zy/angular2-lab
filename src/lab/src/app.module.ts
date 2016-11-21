import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {SiteComponent} from './architecture/components/site/component/site.component';


import {EntMngModule} from './module/ent-mng/ent-mng.module';

import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        EntMngModule,
        FormsModule,
        routing
    ],
    declarations: [SiteComponent],
    providers: [],
    bootstrap: [SiteComponent]
})

export class AppModule {
}
