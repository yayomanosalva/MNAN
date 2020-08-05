import { Component, OnInit } from '@angular/core';
import { ProductoService } from "../../services/producto.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})

export class ProductsComponent implements OnInit {

  constructor(private _productoService: ProductoService) { }

  prod: string;
  val: number;
  list: object[] = [];
  isDisabled: boolean = false;
  dropDisabled: boolean = false;
  indice: number;

  ngOnInit(): void {
    this.list = this._productoService.getList();
  }

  addElement(str: string, nun: number) {
    if (str != undefined || nun != undefined) {
      //add elements to array
      this.list.push({
        producto: str,
        valor: nun,
      })
      //recetea form
      this.prod = '';
      this.val = 0;
    }
  }

  editElement(prod: string, valor: number, idx: number) {
    this.prod = prod;
    this.val = valor;
    this.indice = idx;
    this.isDisabled = !this.isDisabled;
  }

  editCampo(str: string, nun: number) {
    let objx = new Object();
    objx = {
      producto: str,
      valor: nun
    }
    this.list.splice(this.indice, 1, objx);
    this.isDisabled = false;
    this.dropDisabled = true;
    this.prod = '';
    this.val = 0;

  }

  deleteElement(idx: number) {
    if (idx !== undefined) {
      //eliminacion de los elementos del array principal
      //my_array.splice(start_index, number_of_elements_to_remove, remplazo);
      this.list.splice(idx, 1)
    }
  }

}

