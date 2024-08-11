import { Component } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
// export class ShoppingCartComponent {
//   constructor(private cartServiceObj: CartserviceService) {}

//   pizzacartList: any;
//   ingredientcartList: any;

//   // cartQuantity: any;
//   cartTotal: number = 0;
//   ngOnInit() {
//     this.cartServiceObj.getCartItems().subscribe((res: any) => {
//       // this.cartList = res.result;
//       this.cartTotal = res.totalAmount;
//       this.pizzacartList = res.pizzaDetails;
//       this.ingredientcartList = res.ingredientsDetails;
//     });
//   }
//   decreaseItemObject: any = {};
//   decreaseCount(item: any) {
//     if (item.quantity > 1) {
//       this.decreaseItemObject.pizzaId = item.id;
//       this.decreaseItemObject.pizzaprice = item.price;
//       this.cartServiceObj
//         .decreaseItemCount(this.decreaseItemObject)
//         .subscribe((res: any) => {
//           console.log('result', res);
//           // this.cartQuantity = res[0].cart.quantity;
//         });
//       item.quantity--;
//       this.cartTotal -= item.price;
//     }
//   }

//   increaseItemObject: any = {};
//   increaseCount(item: any) {
//     this.increaseItemObject.pizzaId = item.id;
//     this.increaseItemObject.pizzaprice = item.price;
//     this.cartServiceObj
//       .increaseItemCount(this.increaseItemObject)
//       .subscribe((res) => {
//         console.log(res);
//       });
//     item.quantity++;
//     this.cartTotal += parseFloat(item.price);
//   }

//   deleteItemObject: any = {};
//   deleteItem(item: any) {
//     if (item.quantity == 1) {
//       this.deleteItemObject.pizzaId = item.id;
//       this.deleteItemObject.pizzaprice = item.price;
//       this.cartServiceObj
//         .deleteCartItem(this.deleteItemObject)
//         .subscribe((res) => {
//           console.log(res);
//           this.ngOnInit();
//         });
//     }
//   }
// }

export class ShoppingCartComponent {
  constructor(private cartServiceObj: CartserviceService) {}
 
  pizzacartList: any;
  ingredientcartList: any;
 
  // cartQuantity: any;
  cartTotal: number = 0;
  ngOnInit() {
    this.setup();
  }
  setup() {
    this.cartServiceObj.getCartItems().subscribe((res: any) => {
      this.cartTotal = res.totalAmount;
      this.pizzacartList = res.pizzaDetails;
      this.ingredientcartList = res.ingredientsDetails;
    });
  }
  decreaseItemObject: any = {};
  decreaseCount(item: any) {
    if (item.quantity > 1) {
      this.decreaseItemObject.id = item.id;
      this.decreaseItemObject.price = item.price;
      this.cartServiceObj
        .decreaseItemCount(this.decreaseItemObject)
        .subscribe((res: any) => {
          console.log('result', res);
        });
      item.quantity--;
      this.cartTotal -= item.price;
    }
  }
 
  increaseItemObject: any = {};
  increaseCount(item: any) {
    this.increaseItemObject.id = item.id;
    this.increaseItemObject.price = item.price;
    if (item.name) {
      this.cartServiceObj
        .increaseItemCount(this.increaseItemObject)
        .subscribe((res) => {
          console.log(res);
        });
      this.cartTotal += parseFloat(item.price);
      this.increaseItemObject = {};
      item.quantity++;
    } else if (item.tname) {
      this.cartServiceObj
        .increaseItemCount(this.increaseItemObject)
        .subscribe((res) => {
          console.log(res);
        });
      this.cartTotal += parseFloat(item.price);
      this.increaseItemObject = {};
      item.quantity++;
    }
  }
 
  deleteItemObject: any = {};
 
  deleteItem(item: any) {
    this.deleteItemObject.id = item.id;
    this.deleteItemObject.price = item.price;
 
    if (item.name && item.quantity == 1) {
      this.cartServiceObj
        .deleteCartItem(this.deleteItemObject)
        .subscribe((res) => {
          console.log(res);
        });
      this.pizzacartList = this.pizzacartList.filter(
        (pizza: any) => pizza.id !== item.id
      );
      this.cartTotal -= parseFloat(item.price);
      this.deleteItemObject = {};
    } else if (item.tname && item.quantity == 1) {
      this.cartServiceObj
        .deleteCartItem(this.deleteItemObject)
        .subscribe((res) => {
          console.log(res);
        });
      this.ingredientcartList = this.ingredientcartList.filter(
        (ingredient: any) => ingredient.id !== item.id
      );
      this.cartTotal -= parseFloat(item.price);
      this.deleteItemObject = {};
    }
  }
}
