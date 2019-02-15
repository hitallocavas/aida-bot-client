import { Component, OnInit } from '@angular/core';
import { AidaService } from 'src/app/aida-service/aida-service.component';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [MessageService]
})
export class ClientesComponent implements OnInit {

  principal:Boolean = true;
  cliente:Object = new Object();
  private urls = new Array<String>();
  private listaClientes:Object[] = [];

  constructor(private service:AidaService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.service.getClientes().then(
      data => {
        console.log(data);
          data.map(item => {
            console.log(item);
            var str = item["prazo"]
            var date = new Date(str);
            item["dataPrazo"] = date.getDay() +"/"+ date.getMonth() +"/"+ date.getFullYear();
            this.listaClientes.push(item);
          })
      }
    )

  }

  adicionarCliente(){
    this.principal = false;
  }

  confirmarCadastro(){
    this.cliente["fotosProjeto"] = this.urls;
    console.log(this.cliente);
    this.service.cadastrarCliente(this.cliente).then(data => 
      {
        this.principal=true;
        console.log(data)
        this.messageService.add({
          key:'sucesso',
          severity: "success",
          summary: "OK!",
          detail: "Cliente cadastrado com sucesso!"
        });
      
      });
    

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
}
