import { Injectable } from '@angular/core';
import {Filme} from "./filme";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private APIKEY:string = '69a954bd'
  private APITAUTH:string = `https://www.omdbapi.com/?i=tt3896198&apikey=${this.APIKEY}`;
  private teste: string = 'MIB';
  Filme:[];
  constructor() {
    this.Filme = [];
  }
  obterFilmeTitulo(){
    console.log(this.teste)
    return this.Filme
  }
}
