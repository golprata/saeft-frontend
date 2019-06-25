import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
// // import { Registro } from '../classes/registros.model';
import { Efetividade } from '../classes/efetividades.model';
import { EfetividadeService } from '../services/efetividades.service';
import * as Chart from 'chart.js';
import * as moment from 'moment';
// import {IMyDpOptions} from 'mydatepicker';



@Component({
  selector: 'app-admin-registro-diarios',
  templateUrl: './admin-registro-diarios.component.html',
  styles: []
})
export class AdminRegistroDiariosComponent implements OnInit {


  efetividades: Efetividade[];
  acumulado: Efetividade;


  // getEfetividades(){
  //   this.efetividadeService.getEfetividades()
  //   .subscribe(dados => [this.efetividades = dados.efetividades, this.acumulado = dados.total_efetividade]);
  // }

  getEfetividades(){
    this.efetividadeService.getEfetividades()
    .subscribe(dados => {
      [this.efetividades = dados.efetividades, this.acumulado = dados.total_efetividade];

      this.myDoughnutChart = new Chart('doughnutChart', {
        type: 'doughnut',
        data:{
          labels: ["Efetivos", "Ausentes", "Cancelados", "Mal Endereçado", "Numeração Irregular"],
          datasets:[{
            label: '# of Votes',
            data:
            [
              this.acumulado.efetivos,
              this.acumulado.ausentes,
              this.acumulado.cancelados,
              this.acumulado.mal_enderecado,
              this.acumulado.log_irregular
            ],
            borderWidth: 1,
            backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              "#36A2EB",
              "#17e933"
            ],
          }]
        },
      });
    });
  }


  myDoughnutChart: any;

  mudaCor(c){
    if(c > 95.1){
      return 'badge bg-light-blue';
    }
    else if(c >= 90 && c <=95){
      return 'badge bg-green';
    }else if(c >= 85.5 && c <= 89.99){
      return 'badge bg-yellow';
    }else{
      return 'badge bg-black';
    }
  }
  constructor(private efetividadeService: EfetividadeService) { }

  ngOnInit() {

    this.getEfetividades();


  }

}
