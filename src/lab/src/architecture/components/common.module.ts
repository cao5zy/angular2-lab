import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [
        CommonModule,
        Ng2Bs3ModalModule,
        FormsModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule]
})
export class CommonComponentModule { }
