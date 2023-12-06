import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datatable-participantes-2023',
  templateUrl: './datatable-participantes-2023.component.html',
  styleUrl: './datatable-participantes-2023.component.css'
})
export class DatatableParticipantes2023Component {

  dtOptions: DataTables.Settings = {};
  empresas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {

      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .get<any>('') //url da api 
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
        { data: 'email' },
        { data: 'telefone' },
     
      ],
    };
  }



  
}


