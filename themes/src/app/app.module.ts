import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSliderModule } from '@angular/material/slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

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
import { CategoriesComponent } from './components/categories/categories.component';
import { ManufacturaComponent } from './categories-list/manufactura/manufactura.component';
import { MaterialesComponent } from './categories-list/materiales/materiales.component';
import { MercadeoComponent } from './categories-list/mercadeo/mercadeo.component';
import { RoboticaComponent } from './categories-list/robotica/robotica.component';
import { SeguridadComponent } from './categories-list/seguridad/seguridad.component';
import { SostenibilidadComponent } from './categories-list/sostenibilidad/sostenibilidad.component';
import { TecnologiaComponent } from './categories-list/tecnologia/tecnologia.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MasLeidoComponent } from './components/mas-leido/mas-leido.component';
import { PreviousEditionsComponent } from './components/previous-editions/previous-editions.component';
import { BlockNewNormalComponent } from './components/block-new-normal/block-new-normal.component';
import { BlockNewNormalSecoundaryComponent } from './components/block-new-normal-secoundary/block-new-normal-secoundary.component';
import { InterestCategoriesComponent } from './components/interest-categories/interest-categories.component';
import { PublicityComponent } from './components/publicity/publicity.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

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
    PostTopComponent,
    CategoriesComponent,
    ManufacturaComponent,
    MaterialesComponent,
    TecnologiaComponent,
    SostenibilidadComponent,
    SeguridadComponent,
    RoboticaComponent,
    MercadeoComponent,
    ArticulosComponent,
    MasLeidoComponent,
    PreviousEditionsComponent,
    BlockNewNormalComponent,
    BlockNewNormalSecoundaryComponent,
    InterestCategoriesComponent,
    PublicityComponent,
    ArticuloComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    SlickCarouselModule,
    MatExpansionModule,
    MatTabsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
