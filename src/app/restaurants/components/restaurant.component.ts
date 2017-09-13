import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import { AppHttpService } from '../../app-http.service';

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
    address: string;
    restaurants: any[] = [];
    status: string;

    constructor(private appHttpService: AppHttpService) {}

    ngOnInit() {
        jQuery(".parallax").parallax();
    }

    search(e) {
        e.preventDefault();

        if (!this.address) {
            window.Materialize.toast('Você precisa digitar seu endereço', 3000);
            return;
        }

        this.appHttpService.builder('restaurants/by-address?address=' + this.address)
            .list()
            .then((res) => {
                this.restaurants = res.restaurants;
                this.status = res.status;

                if (this.status === 'success' && this.restaurants.length === 0) {
                    this.status = 'error';
                }

                let body = jQuery("html, body");
                body.stop().animate({scrollTop:300}, 500, 'swing');
            })
    }
}