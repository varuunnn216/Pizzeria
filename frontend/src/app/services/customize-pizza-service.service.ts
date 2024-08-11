import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomizePizzaServiceService {
  constructor(private httpObject: HttpClient) {}

  getIngredients() {
    return this.httpObject.get('http://localhost:4500/getingredients').pipe(
      map((res) => {
        return res;
      })
    );
  }

  addIngredientsToCart(body:any) {
    return this.httpObject.post('http://localhost:4000/insertingredients',body).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
