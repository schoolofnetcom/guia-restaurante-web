import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent{
    constructor(private authservice: AuthService) {}

    user: any = {
        password: null,
        password_confirmation:null
    }

    save(e) {
        e.preventDefault();

        if (this.user.password && this.user.password === this.user.password_confirmation) {
            this.authservice.builder().changePassword(this.user)
                .then(() => {
                    window.Materialize.toast('Salvo cm sucesso', 3000);
                });
        } else {
            window.Materialize.toast('Verifique a senha', 3000, 'red');
        }
    }
}