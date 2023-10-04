import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-cadastrar-usuario',
  templateUrl: './form-cadastrar-usuario.component.html',
  styleUrls: ['./form-cadastrar-usuario.component.css'],
})
export class FormCadastrarUsuarioComponent {
  constructor(private http: HttpClient) {}

  formData: any = {};

  onSubmit() {
    try {
      const jsonData = {
        nome: this.formData.nome,
        matricula: this.formData.matricula,
        senha: this.formData.senha,
      };

      fetch('http://localhost:8080/cadastro_acesso', {
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

            alert('Cadastro realizado com sucesso!');
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
