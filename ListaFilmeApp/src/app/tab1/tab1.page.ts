import {Component, OnInit} from '@angular/core';
import {Filme} from "../filme";
import {FilmesService} from "../filmes.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  filmes: Filme[];
  teste: any;
  constructor(private fs: FilmesService) {
    this.filmes = [];
    this.teste = '';
  }
  ngOnInit() {
    this.obterFilmes();
  }

  obterFilmes(){
    this.fs.obterFilmeTitulo().subscribe((data:any)=>{
      this.filmes.push(data)
    })
  }
}
