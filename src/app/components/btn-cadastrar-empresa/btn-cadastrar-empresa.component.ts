import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-btn-cadastrar-empresa',
  templateUrl: './btn-cadastrar-empresa.component.html',
  styleUrls: ['./btn-cadastrar-empresa.component.css'],
})
export class BtnCadastrarEmpresaComponent {
  // empresa: any = {
  //   // Inicialize o objeto empresa com os campos vazios para evitar erros
  //   nomeFantasia: '',
  //   cnpj: '',
  //   cep: '',
  //   bairro: '',
  //   rua: '',
  //   numero: '',
  //   razao_social: '',
  //   ceo: '',
  //   email: '',
  //   telefone: '',
  // };
  // apiUrl = 'http://localhost:8080/cadastro_empresa';
  // constructor(private http: HttpClient) {}
  // modalAberto = false;
  // openCadastroModal() {
  //   this.modalAberto = true;
  // }
  // fecharModal() {
  //   this.modalAberto = false;
  // }
  // cadastrarEmpresa() {
  //   // Criar um observador para receber as notificações do Observable
  //   const observer = {
  //     next(response: { cadastroEmpresaResponse: any }): void {
  //       // Armazenar os dados do Observable em uma propriedade local
  //       this.cadastroEmpresaResponse = response.cadastroEmpresaResponse;
  //     },
  //     error(error: any): void {
  //       console.error('Erro ao cadastrar empresa:', error);
  //     },
  //     complete(): void {
  //       // O Observable foi concluído com sucesso
  //     },
  //   };
  //   // Enviar os dados do formulário para o backend usando o Observable
  //   this.http.post(this.apiUrl, this.empresa).subscribe(observer);
  // }
}
