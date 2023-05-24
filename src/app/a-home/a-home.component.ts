import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrls: ['./a-home.component.css']
})
export class AHomeComponent {
 constructor(private rout:Router){

 }
 withdrolReq(){
 this.rout.navigate(['/','withdrolReqList']);
 }
 dipositReq(){
  this.rout.navigate(['/','dipositReqList'])
 }
 transferReq(){
  this.rout.navigate(['/','transectionReqList'])
 }

 chackbookReq(){
  this.rout.navigate(['/','checkbookReqList'])
 }

 
}
