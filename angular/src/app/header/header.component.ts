import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  logout(): boolean {
    console.log("loged out!")
    localStorage.removeItem("user-token")
    return false;
  }
  ngOnInit(): void {
  }

}
