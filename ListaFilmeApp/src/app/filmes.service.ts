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
  private teste: string = 'https://www.omdbapi.com/?apiKey=69a954bd&t=a&plot=full';
  constructor(private http: HttpClient) {
    this.APIKEY ='69a954bd';
   this.APIAUTH = `https://www.omdbapi.com/?apikey=${this.APIKEY}`;
  }
  getTitulo(){
    console.log(`${this.APIAUTH}&t=${this.teste}`)
    return `${this.APIAUTH}&t=${this.teste}`
  }

  getFilmes(text: IonInput):Observable<Filme>{
    return this.http.get<Filme>(`${this.APIAUTH}&s=${text}`); // verificar o retorno da api
  }

}
