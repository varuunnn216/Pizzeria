import { Component } from '@angular/core';
import { PizzaServiceService } from '../services/pizza-service.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent {
  constructor(private pizzaServiceObj:PizzaServiceService){}
 
  pizzaList:any;
  ngOnInit(){
    this.pizzaServiceObj.getPizzas().subscribe(res=>{
      this.pizzaList=res;
    })
    console.log("pizzalist",this.pizzaList);
  }
  itemObj:any={};
  addToCart(id:string,price:number)
  {
    console.log("button clicked");
    this.itemObj.pizzaid=id;
    this.itemObj.pizzaprice=price;
    this.pizzaServiceObj.addPizza(this.itemObj).subscribe(res=>{
      console.log(res);
    });
  }

}
