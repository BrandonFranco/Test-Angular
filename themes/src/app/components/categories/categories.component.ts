import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  fillerNavMobile=[
    {name:"Mercadeo automotriz"},
    {name:"Manufactura"},
    {name:"Tecnologia de procesos"},
    {name:"Seguridad industrial"},
    {name:"Manejo de materiales"},
    {name:"Sostenibilidad"},
    {name:"Robótica"}
  ]

  fillerNav=[
    {name:"Mercadeo automotriz"},
    {name:"Manufactura"},
    {name:"Tecnologia de procesos"},
    {name:"Seguridad industrial"},
    {name:"Manejo de materiales"},
    {name:"Sostenibilidad"},
    {name:"Robótica"}
  ]

  slideConfig = {"slidesToShow":3, "slidesToScroll": 1};
  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
