import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NoticeComponent } from './dialog/component/notice.component';
import { ConfirmComponent } from './dialog/component/confirm.component';
import { PopupComponent } from './dialog/component/popup.component';


@NgModule({
    imports: [
        CommonModule,
        Ng2Bs3ModalModule,
        FormsModule
    ],
    declarations: [
        NoticeComponent,
        ConfirmComponent,
        PopupComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        NoticeComponent,
        ConfirmComponent,
        PopupComponent    ]
})
export class CommonComponentModule { }
