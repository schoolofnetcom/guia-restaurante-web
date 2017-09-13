import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RestaurantsModule } from './restaurants/restaurants.module';
import { UserModule } from './user/user.module';
import { AppHttpService } from './app-http.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'}
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
    RestaurantsModule
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
