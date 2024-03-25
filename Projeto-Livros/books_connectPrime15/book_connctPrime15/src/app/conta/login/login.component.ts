import { Component, OnInit } from '@angular/core';
import { ContaService } from '../shared/conta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login,input-text-floatlabel-demo,password-toggle-mask-demo,button-text-demo,button-severity-demo',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit{
  login = {
    email: '',
    senha: ''
  };
  constructor(
    private contaService: ContaService,
    private router: Router
  ) { }

  ngOnInit() {
 }
  async onSubmit(){
    try{
      const result = await this.contaService.login(this.login)
      console.log(`Login efetuado: ${result}`);

      //navega para a rota vazia 
      this.router.navigate(['']);
    }catch(error){
      console.error(error);
    }
  }
}

export class InputTextFloatlabelDemo {
  value: string | undefined;
}
export class PasswordToggleMaskDemo {
  value!: string;
}
export class ButtonTextDemo { }
 export class ButtonSeverityDemo { }