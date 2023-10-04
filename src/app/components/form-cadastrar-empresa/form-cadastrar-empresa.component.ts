import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-cadastrar-empresa',
  templateUrl: './form-cadastrar-empresa.component.html',
  styleUrls: ['./form-cadastrar-empresa.component.css'],
})
export class FormCadastrarEmpresaComponent {
  constructor(private http: HttpClient) {}

  formData: any = {};

  onSubmit() {
    try {
      const jsonData = {
        nome_fantasia: this.formData.nome_fantasia,
        cnpj: this.formData.cnpj,
        cep: this.formData.cep,
        bairro: this.formData.bairro,
        rua: this.formData.rua,
        numero: this.formData.numero,
        razao_social: this.formData.razao_social,
        ceo: this.formData.ceo,
        email: this.formData.email,
        telefone: this.formData.telefone,
      };

      fetch('http://localhost:8080/cadastro_empresa', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            // Sucesso

            alert('Empresa cadastrada com sucesso!');
          } else {
            // Erro
            alert(data.mensage);
          }
        })
        .catch(() => {
          // Handle fetch error
          alert('Erro ao cadastrar!');
        });
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar!');
    }
  }
}
