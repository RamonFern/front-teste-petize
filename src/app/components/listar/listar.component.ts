import { Router } from '@angular/router';

import { LivroService } from './../../service/livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaLivros: any
   
  constructor(private livroService: LivroService, 
              private router: Router) { }

  ngOnInit(): void {
    this.livroService.listar().subscribe(lib => {
      this.listaLivros = lib.valueOf()
      console.log(this.listaLivros)
    })
  }

  detalhe(){
    this.router.navigate(['detalhe']);
  }

}
