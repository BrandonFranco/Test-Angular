import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-editions',
  templateUrl: './previous-editions.component.html',
  styleUrls: ['./previous-editions.component.scss']
})
export class PreviousEditionsComponent implements OnInit {

  slideConfig = {"slidesToShow":1.1, "slidesToScroll": 1};
  
  slides=[
    {img:"./../../../assets/img/Caja Edición.png"},
    {img:"./../../../assets/img/Caja Edición.png"},
    {img:"./../../../assets/img/Caja Edición.png"},
    {img:"./../../../assets/img/Caja Edición.png"},
  ];
  
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
