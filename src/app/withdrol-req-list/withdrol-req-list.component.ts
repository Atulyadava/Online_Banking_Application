import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-withdrol-req-list',
  templateUrl: './withdrol-req-list.component.html',
  styleUrls: ['./withdrol-req-list.component.css']
})
export class WithdrolReqListComponent implements OnInit{
withdrolR:any
  constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.ser.getwithdrolReq().subscribe(res=>{
      this.withdrolR=res;
    })
  }

  confirm(id:number){
  this.ser.withdrolStatus(this.withdrolR,id).subscribe(res=>{
 this.withdrolR=res;
  })
  }
}
