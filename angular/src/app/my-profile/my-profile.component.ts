import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';




@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})


export class MyProfileComponent implements OnInit {

   constructor(private dataService: DataService , private http:HttpClient) { } 
    data:any; 
    postID:any;

    token=localStorage.getItem("user-token")
   headers = new HttpHeaders().set('Authorization', '' + this.token).set('Content-Type', 'application/json; charset=utf-8')

   className(x:any){//for making an id
    this.postID= x+ ""
    return this.postID
  } 
 delete(id :number){
   if(confirm('Are you sure you want to delete?')){
  this.dataService.deleteMethod(this.headers, id).subscribe(res =>{
    console.log("data")
  },err=> {console.log(err)})}}
   ngOnInit() {

   
    this.dataService.getProfile('myProfile',this.headers).subscribe(res =>{
    
              this.data =res;
              console.log(this.data,"fdf");
    
         },err =>{console.log('error:', err)})
      }
   

      likeButton(id:any) {

        this.dataService.sendPostRequest({ "id" :id},'likes', this.headers).subscribe(
      res => {
        console.log(res)
       },err=>{
         console.log('yalahhhwii')
         } 
      )
  }
  refresh(): void {
    window.location.reload();
  }
}
