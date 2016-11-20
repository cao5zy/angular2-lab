import { NgModule } from '@angular/core';

// Common Componets
import { CommonComponentModule } from '../../../architecture';

// ent-est-mng
import { EntEstMngComponent} from './component';
// Routing
import { EntEstMngRouting } from './ent-est-mng.routing';
@NgModule({
    imports: [
        CommonComponentModule,
        EntEstMngRouting
    ],
    declarations: [
        EntEstMngComponent
    ],
    exports: [EntEstMngComponent],
    providers: []

})
export class EntEstMngModule { }