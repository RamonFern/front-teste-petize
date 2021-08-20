import { LivroService } from './../../service/livro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from 'src/app/models/livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro!: FormGroup
  livros: any
  constructor(private fb: FormBuilder,private router: Router, private livroService: LivroService) { }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      autor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      url: ['', [Validators.minLength(10)]],
      data: ['', [Validators.required]],
      sinopse: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    })
  }

  salvar(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }
    this.livroService.salvar(this.cadastro.value).subscribe(
      success => this.navegar(),
      error => console.log("ERRO não foi possivel salvar!"),
      () => console.log("Requisição completa"))
    //alert('SUCESSO!!\n\n' + JSON.stringify(this.cadastro.value, null, 4));
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  navegar(){
    this.router.navigate([''])
  }

}
