import { Component, OnInit } from '@angular/core';

import { Role } from '../classes/roles.model';
import { RoleService } from '../services/role.service'
import { AuthService } from '../../auth/services/auth.service';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styles: []
})
export class AdminRolesComponent implements OnInit {

  roles: Role[];

  // roles: [{"id":1,"name":"Carteiro","label":"Empregados que realizam a entraga","grupo":0,"created_at":"2019-05-28 13:36:56","updated_at":"2019-05-28 13:36:56"},{"id":2,"name":"Gerente","label":"Gerente da unidade","grupo":0,"created_at":"2019-05-28 13:36:56","updated_at":"2019-05-28 13:36:56"},{"id":3,"name":"Gestor Operacional","label":"Gerente geral das atividades externas","grupo":0,"created_at":"2019-05-28 13:36:56","updated_at":"2019-05-28 13:36:56"}];


  constructor(private roleService: RoleService, private auth: AuthService) { }

  ngOnInit() {

    this.getRoles();
    // console.log(this.cabeçalho);
  }

  getRoles(){
    this.roleService.getRoles()
    .subscribe(dados => this.roles = dados.roles);
  }




}
