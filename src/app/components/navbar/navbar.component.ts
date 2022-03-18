import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  navbarTitle : string ; 

  name : string ; 
  constructor() {
    this.navbarTitle = ' To do list application '
    this.name = 'Ian Vincent Tampos '

   }

  ngOnInit(): void {
  }

}
