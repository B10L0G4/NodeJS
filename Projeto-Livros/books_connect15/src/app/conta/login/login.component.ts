import { Component, OnInit } from '@angular/core';
import { ContaService } from '../shared/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  login = {
    email: 'teste@teste.com',
    senha: 'teste'
  };
  constructor(
    private contaService: ContaService,
    private router: Router
  ) { }
  ngOnInit() {
    // Código de inicialização, se necessário
  }

  async onSubmit() {
    try {
      console.log('Método onSubmit() chamado'); // Verifica se este console.log é exibido
      const result = await this.contaService.login()//this.login);
      console.log('Login efetuado:', result);
      this.router.navigate(['/home']); // Redireciona para a rota home após o login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }
}
  // ngOnInit() {
  // }

  // async onSubmit(){
  //   try{
  //     const result = await this.contaService.login(this.login)
  //     console.log(`Login efetuado: ${result}`);

  //     //navega para a rota vazia 
  //     this.router.navigate(['']);
  //   }catch(error){
  //     console.error(error);
  //   }
  // }

