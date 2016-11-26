import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LabComponent1Component } from './component/lab-component1.component';
export const LabModule1Routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'lab-module1/lab-component1',
        component: LabComponent1Component
    }
]);