import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-diposit-req-list',
  templateUrl: './diposit-req-list.component.html',
  styleUrls: ['./diposit-req-list.component.css']
})
export class DipositReqListComponent implements OnInit{
dipositR:any
  constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.ser.getdipositReq().subscribe(res=>{
      this.dipositR=res;
    })
  }

  confir(id:number){
 this.ser.dipositReq(this.dipositR,id).subscribe(res=>{
  this.dipositR=res;
 });
  }
}
