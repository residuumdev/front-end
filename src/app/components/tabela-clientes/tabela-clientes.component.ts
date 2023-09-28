import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css'],
})
export class TabelaClientesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
  }
}
