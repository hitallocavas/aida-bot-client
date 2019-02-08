import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromiseState } from 'q';


@Injectable({providedIn: 'root'})

export class AidaService{

  private urlService:String;

  constructor(private http: HttpClient) { 
  this.urlService = "http://localhost:5000/auth/"
  }

  cadastrarPrestador(prestador):Promise<any>{
    return this.http.post(this.urlService + "cadastroPrestador",prestador).toPromise();
  }

  getPrestadores():Promise<any>{
    return this.http.get(this.urlService + "prestadores").toPromise();
  }

  getPrestadorById(id):Promise<any>{
    console.log(id);
    return this.http.post(this.urlService + "prestadoresById",id).toPromise();
  }

  atualizarPrestador(prestador):Promise<any>{
    return this.http.put(this.urlService + "prestadorUrl",prestador).toPromise();
  }

}
