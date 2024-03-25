import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor() { }
  login(user: any ) {
    return new Promise((resolve)=> {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }
  criarConta(conta: any ) {
    return new Promise((resolve)=> {
      resolve(true);
    });
  }
// login e criar conta são funções de teste , não são funções de login e criar conta reais
}
