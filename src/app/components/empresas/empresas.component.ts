import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
})
export class EmpresasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  empresas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .get<any>('http://localhost:8080/listar_empresas')
          .subscribe((resp) => {
            that.empresas = resp.clientes_empresas;

            callback({
              recordsTotal: resp.clientes_empresas.length,
              recordsFiltered: resp.clientes_empresas.length,
              data: resp.clientes_empresas,
            });
          });
      },
      columns: [
        { data: 'id' },
        { data: 'nome_fantasia' },
        { data: 'cnpj' },
        { data: 'cep' },
        { data: 'bairro' },
        { data: 'rua' },
        { data: 'numero' },
        { data: 'razao_social' },
        { data: 'ceo' },
        { data: 'email' },
        { data: 'telefone' },
        {
          render: function (data: any, type: any, full: any) {
            return `
          <div class="inline-flex">
            <button class="py2 rounded border border-blue-500 bg-transparent px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white" onclick="editarEmpresa(${full.id})">Editar</button>
            <button class="text-red-700:border-transparent rounded border border-red-500 bg-transparent px-4 py-2 font-semibold hover:bg-red-500 hover:text-white" onclick="excluirEmpresa(${full.id})">Excluir</button>
          </div>
        `;
          },
        },
      ],
    };
  }

  editarEmpresa(empresa: any): void {
    console.log(`Editar empresa ID: ${empresa.id}`);
    // Aqui você fará a lógica para edição da empresa, pode ser aberta uma modal ou redirecionado o usuário para a página de edição
  }

  excluirEmpresa(empresa: any): void {
    console.log(`Excluir empresa ID: ${empresa.id}`);
    // Aqui você fará a lógica para exclusão da empresa
    // Lembre-se, todo método de DELETAR deve ser idempotente, ou seja,
    // não importa quantas vezes seja chamado, o efeito será sempre o mesmo.
  }
}
