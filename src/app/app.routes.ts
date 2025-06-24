import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FuncionalidadeComponent } from './funcionalidade/funcionalidade.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },      
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'funcionalidade', component: FuncionalidadeComponent },
  { path: 'sobre', component: SobreComponent } 
];
