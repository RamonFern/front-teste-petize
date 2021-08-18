import { LivroService } from './../../service/livro.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  livro: Livro = new Livro('','','','')
  constructor(private router: Router, private livroService: LivroService) { }

  ngOnInit(): void {
    
  }

  navegar(){
    this.router.navigate([''])
  }

}
