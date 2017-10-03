import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import { AuthService } from './user/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  me = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    jQuery("#showMenu").sideNav();

    this.authService.eventEmitter.subscribe(() => {
      this.getUserData();
    });
  }

  protected getUserData() {
    this.authService.getUser()
    .then((res) => {
      this.me = res;
      console.log(res, res.status)
      if (res.status === 401) {
        this.me = null;
      }
    })
    .catch((err) => {
      this.me = null;
    })
  }
}
