import { Component, OnInit } from '@angular/core';
import { AMIGOS } from '../domain/mock-amigo';
import { Amigo } from '../domain/amigo';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  constructor() { }
 
  amigos : Amigo [] = AMIGOS;
  amigo : Amigo = new Amigo();

  ngOnInit() {
  }
addAmigo(){
  //console.log(this.amigo.nome);
  let novoAmigo = new Amigo();
  novoAmigo.id = this.amigo.id;
  novoAmigo.nome = this.amigo.nome;
  novoAmigo.dataNascimento = this.amigo.dataNascimento;
  this.amigos.push(novoAmigo);
}
}
