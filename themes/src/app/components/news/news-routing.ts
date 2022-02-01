import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MercadeoComponent } from './../../categories-list/mercadeo/mercadeo.component';
import { MaterialesComponent } from './../../categories-list/materiales/materiales.component';
import { ManufacturaComponent } from './../../categories-list/manufactura/manufactura.component';
import { SeguridadComponent } from './../../categories-list/seguridad/seguridad.component';
import { RoboticaComponent } from './../../categories-list/robotica/robotica.component';
import { SostenibilidadComponent } from './../../categories-list/sostenibilidad/sostenibilidad.component';
import { TecnologiaComponent } from './../../categories-list/tecnologia/tecnologia.component';

const routes: Routes = [
  {
    path: ':materiales',
    component: MaterialesComponent
  },
  {
    path: ':mercadeo',
    component: MercadeoComponent
  },
  {
    path: '::robotica',
    component: RoboticaComponent
  },
  {
    path: ':manofactura',
    component: ManufacturaComponent
  },
  {
    path: ':seguridad',
    component: SeguridadComponent
  },
  {
    path: ':robotica',
    component: RoboticaComponent
  },
  {
    path: ':sostenibilidad',
    component: SostenibilidadComponent
  },
  {
    path: ':tecnología',
    component: TecnologiaComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class newsRoutingModule {}
