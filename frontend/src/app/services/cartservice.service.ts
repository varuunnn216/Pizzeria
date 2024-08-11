import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  constructor(private httpObj: HttpClient) {}

  getCartItems() {
    return this.httpObj.get('http://localhost:5000/showcart').pipe(
      map((res) => {
        console.log(res);
        return res;
      })
    );
  }

  decreaseItemCount(body: any) {
    return this.httpObj
      .post('http://localhost:7000/decreaseQuantity', body)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  increaseItemCount(body: any) {
    return this.httpObj
      .post('http://localhost:7000/increaseQuantity', body)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  deleteCartItem(body: any) {
    return this.httpObj.post('http://localhost:3500/deleteitem', body).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
