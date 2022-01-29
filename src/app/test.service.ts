import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import {Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestService {

 // public readonly API_URL = 'http://localhost:8080';
  constructor(private http : HttpClient,private router:Router) { }
  public addDetails(user:User):Observable<any>{

   return this.http.post<User>('http://localhost:4200/register',user);
   }





}
