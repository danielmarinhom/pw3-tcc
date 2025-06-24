import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionalidade',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.css']
})
export class FuncionalidadeComponent {
  mensagens: { texto: string, autor: 'usuario' | 'bot' }[] = [];
  textoInput: string = '';

  enviarMensagem() {
    const texto = this.textoInput.trim();
    if (!texto) return;

    this.mensagens.push({ texto, autor: 'usuario' });
    this.textoInput = '';

    setTimeout(() => {
      this.mensagens.push({ texto: 'Olá', autor: 'bot' });
    }, 500);
  }
}
