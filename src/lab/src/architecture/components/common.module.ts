import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { SpinnerComponent } from './spinner/component/spinner.component';
import { PaginationComponent } from './pagination/component/pagination.component';
import { NoticeComponent } from './dialog/component/notice.component';
import { ConfirmComponent } from './dialog/component/confirm.component';
import { PopupComponent } from './dialog/component/popup.component';

import { MyDatePickerModule } from './date-picker/my-date-picker.module';

@NgModule({
    imports: [
        CommonModule,
        Ng2Bs3ModalModule,
        FormsModule
    ],
    declarations: [
        SpinnerComponent,
        PaginationComponent,
        NoticeComponent,
        ConfirmComponent,
        PopupComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        SpinnerComponent,
        PaginationComponent,
        NoticeComponent,
        ConfirmComponent,
        PopupComponent,
        MyDatePickerModule
    ]
})
export class CommonComponentModule { }
