import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContaService } from './conta/shared/conta.service';
import { Login } from './models/login.model';
import { CriarConta } from './models/criar-conta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'books_connect15';
  imageUrl: string = 'assets/img/treeBook.png';

  contas: CriarConta[]= [];

  constructor(private contaService: ContaService) {
    console.log(environment.api);
  }
}
