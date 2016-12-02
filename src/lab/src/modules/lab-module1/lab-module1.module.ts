import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// pf_conn_mng
import { LabComponent1Component
    , BootstrapPopoverDirective
    , PopupComponent } from './component';
import { LabModule1Routing } from './lab-module1.routing';

@NgModule({
    imports: [
        BrowserModule
        ,LabModule1Routing
    ],
    declarations: [
    	LabComponent1Component
        , BootstrapPopoverDirective
        , PopupComponent
    ],
    exports: [
        LabComponent1Component
        , BootstrapPopoverDirective
        , PopupComponent
    ],
    providers: []
})

export class LabModule1Module { }