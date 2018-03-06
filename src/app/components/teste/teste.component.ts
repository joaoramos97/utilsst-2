import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  myData: any;
  data: any;
  constructor() {
    // -------- PIE CHART ----------------
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
    // ---------- BAR CHART ------------------- 
    this.myData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }
  ngOnInit() {}    
}
