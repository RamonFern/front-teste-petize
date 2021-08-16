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
}
