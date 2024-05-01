import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/components/registo.component';
import { HomeComponent } from './pages/home/components/home.component';
import { ContactComponent } from './pages/contact/components/contact.component';


export const routes: Routes = [
  {
    path: 'betbliz',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'registro', component: RegistroComponent },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/admin-layout/admin.routes').then(m => m.ADMIN_ROUTES)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }

];
