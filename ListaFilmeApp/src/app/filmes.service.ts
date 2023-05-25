import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Filme} from "./filme";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private APIKEY:string = '69a954bd'
  private APITAUTH:string = `https://www.omdbapi.com/?apikey=${this.APIKEY}`;
  private teste: string = 'MIB';
  Filme:Filme[] = []
  constructor(private http: HttpClient) {
  }
  getTitulo(){
    console.log(`${this.APITAUTH}&t=${this.teste}`)
    return `${this.APITAUTH}&t=${this.teste}`
  }
  getFilmes(text: string):Observable<Filme>{
    console.log(this.http.get<Filme>(this.APITAUTH));
    return this.http.get<Filme>(`${this.APITAUTH}&=${text}`);
  }
}
