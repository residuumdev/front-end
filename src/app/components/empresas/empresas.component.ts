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
      pageLength: 5,
      lengthMenu: [5, 10, 15, 25, 50, 100],
      processing: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },

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
      createdRow: (row: Node, data: any, index: number) => {
        // Vincular o evento do clique ao botão de exclusão
        $('td .btn-excluir', row).unbind('click');
        $('td .btn-excluir', row).on('click', () => {
          this.excluirEmpresa(data.id);
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
        { data: 'email' },
        { data: 'telefone' },
        {
          render: function (data: any, type: any, full: any) {
            return `
              <div class="inline-flex">
                <button class="py2 rounded border border-blue-500 bg-transparent px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white" onclick="editarEmpresa(${full.id})">Editar</button>
                <button class="btn-excluir text-red-700:border-transparent rounded border border-red-500 bg-transparent px-4 py-2 font-semibold hover:bg-red-500 hover:text-white" id="${full.id}">Excluir</button>
              </div>
        `;
          },
        },
      ],
    };
  }
  editarEmpresa(id: number): void {}

  excluirEmpresa(id: number): void {
    // Aqui você pode criar uma confirmação com o usuário antes de realizar a exclusão.
    if (confirm('Tem certeza que deseja excluir esta empresa?')) {
      // Se o usuário confirmar, você pode fazer a chamada para excluir a empresa no servidor.
      this.http
        .delete<any>('http://localhost:8080/deletar_empresa', {
          body: { id: id },
        })
        .subscribe((resp) => {
          console.log(resp.message);

          // Atualize a lista de empresas após a exclusão, se necessário.
          this.atualizarListaEmpresas();
        });
    }
  }

  // Esta função pode ser usada para atualizar a lista de empresas após a exclusão.
  atualizarListaEmpresas() {
    this.http
      .get<any>('http://localhost:8080/listar_empresas')
      .subscribe((resp) => {
        this.empresas = resp.clientes_empresas;
      });
  }
}
