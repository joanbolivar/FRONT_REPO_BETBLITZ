import { DashComponent } from './../dashboard2/components/dash.component';
import { Routes } from "@angular/router";
import { AdminLayoutComponent } from './components/admin-layout.component';
import { ContactComponent } from '../contact/components/contact.component';
import { AdminBetsComponent } from '../adminBets/components/admin-bets.component';
import { UserBetsComponent } from '../user-bets/components/user-bets.component';
import { ResultsComponent } from '../results/results.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: DashComponent },
            { path: 'soporte', component: ContactComponent },
            { path: 'admin', component: AdminBetsComponent },
            { path: 'apuestas', component: UserBetsComponent },
            { path: 'resultados', component:ResultsComponent}
        ]
    }
];