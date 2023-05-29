import { Component } from '@angular/core';
import {Filme} from "../filme";
import {FilmesService} from "../filmes.service";
import {IonInput} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 public filme: Filme;
  constructor(private fs: FilmesService) {
   this.filme = new Filme()
  }
  getPorTitulo(text: IonInput){
    let tratamento = JSON.stringify(text.value)
    this.fs.getTitulo(tratamento).subscribe((res:Filme)=>{
      if(text.value !== ""){
        this.filme = res
        console.error(res)
      }
    })
  }
  setFavoritosFilme(titulo: any){
    titulo.Favoritos = true;
    this.fs.filmeFavoritos(titulo);
  }
}
