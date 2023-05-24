import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-u-home',
  templateUrl: './u-home.component.html',
  styleUrls: ['./u-home.component.css']
})
export class UHomeComponent implements OnInit {
 
   user:any;
   pAccount:any;
   sAccount:any;
  constructor(private serv:MyserviceService, private router:Router){}
  ngOnInit(): void {
    
    this.serv.getUser().subscribe(res=>
      {
     this.user=res;
      });

      this.serv.getPrimaryAcco().subscribe(res=>{
        this.pAccount=res;
      });
      
      this.serv.getSavingAcco().subscribe(res=>{
        this.sAccount=res;
      });
  }
  addAccount(){
    this.router.navigate(['/','addaccount'])
  }
  editProfile(){
this.router.navigate(['/','profile'])
  }

  withdrolReq(){
 this.router.navigate(['/','withdrolreq']);
  }
  chackbookReq(){
this.router.navigate(['/','chackbookreq']);
  }

  dipositReq(){
 this.router.navigate(['/','dipositreq'])
  }
  transectionReq(){
    this.router.navigate(['/','trasectionReq'])
  }
}

