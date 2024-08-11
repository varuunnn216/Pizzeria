import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CustomizePizzaComponent } from './customize-pizza/customize-pizza.component';

const routes: Routes = [
  // {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"orderPizza",component:OrderPizzaComponent},
  {path:"shoppingCart",component:ShoppingCartComponent},
  {path:"customizePizza",component:CustomizePizzaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
