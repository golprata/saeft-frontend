import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-motivos',
  templateUrl: './admin-motivos.component.html',
  styles: []
})
export class AdminMotivosComponent implements OnInit {

  constructor() { }

  motivos = [
    {id:1,descricao:'Gerente', status:0, created_at:'2019-02-02 00:00:00',updated_at:'2019-02-02 00:00:00'},
  {id:2,descricao:'Carteiro', status:0, created_at:'2019-02-02 00:00:00',updated_at:'2019-02-02 00:00:00'}]

  ngOnInit() {
  }

}
