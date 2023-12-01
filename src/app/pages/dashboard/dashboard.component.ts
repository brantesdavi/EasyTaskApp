import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables  } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild("meuCanvas", {static: true}) elemento: ElementRef | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    new Chart(this.elemento?.nativeElement, {
      type: 'doughnut',
    data: {
      labels: ["Backlog", "Concluded"],
      datasets: [{
        label: "Qtd de tarefas: ",
        backgroundColor: ["#8e5ea2","#3cba9f"],
        data: [4,5]
      }]
      //fazer tarefas atrasadas e tarefas dentro do prazo
    }
    });
  }

}


// OJI4554
// OJI4564
// OJI4584
// OJI4594

// OJI4664
// OJI4654
// OJI4684
// OJI4694

// OJI4854
// OJI4864
// OJI4884
// OJI4894

// OJI4954
// OJI4964
// OJI4984
// OJI4994
