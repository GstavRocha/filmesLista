import {Component, OnInit} from '@angular/core';
import {Filme} from "../filme";
import {FilmesService} from "../filmes.service";
import {IonInput} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  filmes: Filme[];
  teste: string;

  constructor(private fs: FilmesService) {
    this.filmes = [];
    this.teste = 'MIB';

  }
  getAllFilmes(text: IonInput) {
    let texto = JSON.stringify(text.value);
    this.fs.getFilmes(texto).subscribe((res) => {
      this.filmes = Object.values(res)[0]
    })
  };
  ngOnInit(){
    this.fs.getTesteFilme().subscribe((res: Filme)=>{
      this.filmes = Object.values(res)[0];
      console.log( this.filmes);
    })
  };
}
