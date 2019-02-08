import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AidaService } from 'src/app/aida-service/aida-service.component';
import { Prestador } from 'src/app/models/prestador.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestadores',
  templateUrl: './prestadores.component.html',
  styleUrls: ['./prestadores.component.css']
})
export class PrestadoresComponent implements OnInit {

  private principal:boolean = true;
  private urls = new Array<String>();
  private avQualidade:Number = 0;
  private avPrazo:Number = 0;
  private avOrcamento:Number = 0;
  private avAtendimento:Number = 0;
  private avGeral:Number = 0;
  private prestadorModel:Prestador;
  private prestador:Object = new Object();

  private listaPrestadores:Object[] = [];
 
  constructor(private aidaService:AidaService,
    private router: Router,) {  
  }

  ngOnInit() {
    this.initListaPrestadores();
  }

  private initListaPrestadores(){
    this.aidaService.getPrestadores().then(
      data => {
        console.log(data);
          data.map(item => {
            console.log(item);
            this.listaPrestadores.push(item);
          })
      }
    )
  }

  private cadastro(){
    this.principal = false;
  }

  private showPrestador(prestador){
    this.router.navigate(['prestador',prestador["_id"]]);
  }

  private changeRate(){
    this.avGeral = (this.avAtendimento.valueOf() + this.avPrazo.valueOf() + this.avQualidade.valueOf() + this.avOrcamento.valueOf())/4;
  }

  private detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
        console.log(this.urls);
      }
    }
  }

  private confirmarCadastro(){
    this.prestador["emailUsuario"] = "hcs3@cin.ufpe.br";
    this.prestador["portfolio"] = this.urls;
    this.prestador["avaliacaoArquiteto"] = new Object();
    this.prestador["avaliacaoArquiteto"]["avGeral"] = this.avGeral;
    this.prestador["avaliacaoArquiteto"]["avOrcamento"] = this.avOrcamento;
    this.prestador["avaliacaoArquiteto"]["avAtendimento"] = this.avAtendimento;
    this.prestador["avaliacaoArquiteto"]["avPrazo"] = this.avPrazo;
    this.prestador["avaliacaoArquiteto"]["avQualidade"] = this.avQualidade;

    console.log(this.prestador)
    this.aidaService.cadastrarPrestador(this.prestador).then(
      data => {
        console.log(data);
        let envio:Object = new Object();
        this.principal = true;
        envio["_id"] = data["_id"];
        envio["UrlPerfil"] = "http://localhost:4200/prestador/" + data["_id"];
        this.aidaService.atualizarPrestador(envio).then(data => this.principal = false);
      }
    )

  }

}
