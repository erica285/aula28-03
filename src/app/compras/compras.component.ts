import { Component, OnInit } from '@angular/core';
import { Compra } from '../domain/compra';
import { COMPRAS } from '../domain/mock-compras';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor() { }
compras : Compra [] = COMPRAS;
compra : Compra = new Compra();

  ngOnInit() {
  }
  addCompra(){
    //console.log(this.compra.nome);
    let novaCompra = new Compra();
    novaCompra.id = this.compra.id;
    novaCompra.descricao = this.compra.descricao;
    this.compras.push(novaCompra);
}
}
