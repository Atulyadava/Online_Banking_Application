import { Component, OnInit } from '@angular/core';
import { User } from '../module/user';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
   user:any;
   
  constructor(private serv:MyserviceService){}
  ngOnInit(): void {
    this.serv.getUser().subscribe(res=>{ 
 this.user=res;
    })
  }
  editProfile(){
    const d={
      username:this.user.username,
      phone:this.user.phone,
      email:this.user.email
    };
 this.serv.updateProfilr(d).subscribe(resn=>{
  this.user=resn;
  console.log(resn)
 })
  }

}
