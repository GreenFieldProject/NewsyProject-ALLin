import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  credentInfo:any

  
  // name = new FormControl('');
  constructor(private router: Router,private http:HttpClient) { }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  onSubmit(Username:any,Email:any,Password:any) {
     this.credentInfo={
      username: Username.value,
      email: Email.value,
      password: Password.value
    }
    console.log(this.credentInfo);
  }
  ngOnInit(): void {
    
}
signUp(){
  // console.log(this.credentInfo)
this.http.post("http://localhost:8000/signup", this.credentInfo).subscribe(res =>
    {
    this.goToPage('login')
      console.log('success')
    },err =>{
      alert(err.error)
      console.log(err.error)
    })
  }
}