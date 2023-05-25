import {Component, OnInit} from '@angular/core';
import {Filme} from "../filme";
import {FilmesService} from "../filmes.service";
import {IonInput} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  filmes: Filme[];
  teste: any;

  constructor(private fs: FilmesService) {
    this.filmes = [];

  }
  getAllFilmes(text: IonInput){
    let titulo: string = '';
    this.fs.getFilmes(titulo).subscribe((res)=>{
     return  this.filmes = Object.values(res)[0];
    })
  }
}
