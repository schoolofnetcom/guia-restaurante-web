import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'logout-dashboard',
    template: ''
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.authService.builder().logout()
            .then(() => {
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT";
                this.router.navigate(['/login']);
            });
    }
}