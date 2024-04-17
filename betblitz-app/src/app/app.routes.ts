import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { ContactComponent } from './modules/contact/components/contact.component';
import { RegistroComponent } from './modules/registro/components/registo.component';
import { DashboardComponent } from './modules/dashboard/componentes/dashboard.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'contact', component: ContactComponent},
    {path:'registro', component: RegistroComponent},
    {path:'dashboard', component: DashboardComponent}
    
];
