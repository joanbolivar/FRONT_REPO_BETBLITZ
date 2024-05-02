import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { RegistroComponent } from './registro/components/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/components/home.component';
import { DashComponent } from './dashboard/components/dashboard.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
