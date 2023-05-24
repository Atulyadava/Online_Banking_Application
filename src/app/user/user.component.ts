import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../module/user';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router,private serv:MyserviceService){}
  ngOnInit(): void {
    
  }
  user=new User();
  login(username:any,password:any){
    if(username==='atulaj' &&password==='atul'){
      this.router.navigate(['/','u-home'])
  }
}

  register(){
 
    this.router.navigate(['/','uregistration'])
  }
}


