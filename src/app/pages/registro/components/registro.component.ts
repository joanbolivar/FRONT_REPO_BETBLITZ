import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { confirmPasswordValidator } from '../../../validators/confirm-password.validator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],

})
export class RegistroComponent implements OnInit{

  submitted = false;
  signup :FormGroup|any;



  constructor(private _route: Router, private _http:HttpClient) { }

  ngOnInit(): void {
    this.signup  = new FormGroup({
      'names': new FormControl('',[Validators.required]),
      'lastNames': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required]),
      'document': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),
      'passwordConfirmation': new FormControl('')
    }, { validators: confirmPasswordValidator });
  }

  onSubmit(singup:FormGroup){
    this.submitted = true;
    console.log(this.signup.value);
   if(singup.valid){
    this._http.post('https://back-repo-betblitz-2.onrender.com/signup', this.signup.value).subscribe(
      (response: any) => {
        console.log("Registro exitoso");
        this.signup.reset();
        this.submitted = false;
        alert("Registro exitoso");
        this._route.navigate(['/betbliz/home']);
      },
      (error: any) => {
        console.log(error);
      }
    );
   }
   
  }

}
