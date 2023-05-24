import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transection-req-list',
  templateUrl: './transection-req-list.component.html',
  styleUrls: ['./transection-req-list.component.css']
})
export class TransectionReqListComponent implements OnInit{
tansferR:any
  constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.ser.getTransferReq().subscribe(res=>{
      this.tansferR=res;
    })
  }

  confir(id:number){
 this.ser.transferStatus(this.tansferR,id).subscribe(res=>{
 this.tansferR=res;
 });
  }
}
