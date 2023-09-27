import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessao-usuario',
  templateUrl: './sessao-usuario.component.html',
  styleUrls: ['./sessao-usuario.component.css'],
})
export class SessaoUsuarioComponent implements OnInit {
  userName: string | null = null;

  ngOnInit() {
    // Obtém o nome do usuário do localStorage usando a chave "user_chave"
    const storedUserName = localStorage.getItem('user_chave');

    // Define o nome do usuário se estiver definido no localStorage
    if (storedUserName) {
      this.userName = storedUserName;
    }
  }

  sair() {
    // Remove o token do armazenamento local ao clicar no botão "Sair"
    localStorage.removeItem('user_chave');

    // Redireciona para a página de login após o logout
    window.location.href = '/login'; // Ajuste o URL conforme necessário
  }
}
