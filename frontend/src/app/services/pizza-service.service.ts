import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PizzaServiceService {
  constructor(private http: HttpClient) {}
  getPizzas() {
    console.log('data retriving');
    return this.http.get('http://localhost:3000/getpizzas').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addPizza(item: any) {
    console.log('indise add');
    console.log(item);
    return this.http.post('http://localhost:4000/insertpizza', item).pipe(
      map((res: any) => {
        console.log(res);
      })
    );
  }
}
