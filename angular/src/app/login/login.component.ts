import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  posts:any;
  constructor(private dataService: DataService , private router: Router) {
    // person = new Person();
  //   dataService.getProfile().subscribe(res =>{
  //   console.log(res);
  //      this.posts =res;

  // },err =>{console.log('error:', err)})
}

 goToPage(pageName:string){
  this.router.navigate([`${pageName}`]);
}

postMethod(Email:any,Password:any){
  var credentInfo={
    email: Email.value,
    password: Password.value
  }
  console.log(credentInfo)
  if (!credentInfo.email || !credentInfo.password){
    alert('You need to fill in all informations')
  }
this.dataService.sendPostLogin(credentInfo).subscribe(
  res => {
      console.log(res,"amallllllll");
    
  
    localStorage.setItem("user-token", res)
    console.log(localStorage.getItem("user-token"))
    if(localStorage.getItem("user-token")){
      console.log(localStorage.getItem("user-token"))
      this.goToPage('home')
  }
},err=>{
  alert(err.error);
  
}

)}
  onSubmit(Email:any,Password:any) {
    var credentInfo={
      Email: Email.value,
      Password: Password.value
    }

//     console.log(credentInfo);
//     this.dataService.getProfile().subscribe(res =>{
//     console.log(res);
//        this.posts =res;

//   },err =>{console.log('error:', err)})
//   this.dataService.postProfile({
//     email : "Razan@gmail.com",
//     password : "koukoutccca122"} )
// .subscribe(res =>{
//     console.log(res);
//        this.posts =res;

//   },err =>{console.log('error:', err)})
  ///////////////////////////////////////////////////////////////////////////

//     this.dataService.postProfile({
//       email : "Razan@gmail.com",
//       password : "koukoutccca122"} )
// .subscribe(res =>{
//       console.log(res);
//          this.posts =res;

//     },err =>{console.log('error:', err)})
///////////////////////////////////////////////////////////
  }

  ngOnInit(): void {
  }

}
