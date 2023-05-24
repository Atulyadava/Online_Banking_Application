import { Component } from '@angular/core';
import { User } from '../module/user';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-uregistration',
  templateUrl: './uregistration.component.html',
  styleUrls: ['./uregistration.component.css']
})
export class UregistrationComponent {

  user:User= new User();
 constructor(private serv:MyserviceService){}

  request(){
    this.serv.addNewUser(this.user).subscribe(res=>{
      console.log(res)
    });
    alert("your request has been sended")
  }
}
