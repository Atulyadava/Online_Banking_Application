import { Component } from '@angular/core';
import { TransferReq } from '../module/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transection-req',
  templateUrl: './transection-req.component.html',
  styleUrls: ['./transection-req.component.css']
})
export class TransectionReqComponent {
trasection:TransferReq=new TransferReq();

constructor(private serv:MyserviceService){}

  trasectionReq(){
this.serv.addTransferReq(this.trasection).subscribe(res=>{
console.log(res)
alert("your requestis sended please wait")
})
  }
}
