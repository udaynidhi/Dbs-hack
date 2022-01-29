import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './test.service';
import { User } from './User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title="firstproject";
  public stock:string='';
 public ordertype:string='';
 public price:string='';
 public quantity:string='';
 public :string='';

   constructor(private svc:TestService,private router:Router) {
   }
   user:User=new User();

   ngOnInit(): void {



   }
   public signIn(){

     this.user.store(this.stock,this.ordertype,this.price,this.quantity);
     console.log(this.user);
     console.log(this.quantity);
     let resp=this.svc.addDetails(this.user);

     }



}
