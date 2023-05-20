import { Component } from '@angular/core';
import {Filme} from "../filme";
import {FilmesService} from "../filmes.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  filme: Filme[];
  teste: any;
  constructor(private fs: FilmesService) {
    this.filme = this.fs.obterFilmeTitulo();
    this.teste = '';
  }
  obterFilmes(){
    this.teste =this.fs.obterFilmeTitulo();
  }
}
