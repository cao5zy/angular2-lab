import { NgModule } from '@angular/core';

// pf_conn_mng
import { LabComponent1Component } from './component/lab-component1.component';
import { LabModule1Routing } from './lab-module1.routing';

@NgModule({
    imports: [
        LabModule1Routing
    ],
    declarations: [
    	LabComponent1Component
    ],
    exports: [
        LabComponent1Component
    ],
    providers: []
})

export class LabModule1Module { }