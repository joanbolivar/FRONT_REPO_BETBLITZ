import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { ContactComponent } from './modules/contact/components/contact.component';
import { UserBetsComponent } from './modules/userBets/components/user-bets.component';
import { AdminBetsComponent } from './modules/adminBets/components/admin-bets.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'contact', component: ContactComponent},
    {path:'user-bets', component: UserBetsComponent},
    {path:'admin-bets', component: AdminBetsComponent},
];
