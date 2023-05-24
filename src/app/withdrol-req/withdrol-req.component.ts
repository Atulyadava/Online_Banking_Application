import { Component } from '@angular/core';
import { WithdrolReq } from '../module/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-withdrol-req',
  templateUrl: './withdrol-req.component.html',
  styleUrls: ['./withdrol-req.component.css']
})
export class WithdrolReqComponent {
withdrol:WithdrolReq=new WithdrolReq();
constructor(private Serv:MyserviceService){

}

WithdrolRequest(){
  this.Serv.addWithdrolReq(this.withdrol).subscribe(res=>{
    console.log(res);
    alert("request sended please wait")
  })
}
}
