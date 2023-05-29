import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Filme} from "./filme";
import { Observable, throwError } from 'rxjs';
import {IonInput} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private APIKEY:string;
  private APIAUTH:string;
  private favoritos: any[];
  private teste: string = 'https://www.omdbapi.com/?apiKey=69a954bd&t=a&plot=full';
  constructor(private http: HttpClient) {
    this.APIKEY ='69a954bd';
   this.APIAUTH = `https://www.omdbapi.com/?apikey=${this.APIKEY}`;
   this.favoritos = []
  }
  getFilmes(text: string):Observable<Filme>{
    return this.http.get<Filme>(`${this.APIAUTH}&s=${text}`); // verificar o retorno da api
  }
  getTitulo(text: string):Observable<Filme>{
    return this.http.get<Filme>(`${this.APIAUTH}&t=${text}&plot=pull`)
  }
  verificarDue(titulo: Filme): boolean{
    return !!this.favoritos.find((element) => element == titulo);
  }
  filmeFavoritos(titulo: any){
    if(!this.verificarDue(titulo)){
      this.favoritos.push(titulo);
    }
  };
  getFavoritos(){
    return this.favoritos
  }
}
