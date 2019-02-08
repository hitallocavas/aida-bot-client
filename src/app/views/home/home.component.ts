import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabChoosed:String = '';
  showAlert:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public tabChoose(choosed){
    this.tabChoosed = choosed;
  }

  adicionarCliente(){
    alert("Adicionar Cliente");
  }

}
