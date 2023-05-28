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
    this.fs.getFilmes(text).subscribe((res:Filme)=>{
      this.filmes = Object.values(res)[0];
      console.log(this.filmes);
  });
  }
}
