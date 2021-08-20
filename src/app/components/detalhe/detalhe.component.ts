import { Livro } from './../../models/livro';
import { LivroService } from './../../service/livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  livro: any
  id: any
  constructor(private router: Router,
              private livroService: LivroService,
              private acvateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.acvateRouter.params.subscribe(parametro => {
      this.livro = parametro;
      console.log(this.livro)
   
    })
      
    
  }

  navegar(){
    this.router.navigate([''])
  }

}
