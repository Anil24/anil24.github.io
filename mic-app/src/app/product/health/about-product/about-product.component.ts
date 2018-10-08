import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit {

  panelOpenState = [false,false];


  setaboutpdStep(index: number, state) {
    this.panelOpenState[index] = state;
  }

  constructor() { }

  ngOnInit() {
  }

}
