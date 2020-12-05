import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  redirect(route:string){
    if(localStorage.getItem("user-token")){
    this.goToPage(route)}
    else {
      alert("you are not authorized , please log in first ")
      this.goToPage("login")
    }
  }
  logout(): boolean {
    console.log("loged out!")
    localStorage.removeItem("user-token")
    return false;
  }
  ngOnInit(): void {
  }

}
