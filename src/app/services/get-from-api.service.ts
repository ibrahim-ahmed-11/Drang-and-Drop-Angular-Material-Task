import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFromAPIService {

  private URL = "https://swapi.co/api/";

  constructor(private http: HttpClient) { }

  getResults(inputString: string) {
    return this.http.get(this.URL + inputString);
  }

}
