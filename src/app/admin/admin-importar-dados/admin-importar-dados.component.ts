import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../auth/services/auth.service';

declare var AdminLTE: any;

@Component({
  selector: 'app-admin-importar-dados',
  templateUrl: './admin-importar-dados.component.html',
  styleUrls: ['./admin-importar-dados.component.css']
})
export class AdminImportarDadosComponent implements OnInit{
  form: FormGroup;
  // formSRO: FormGroup;
  loading: boolean = false;
  apiUrl="http://local.sisaee.com/api/admin/carteiro/import";

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      import_file: null
    });
  }

  onFileChange(event) {
    console.log(this.form);

  }

  onSubmit() {
    console.log(event.target[0].files);
    if(event.target[0].files && event.target[0].files[0]){
      const arquivo = event.target[0].files[0];

      const formData = new FormData();
      formData.append('import_file', arquivo);
      formData.append('lotacao_id', String(this.authService.getLotacao().id));

      this.http.post(this.apiUrl, formData)
      .subscribe(resposta => console.log("upload feito!"));
    }
    setTimeout(() => {
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('import_file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  ngOnInit() {
    console.log(this.authService.getUser());
    // Update the AdminLTE layouts
   AdminLTE.init();
  }

}
