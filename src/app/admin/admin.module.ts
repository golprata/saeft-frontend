import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminRolesComponent } from './admin-roles/admin-roles.component';
import { RoleService } from './services/role.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminMotivosComponent } from './admin-motivos/admin-motivos.component';
import { AdminRegistroDiariosComponent } from './admin-registro-diarios/admin-registro-diarios.component';
import { AdminTelaGestorComponent } from './admin-tela-gestor/admin-tela-gestor.component';
import { AdminCadastroUnidadeComponent } from './admin-cadastro-unidade/admin-cadastro-unidade.component';
import { AdminTelaCarteiroComponent } from './admin-tela-carteiro/admin-tela-carteiro.component';
import { AdminImportarDadosComponent } from './admin-importar-dados/admin-importar-dados.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EfetividadeService } from './services/efetividades.service';
import { AdminImportarEfetividadeComponent } from './admin-importar-efetividade/admin-importar-efetividade.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminRolesComponent,
    AdminMotivosComponent,
    AdminRegistroDiariosComponent,
    AdminTelaGestorComponent,
    AdminCadastroUnidadeComponent,
    AdminTelaCarteiroComponent,
    AdminImportarDadosComponent,
    AdminImportarEfetividadeComponent
  ],
  providers: [
    RoleService,
    EfetividadeService
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
