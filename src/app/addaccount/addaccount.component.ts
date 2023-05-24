import { Component } from '@angular/core';
import { PrimaryAcco, SavingAcco } from '../module/user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent {

  saving:SavingAcco=new SavingAcco();

  primary:PrimaryAcco=new PrimaryAcco();
  constructor(private servc:MyserviceService){

  }
  request(){
this.servc.addPrimaryAccount(this.primary).subscribe(res=>{
  console.log(res)
  
})
  }
  requestSavingAcco(){
  this.servc.addSavingAccount(this.saving).subscribe(res=>{
    console.log(res)
    alert(res);
  })
  }
}
