import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EdicionesComponent } from './ediciones/ediciones.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routing.module'
import { ProductListComponent } from './components/product.list/product.list.component';
import { RedesComponent } from './components/redes/redes.component';
import { PostTopComponent } from './components/post-top/post-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    EdicionesComponent,
    ProductListComponent,
    RedesComponent,
    PostTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
