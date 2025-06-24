import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreComponent } from "./sobre/sobre.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { FuncionalidadeComponent } from "./funcionalidade/funcionalidade.component";
import { ContatoComponent } from "./contato/contato.component";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, SobreComponent, LoginComponent, HomeComponent, FuncionalidadeComponent, ContatoComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-tcc';
}
