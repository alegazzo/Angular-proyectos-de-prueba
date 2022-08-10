import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://rickandmortyapi.com/api/character';
  }

  getAll(page = 1): Promise<any>{
    return this.httpClient.get<any>(`${this.url}?page=${page}`).toPromise();
  }
}
