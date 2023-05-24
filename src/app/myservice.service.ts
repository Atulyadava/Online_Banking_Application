import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckBookReq, DipositReq, PrimaryAcco, SavingAcco, TransferReq, User, WithdrolReq } from './module/user';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  addNewUser(obj:User){
    return this.http.post("http://localhost:8081/saveUser",obj)
  }

  getUser():Observable<User>{
    return this.http.get<User>("http://localhost:8081/gatUser");
      }

  updateProfilr(obj:any):Observable<any>{
    return this.http.put("http://localhost:8081/updateUser/2",obj);
  }

  addSavingAccount(obj1:any){
   return this.http.post("http://localhost:8081/saveSavingAcco",obj1)
  }

  addPrimaryAccount(obj2:any){
  return this.http.post("http://localhost:8081/savePrimaryAcco",obj2)
  }

  getPrimaryAcco():Observable<PrimaryAcco>{
  return this.http.get<PrimaryAcco>("http://localhost:8081/gatPrimaryAcco")
  }

  getSavingAcco():Observable<SavingAcco>{
    return this.http.get<SavingAcco>("http://localhost:8081/gatSavingAcco")
  }

  addCheckbookReq(obj3:any){
return this.http.post("http://localhost:8081/register/CheckBookReq",obj3)
  }
  addDipositReq(obj4:any){
return this.http.post("http://localhost:8081/register/DipositReq",obj4)
  }
  addWithdrolReq(obj5:any){
return this.http.post("http://localhost:8081/saveWithdrolReq",obj5)
  }

  addTransferReq(obj6:any){
    return this.http.post("http://localhost:8081/saveTransferReq",obj6)
  }

  getchackbookReq():Observable<CheckBookReq>{
 return this.http.get<CheckBookReq>("http://localhost:8081/getAllCheckBookReq");
  }
  getTransferReq():Observable<TransferReq>{
  return this.http.get<TransferReq>("http://localhost:8081/gatTransferReq");
  }
  getdipositReq():Observable<DipositReq>{
  return this.http.get<DipositReq>("http://localhost:8081/getAllDipositReq");
  }
  getwithdrolReq():Observable<WithdrolReq>{
  return this.http.get<WithdrolReq>("http://localhost:8081/getallWithdrolReq");
  }

  chackbookStatus(nobj:any,id:number):Observable<any>{
    return this.http.put("http://localhost:8081/updateCheckBookReq/"+id,nobj);
  }

  dipositReq(nobj1:any,id:number):Observable<any>{
  return this.http.put("http://localhost:8081/updateDipositReq/"+id,nobj1);
  }

  transferStatus(nobj2:any,id:number):Observable<any>{
 return this.http.put("http://localhost:8081/updateTransferReq/"+id,nobj2);
  }
 
  withdrolStatus(nobj3:any,id:number):Observable<any>{
 return this.http.put("http://localhost:8081/updateStatus/"+id,nobj3);
  }

}
