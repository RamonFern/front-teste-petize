import { Livro } from './../models/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpClient: HttpClient) { }

  listar(){
    return this.httpClient.get('http://localhost:8080/biblioteca/livros/listar/todos')
  }

  salvar(livro: Livro){
    return this.httpClient.post('http://localhost:8080/biblioteca/livros/criar', livro);
  }

}
