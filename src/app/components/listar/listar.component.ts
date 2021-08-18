
import { LivroService } from './../../service/livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaLivros: any
   
  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.listar().subscribe(lib => {
      this.listaLivros = lib
      console.log(this.listaLivros)
    })
  }

}
