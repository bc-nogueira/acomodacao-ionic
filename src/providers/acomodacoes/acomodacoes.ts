import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AcomodacoesProvider {
  private API_URL = 'http://acomodacao-tcc.herokuapp.com/api/v1/';

  constructor(public http: Http) { }

  getAll() {
    return new Promise((resolve, reject) => {
 
      let url = this.API_URL + 'acomodacoes/';
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'acomodacoes/' + id;
 
      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
