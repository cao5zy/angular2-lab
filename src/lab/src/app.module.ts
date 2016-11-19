import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CoreModule} from './architecture/core/core.module';
import {CommonComponentModule} from './architecture/components/common.module';
import {MenuComponent} from './architecture/components/menu/component/menu.component';
import {SiteComponent} from './architecture/components/site/component/site.component';


import {EntMngModule} from './module/ent-mng/ent-mng.module';

import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        CommonComponentModule,
        EntMngModule,
        FormsModule,
        routing
    ],
    declarations: [MenuComponent, SiteComponent],
    providers: [],
    bootstrap: [SiteComponent]
})

export class AppModule {
}
