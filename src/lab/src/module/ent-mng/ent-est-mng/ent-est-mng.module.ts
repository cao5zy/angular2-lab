import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// ent-est-mng
import { EntEstMngComponent} from './component';
// Routing
import { EntEstMngRouting } from './ent-est-mng.routing';
@NgModule({
    imports: [
        EntEstMngRouting
    ],
    declarations: [
        EntEstMngComponent
    ],
    exports: [EntEstMngComponent],
    providers: []

})
export class EntEstMngModule { }