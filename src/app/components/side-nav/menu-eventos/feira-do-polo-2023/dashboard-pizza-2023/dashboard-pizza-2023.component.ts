import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-pizza-2023',
  templateUrl: './dashboard-pizza-2023.component.html',
  styleUrls: ['./dashboard-pizza-2023.component.css']
})
export class DashboardPizza2023Component implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: ['Metal', 'Papel', 'Plástico', 'Vidro','Eletrônico','Orgânico','Não reciclavel'],
        datasets: [{
          label: 'Quantidade recolhida',
          data: [300, 240, 100, 432,500,600,700],
          backgroundColor: [
            '#ffec00',
            '#3498db',
            '#e74c3c',
            '#2ecc71',
            '#ffa500',
            '#a62a2a',
            '#808080',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 3.5
      }
    });
  }
}
