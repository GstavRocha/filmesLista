import { Component } from '@angular/core';
import {FilmesService} from "../filmes.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public  favoritos: any[];
  constructor(private fs: FilmesService) {
    this.favoritos = [];
    this.getSerFavoritos()
  }
  getSerFavoritos(){
    this.favoritos = this.fs.getFavoritos()
  }

}
