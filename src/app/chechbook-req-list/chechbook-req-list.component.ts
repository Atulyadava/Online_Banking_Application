import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-chechbook-req-list',
  templateUrl: './chechbook-req-list.component.html',
  styleUrls: ['./chechbook-req-list.component.css']
})
export class ChechbookReqListComponent implements OnInit{
checkbookR:any
constructor(private ser:MyserviceService){}
  ngOnInit(): void {
    this.ser.getchackbookReq().subscribe(res=>{
      this.checkbookR=res;
    })
  }

  confir(id:number){
    this.ser.chackbookStatus(this.checkbookR,id).subscribe(res=>{
      
    })
  }
}
