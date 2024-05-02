import { Component, Output } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user-service.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent, CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class HomeComponent {

    login: FormGroup | any;
    userName: string = '';

    constructor(private _route: Router, private _http: HttpClient, private userService: UserService) { }

    ngOnInit(): void {
        this.login = new FormGroup({
            'emailDocument': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required])
        });
    }


    onSubmit(login: FormGroup) {
        console.log(this.login.value);
            this._http.get<any>('http://localhost:3000/signup')
                .subscribe(res => {
                    console.log(res);
                   
                    const userValid = res.find((data: any) => {
                     return  (data.email === this.login.value.emailDocument || data.document === this.login.value.emailDocument) && data.password === this.login.value.password
                    });
                    if (userValid) {
                       console.log(userValid);
                        this.login.reset();
                        alert("Inicio de sesión exitoso");
                        this.userService.changeUser(userValid.names);
                        this._route.navigate(['betbliz/dashboard']).then(() => {
                            console.log('Redireccionamiento completado');
                          });
                    }else{
                        alert("Usuario o contraseña incorrectos. Por favor verifique sus datos.");
                    }
                });
    }
    


}

