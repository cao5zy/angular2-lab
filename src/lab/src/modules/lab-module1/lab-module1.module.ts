import { NgModule } from '@angular/core';

// pf_conn_mng
import { LabComponent1Component
    , BootstrapPopoverComponent } from './component';
import { LabModule1Routing } from './lab-module1.routing';

@NgModule({
    imports: [
        LabModule1Routing
    ],
    declarations: [
    	LabComponent1Component
        , BootstrapPopoverComponent
    ],
    exports: [
        LabComponent1Component
    ],
    providers: []
})

export class LabModule1Module { }