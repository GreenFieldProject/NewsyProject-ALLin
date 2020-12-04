import { Injectable } from '@angular/core';
import { Observable ,Subscription, interval} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  unsave:any
  baseUrl:string = "http://localhost:8000";
  constructor( private httpClient:HttpClient) {
  }
  getProfile( url:any,head:any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${url}`, {'headers':head})
    
  }

  //the post request function 
  sendPostRequest(data:any , url:any , header:any): Observable<any> {

    return this.httpClient.post(`${this.baseUrl}/${url}`,data,{'headers':header});
  }

  
chooseCategories(category:string) {
  return this.httpClient.get(`${this.baseUrl}/${category}`)

}

sendPostLogin(data: any): Observable<any> {
  return this.httpClient.post('http://localhost:8000/login', data,{responseType: 'text' });
}

deleteMethod(head:any ,id:any) {
  
  return this.httpClient.delete(this.baseUrl+'/delete/'+id, {'headers':head})
}

//http://localhost:4200/myprofile/:username
unsavedMethod(head:any ,id:any){
  return this.httpClient.delete(this.baseUrl+'/save/'+id, {'headers':head})

}}