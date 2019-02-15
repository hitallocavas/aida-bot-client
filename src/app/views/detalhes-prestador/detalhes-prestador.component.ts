import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AidaService } from 'src/app/aida-service/aida-service.component';

@Component({
  selector: 'app-detalhes-prestador',
  templateUrl: './detalhes-prestador.component.html',
  styleUrls: ['./detalhes-prestador.component.css']
})
export class DetalhesPrestadorComponent implements OnInit {

  private id:String = "";
  carregado:boolean = false;
  private prestador:Object = new Object();
  private avQualidade:Number = 0;
  private avPrazo:Number = 0;
  private avOrcamento:Number = 0;
  private avAtendimento:Number = 0;
  private avGeral:Number = 0;
  private nome:String = "";

  constructor(private route: ActivatedRoute,
              private aidaService:AidaService) { }

  ngOnInit() {

    this.route.params.subscribe(data =>{
      this.id = data["id"]
    });

    var aidi:Object = new Object();
    aidi["id"] = this.id;
    
    this.aidaService.getPrestadorById(aidi).then(
      data => {
        this.prestador = data;
        this.carregado = true;
        this.avGeral = data["avaliacaoArquiteto"]["avGeral"];
        this.avQualidade = data["avaliacaoArquiteto"]["avQualidade"];
        this.avOrcamento = data["avaliacaoArquiteto"]["avOrcamento"];
        this.avAtendimento = data["avaliacaoArquiteto"]["avAtendimento"];
        this.avPrazo = data["avaliacaoArquiteto"]["avPrazo"];
        this.nome = data["name"];
        this.prestador["profissional"] = this.prestador["profissional"].charAt(0).toUpperCase() + this.prestador["profissional"].slice(1);
        
      }
    )

  }

}
