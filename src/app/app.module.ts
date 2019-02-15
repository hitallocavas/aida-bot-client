import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './views/clientes/clientes.component';
import { PrestadoresComponent } from './views/prestadores/prestadores.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { AidaService } from './aida-service/aida-service.component';
import {RatingModule} from 'primeng/rating';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesPrestadorComponent } from './views/detalhes-prestador/detalhes-prestador.component';
import { ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    PrestadoresComponent,
    InicioComponent,
    DetalhesPrestadorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RatingModule,
    AppRoutingModule,
    ToastModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [AidaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
