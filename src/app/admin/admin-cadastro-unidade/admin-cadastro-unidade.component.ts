import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cadastro-unidade',
  templateUrl: './admin-cadastro-unidade.component.html',
  styles: []
})
export class AdminCadastroUnidadeComponent implements OnInit {


  unidades = [
    {id:'1',nome_unidade:'CDD Adrianópolis',efetividade:97.7, sigla:"ADN", se:"AM"},
    {id:'2',nome_unidade:'CDD Aleixo',efetividade:98, sigla:"ALX", se:"AM"},
    {id:'3',nome_unidade:'CDD Cachoeirinha',efetividade:85, sigla:"CHO", se:"AM"},
    {id:'4',nome_unidade:'CDD Cidade Nova',efetividade:99, sigla:"CDN", se:"AM"},
    {id:'5',nome_unidade:'CDD Flores',efetividade:95, sigla:"FLS", se:"AM"},
    {id:'6',nome_unidade:'CDD Manaus',efetividade:98, sigla:"MAO", se:"AM"},
    {id:'7',nome_unidade:'CDD Rio Negro',efetividade:89, sigla:"RNG", se:"AM"},
    {id:'8',nome_unidade:'CDD Zona Norte',efetividade:99, sigla:"ZNT", se:"AM"},
    {id:'9',nome_unidade:'CDD São Jose Operario',efetividade:95, sigla:"SJS", se:"AM"},
    {id:'10',nome_unidade:'CDD Manacapuru',efetividade:87.3, sigla:"MAN", se:"AM"}]

  estados = [
    {"nome": "Acre", "sigla": "AC"},
    {"nome": "Alagoas", "sigla": "AL"},
    {"nome": "Amapá", "sigla": "AP"},
    {"nome": "Amazonas", "sigla": "AM"},
    {"nome": "Bahia", "sigla": "BA"},
    {"nome": "Ceará", "sigla": "CE"},
    {"nome": "Distrito Federal", "sigla": "DF"},
    {"nome": "Espírito Santo", "sigla": "ES"},
    {"nome": "Goiás", "sigla": "GO"},
    {"nome": "Maranhão", "sigla": "MA"},
    {"nome": "Mato Grosso", "sigla": "MT"},
    {"nome": "Mato Grosso do Sul", "sigla": "MS"},
    {"nome": "Minas Gerais", "sigla": "MG"},
    {"nome": "Pará", "sigla": "PA"},
    {"nome": "Paraíba", "sigla": "PB"},
    {"nome": "Paraná", "sigla": "PR"},
    {"nome": "Pernambuco", "sigla": "PE"},
    {"nome": "Piauí", "sigla": "PI"},
    {"nome": "Rio de Janeiro", "sigla": "RJ"},
    {"nome": "Rio Grande do Norte", "sigla": "RN"},
    {"nome": "Rio Grande do Sul", "sigla": "RS"},
    {"nome": "Rondônia", "sigla": "RO"},
    {"nome": "Roraima", "sigla": "RR"},
    {"nome": "Santa Catarina", "sigla": "SC"},
    {"nome": "São Paulo", "sigla": "SP"},
    {"nome": "Sergipe", "sigla": "SE"},
    {"nome": "Tocantins", "sigla": "TO"}

  ]

  constructor() { }

  ngOnInit() {
  }

}
