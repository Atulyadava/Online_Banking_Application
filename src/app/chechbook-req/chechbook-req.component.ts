import { Component } from '@angular/core';
import { CheckBookReq } from '../module/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-chechbook-req',
  templateUrl: './chechbook-req.component.html',
  styleUrls: ['./chechbook-req.component.css']
})
export class ChechbookReqComponent {
checkbook:CheckBookReq=new CheckBookReq()
constructor(private serv:MyserviceService){

}
checkbookreq(){
this.serv.addCheckbookReq(this.checkbook).subscribe(res=>{
  console.log(res)
  alert("request sended please wait")
})
}

}
