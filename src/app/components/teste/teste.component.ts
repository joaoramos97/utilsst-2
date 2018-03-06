import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  data: any;
  constructor() {
    this.data = {
      labels: ['A','B','C'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
             "#36A2EB",
            "#FFCE56"
          ]
        }]    
      };
    }
  ngOnInit() {
  }
}
