import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  //private url='hgjhkgkgjghjk';
//comitt
  private list: List[] =
    [
      {
        "valor": 1000,
        "producto": "tomate"

      },
      {
        "valor": 1520,
        "producto": "cebolla"

      },
      {
        "valor": 2564,
        "producto": "apio"

      },
      {
        "valor": 3587,
        "producto": "rabano"

      },
      {
        "valor": 4125,
        "producto": "pimenton"

      }
    ]

  //constructor( private http:HttpClient) { }
  constructor() { }

  getList(): List[] {
    return this.list;
  }

  // update(factura:List[]) {
  //   return this.http.put(`${this.url}/factura`, factura)
  // }
}
export interface List {
  "valor": number,
  "producto": string
}
