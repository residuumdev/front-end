import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-editar-empresas',
  templateUrl: './form-editar-empresas.component.html',
  styleUrls: ['./form-editar-empresas.component.css'],
})
export class FormEditarEmpresasComponent {
  constructor(private http: HttpClient) {}

  formData: any = {};

  onSubmit() {
    try {
      const jsonData = {
        id: this.formData.id,
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

      fetch('http://localhost:8080/editar_empresa', {
        method: 'PUT',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            // Sucesso

            Swal.fire('Empresa editada com sucesso!');
            window.location.reload();
          }
        })
        .catch(() => {
          Swal.fire('Erro ao editar!');
        });
    } catch (error) {
      console.error(error);
      Swal.fire('Erro ao editar!');
    }
  }
}
