import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';
import { AdminComponent } from './../admin.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { ProfileComponent } from './../../auth/profile/profile.component';
import { AdminRolesComponent } from '../admin-roles/admin-roles.component';
import { AdminMotivosComponent } from '../admin-motivos/admin-motivos.component';
import { AdminRegistroDiariosComponent } from '../admin-registro-diarios/admin-registro-diarios.component';
import { AdminTelaGestorComponent } from '../admin-tela-gestor/admin-tela-gestor.component';
import { AdminCadastroUnidadeComponent } from '../admin-cadastro-unidade/admin-cadastro-unidade.component';
import { AdminTelaCarteiroComponent } from '../admin-tela-carteiro/admin-tela-carteiro.component';
import { AdminImportarDadosComponent } from '../admin-importar-dados/admin-importar-dados.component';
import { AdminImportarEfetividadeComponent } from '../admin-importar-efetividade/admin-importar-efetividade.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          { path: 'dashboard1', component: AdminDashboard1Component },
          { path: 'dashboard2', component: AdminDashboard2Component },
          { path: 'profile', component: ProfileComponent },
          { path: 'cadastro/roles', component: AdminRolesComponent },
          { path: 'cadastro/motivos', component: AdminMotivosComponent },
          { path: 'registros', component: AdminRegistroDiariosComponent },
          { path: 'gestor', component: AdminTelaGestorComponent },
          { path: 'cadastro/unidades', component: AdminCadastroUnidadeComponent },
          { path: 'individual', component: AdminTelaCarteiroComponent },
          { path: 'carteiro/importar', component: AdminImportarDadosComponent },
          { path: 'efetividade/importar', component: AdminImportarEfetividadeComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
