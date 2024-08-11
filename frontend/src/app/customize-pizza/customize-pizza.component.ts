import { Component } from '@angular/core';
import { CustomizePizzaServiceService } from '../services/customize-pizza-service.service';

@Component({
  selector: 'app-customize-pizza',
  templateUrl: './customize-pizza.component.html',
  styleUrls: ['./customize-pizza.component.css'],
})
export class CustomizePizzaComponent {
  ingredientsTotalCost: number = 0;

  // customPizza: any = {
  //   ingredients: [],
  //   totalPrice: 0,
  // };
  constructor(private customizePizzaObj: CustomizePizzaServiceService) {}
  ingredientsList: any;
  ngOnInit() {
    this.customizePizzaObj.getIngredients().subscribe((res) => {
      this.ingredientsList = res;
      console.log(this.ingredientsList);
    });
  }
  /*will try to add the ingredeints id and amount in array and then all addingredientstocart foreach item*/
  addIngredient(ingredient: any, e: any) {
    if (e.target.checked) {
      // this.customPizza.ingredients.push(ingredient.tname);
      this.ingredientsTotalCost += ingredient.price;
      // this.customPizza.totalPrice = this.ingredientsTotalCost;
    } else {
      // this.customPizza.ingredients = this.customPizza.ingredients.filter(
      //   (item: string) => item !== ingredient.tname
      // );
      this.ingredientsTotalCost -= ingredient.price;
    }
    console.log(this.ingredientsTotalCost);
  }
  ingredientItem: any = {};
  // addIngredientsToCart(id:number,price:number)
  addIngredientsToCart() {
    this.ingredientsList.filter((item: any) => {
      if (item.checked) {
        this.ingredientItem.ingredientId = item.id;
        this.ingredientItem.ingredientPrice = item.price;
        this.customizePizzaObj.addIngredientsToCart(this.ingredientItem)
          .subscribe((res) => {
            console.log(res);
          });
        this.ingredientItem={};
      }
    });
    // console.log("id type: ",typeof id);
    // console.log(id);
    // console.log(this.ingredientItem.ingredientId);
  }
}
