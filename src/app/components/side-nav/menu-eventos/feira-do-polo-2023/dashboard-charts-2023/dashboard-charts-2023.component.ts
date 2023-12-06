import { Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-charts-2023',
  templateUrl: './dashboard-charts-2023.component.html',
  styleUrls: ['./dashboard-charts-2023.component.css']
})
export class DashboardCharts2023Component implements OnInit {
  
  chart: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {

  
    const now: Date = new Date();
    const year: number = now.getFullYear();
    let month: string = (now.getMonth() + 1).toString().padStart(2, '0');
    let day: string = now.getDate().toString().padStart(2, '0');
    const currentDate: string = `${year}-${month}-${day}`;

    this.elementRef.nativeElement.querySelector('#startDate').value = currentDate;
    this.elementRef.nativeElement.querySelector('#endDate').value = currentDate;

    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar', 

      data: {
        labels: ['01-12-2023','02-12-2023','03-12-2023',],
        datasets: [
          {
            label: "Metal",
            data: ['100'],
            backgroundColor: '#ffec00'
          },
          {
            label: "Papel",
            data: ['200'],
            backgroundColor: '#3498db'
          },
          {
            label: "Plástico",
            data: ['300'],
            backgroundColor: '#e74c3c'
          },
          {
            label: "Vidro",
            data: ['400'],
            backgroundColor: '#2ecc71'
          },
          {
            label: "Eletrônico",
            data: ['500'],
            backgroundColor: '#ffa500'
          },
          {
            label: "Orgânico",
            data: ['600'],
            backgroundColor: '#a62a2a'
          },
          {
            label: "Não reciclavel",
            data: ['600'],
            backgroundColor: '#808080'
          },
          {
            label: "Peso Total",
            data: ['400'],
            backgroundColor: '#ddd'
          },
          {
            label: "Total de pessoas",
            data: ['400'],
            backgroundColor: '#ddd'
          }
        ]
      },
      options: {
        aspectRatio: 3.5  
      }
    });
  }
}
