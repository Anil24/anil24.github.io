import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.css']
})
export class FooterNavComponent implements OnInit {

  currentYeaR:number;

  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
