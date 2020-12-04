import { Component, OnInit } from '@angular/core';
//using ng bootstrap in html
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 //
  constructor() { }
  ngOnInit(): void {
  } 
  signupClick(){
   console.log("sign up clicked")
  }
  images = ['../../assets/images/image1.jpg','../../assets/images/image2.png','../../assets/images/image3.jpg']
}





