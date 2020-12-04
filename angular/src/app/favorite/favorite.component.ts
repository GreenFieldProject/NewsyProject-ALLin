import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { provideRoutes } from '@angular/router';



@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {
  data:any
  postID:any;

  token=localStorage.getItem("user-token")
  headers = new HttpHeaders().set('Authorization', '' + this.token).set('Content-Type', 'application/json; charset=utf-8')
  constructor(private dataService: DataService , private http:HttpClient) {}
   className(x:any){//for making an id
    this.postID= x+ ""
    return this.postID
  } 
  refresh(): void {
    window.location.reload();
  }
  unsaveButton(id:any) {
    console.log(id)
this.dataService.unsavedMethod(this.headers, id).subscribe(res=>{
  // this.refresh()
 
  console.log('amaall');
  setTimeout(()=>{this.refresh()},300)
},err=>{console.log(err)})

 setTimeout(()=>{this.refresh()},300)
}


  ngOnInit(): void {
    this.http.get('http://localhost:8000/favorite' ,{'headers':this.headers}).subscribe(res =>
      {
        this.data=res
        console.log(res)
      },err =>{
        console.log(err)
      })
  }
 

}