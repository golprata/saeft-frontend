import { Component, OnInit } from '@angular/core';

declare var AdminLTE: any;

@Component({
  selector: 'app-admin-tela-gestor',
  templateUrl: './admin-tela-gestor.component.html',
  styles: []
})
export class AdminTelaGestorComponent implements OnInit {

  mudaCor(c){
    if(c > 95.1){
      return 'small-box bg-light-blue';
    }
    else if(c >= 90 && c <=95){
      return 'small-box bg-green';
    }else if(c >= 85.5 && c <= 89.99){
      return 'small-box bg-yellow';
    }else{
      return 'small-box bg-black';
    }
  }



  unidades = [
    {id:'7',nome_unidade:'CDD Adrianópolis',efetividade:97.7},
    {id:'6',nome_unidade:'CDD Aleixo',efetividade:98},
    {id:'1',nome_unidade:'CDD Cachoeirinha',efetividade:85},
    {id:'2',nome_unidade:'CDD Cidade Nova',efetividade:99},
    {id:'3',nome_unidade:'CDD Flores',efetividade:95},
    {id:'5',nome_unidade:'CDD Manaus',efetividade:98},
    {id:'4',nome_unidade:'CDD Rio Negro',efetividade:89},
    {id:'8',nome_unidade:'CDD Zona Norte',efetividade:99},
    {id:'9',nome_unidade:'CDD São Jose Operario',efetividade:95},
    {id:'8',nome_unidade:'CDD Manacapuru',efetividade:87.3}]
    constructor() { }

    ngOnInit() {

       // Update the AdminLTE layouts
     AdminLTE.init();

      console.log(this.unidades.length);
    }

  }
