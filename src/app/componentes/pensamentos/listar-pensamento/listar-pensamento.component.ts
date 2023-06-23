import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos:Pensamento[] = []
  paginaAtual:number = 1
  ahMaisPensamentos:boolean = true
  filtro:string = ''
  favoritos:boolean = false
  listaFavoritos:Pensamento[]=[]
  titulo:string = "Meu mural"
  constructor(private service:PensamentoService,private router:Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos).subscribe((listaPensamento)=>{
      this.listaPensamentos = listaPensamento
    })
  }
  carregarMaisPensamentos(){
        this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamento=>{
          this.listaPensamentos.push(...listaPensamento)
          if(!listaPensamento.length){
            this.ahMaisPensamentos = false
          }
        })
  }
  pesquisarPensamento(){
    this.paginaAtual = 1;
    this.ahMaisPensamentos = false
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos).subscribe(listaPensamento=>{
      this.listaPensamentos = listaPensamento
    })
  }
  listarFavoritos(){
    this.titulo = "Meus favoritos"
    this.ahMaisPensamentos = true;
    this.favoritos = true
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos).subscribe(listaPensamentosFavoritos=>{
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos= this.listaPensamentos

    })
  }
  recarregarPensamentos(){

    this.favoritos = false
    this.ahMaisPensamentos = true;
    this.paginaAtual =1
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])

  }

}
