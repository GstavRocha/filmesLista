import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Filme} from "./filme";
import { Observable, throwError } from 'rxjs';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private APIKEY:string;
  private APITAUTH:string;
  private teste: string = 'MIB';
  constructor(private http: HttpClient) {
    this.APIKEY ='69a954bd';
   this.APITAUTH = `https://www.omdbapi.com/?apikey=${this.APIKEY}`;
  }
  getTitulo(){
    console.log(`${this.APITAUTH}&t=${this.teste}`)
    return `${this.APITAUTH}&t=${this.teste}`
  }
  getFilmes(text: string):Observable<Filme>{
    console.log(this.http.get<Filme>(this.APITAUTH));
    return this.http.get<Filme>(`${this.APITAUTH}&=${text}`);
  }
  getTesteFilme():Observable<Filme>{
    return this.http.get<Filme>(`${this.APITAUTH}&t=a&plot=full`);
  }
}
