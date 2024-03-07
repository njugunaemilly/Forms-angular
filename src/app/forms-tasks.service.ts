import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsTasksService {
url: string = 'http://localhost:3000/users'

constructor(private http: HttpClient){ }

// function to retrieve all users
users(){
  return this.http.get(this.url)
}
//function to save new users after form is submitted
saveUser(data: any){
  return this.http.post(this.url, data)
}


}
