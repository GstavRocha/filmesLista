import {Component, OnInit} from '@angular/core';
import {Filme} from "../filme";
import {FilmesService} from "../filmes.service";
import {IonInput} from "@ionic/angular";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  public filmes: Filme[];

  constructor(private fs: FilmesService) {
    this.filmes = [];
  }
  getFilme(text: IonInput){
    let tratamento = JSON.stringify(text.value)
    this.fs.getFilmes(tratamento).subscribe((res:Filme)=>{
      this.filmes = Object.values(res)[0];
      this.fs.filmeFavoritos(this.filmes)});
  }
  favoritos(titulo: any){
    for(let index = 0; index < this.filmes.length; index++){
      titulo[index].Favoritos = false;
    }
  }
  setFavoritosFilme(titulo: any){
    titulo.Favoritos = true;
    this.fs.filmeFavoritos(titulo);
  }
}
