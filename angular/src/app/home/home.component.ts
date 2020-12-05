import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Profile } from '../profileobj';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
counting:any;
date =new Date().toLocaleDateString();
token=localStorage.getItem("user-token")
  headers = new HttpHeaders().set('Authorization', '' + this.token).set('Content-Type', 'application/json; charset=utf-8')
  click : boolean = false;
categoryURL :any
category:any
data:any;
postID:any;
valueOfPost = "";
url = "";
posts:any;
postHttp ={post:{description:"", category:"" ,date:this.date ,url:"",likes:0,}};
  constructor(private dataService: DataService , private http:HttpClient, private router: Router) { }
   className(x:any){//for making an id
      this.postID= x+ ""
      return this.postID
    }
  //post request function for posting
  postMethod(){
      this.postHttp.post.description=this.valueOfPost //the input value
      if(this.postHttp.post.category === ""){
        alert("Please choose the category of your post")
      }
      this.dataService.sendPostRequest(this.postHttp, 'home', this.headers).toPromise().then(data =>{
        console.log("data :",this.headers)
       }).catch(error =>{
         console.log(error ,'error')});
    }
 ngOnInit() {
this.http.get('http://localhost:8000/home',{'headers':this.headers}).subscribe(res =>{
          this.data =res;
          console.log(this.data,"fdf");
     },err =>{alert(err.error);
     })
  }
refresh(): void {
    window.location.reload();
  }
selectFile(event:any){
  if (event.target.files){
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event: any) => {
      this.url = event.target.result
      console.log(typeof this.url)
      this.postHttp.post.url = this.url;
    }
  }
  console.log(this.postHttp)
}
likeButton(id:any) {
  this.dataService.sendPostRequest({ "id" :id},'likes', this.headers).subscribe(
res => {
 console.log('jjjj')
  setTimeout(()=>{this.refresh()}, 400);
 },err=>{
   console.log('yalahhhwii')
   }
  )}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
saveButton(id:any) {
  console.log('clicked')
  this.dataService.sendPostRequest({"id" :id},'save', this.headers).subscribe(
res => {
  console.log("save clicked!",id);
},err=>{
  console.log(err,'error')
}
);
}
categoryPost(event:any){
  this.postHttp.post.category = event.target.value;
  console.log(this.postHttp)
}
filterCategory(event:any){
   if (event.target.value === "Select a category"){
     this.refresh()
   }
  this.categoryURL='http://localhost:8000/filter/'+event.target.value;
console.log(this.categoryURL)
  this.http.get(this.categoryURL).subscribe(res =>{
          this.data =res;
          console.log(this.data,"fdf");
     },err =>{console.log('error:', err)})
  }
}