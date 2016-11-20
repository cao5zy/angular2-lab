import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EntEstMngComponent } from './component/ent-est-mng.component';
export const EntEstMngRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'ent-mng/ent-est-mng/ent-est-mng',
        component: EntEstMngComponent
    }
]);