import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CustomizePizzaComponent } from './customize-pizza/customize-pizza.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    OrderPizzaComponent,
    ShoppingCartComponent,
    CustomizePizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
