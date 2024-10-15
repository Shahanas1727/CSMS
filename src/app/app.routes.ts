import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CpPageComponent } from './cp-page/cp-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'paper-application',
        component: CpPageComponent
    }
];
