import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';
import { ContactComponent } from './modules/contact/components/contact.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'contact', component: ContactComponent}
];
