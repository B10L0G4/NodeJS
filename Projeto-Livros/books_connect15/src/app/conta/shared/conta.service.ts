import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriarConta } from 'src/app/models/criar-conta.model';
import { Login } from 'src/app/models/login.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ContaService {

  private url = environment.api;

  constructor(private httpClient: HttpClient) {}
  login() {
    // return new Promise((resolve)=> {
    //   window.localStorage.setItem('token', 'meu-token');
    //   resolve(true);
    // });
    return this.httpClient.get<Login[]>(this.url + '/criar-conta/1');
  }
  criarConta() {
    return this.httpClient.get<CriarConta[]>(this.url + '/criar-conta');
    };
  
}
