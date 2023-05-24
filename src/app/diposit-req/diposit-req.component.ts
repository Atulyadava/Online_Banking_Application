import { Component } from '@angular/core';
import { DipositReq } from '../module/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-diposit-req',
  templateUrl: './diposit-req.component.html',
  styleUrls: ['./diposit-req.component.css']
})
export class DipositReqComponent {
diposit:DipositReq=new DipositReq()
constructor(private serv:MyserviceService){}

dipositReq(){
this.serv.addDipositReq(this.diposit).subscribe(res=>{
 console.log(res)
 alert("request sended please wait")
})
}
}
