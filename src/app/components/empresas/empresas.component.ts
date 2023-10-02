import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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
      ],
    };
  }
}
