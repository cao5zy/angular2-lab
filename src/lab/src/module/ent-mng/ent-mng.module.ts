import { NgModule } from '@angular/core';

// pf_conn_mng
import { EntEstMngModule } from './ent-est-mng/ent-est-mng.module'

@NgModule({
    imports: [
        EntEstMngModule
    ],
    declarations: [],
    exports: [
        EntEstMngModule
    ],
    providers: []
})

export class EntMngModule { }