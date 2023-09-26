import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-total-clientes',
  templateUrl: './total-clientes.component.html',
  styleUrls: ['./total-clientes.component.css'],
})
export class TotalClientesComponent implements OnInit {
  totalClientes: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTotalClientes();
  }

  fetchTotalClientes() {
    this.http
      .get('http://localhost:8080/total_clientes') // Substitua '/api/total_clientes' pela URL correta do seu servidor
      .subscribe((data: any) => {
        this.totalClientes = data;
      });
  }
}
