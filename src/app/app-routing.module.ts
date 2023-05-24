import { transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AHomeComponent } from './a-home/a-home.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AdminComponent } from './admin/admin.component';
import { ChechbookReqListComponent } from './chechbook-req-list/chechbook-req-list.component';
import { ChechbookReqComponent } from './chechbook-req/chechbook-req.component';
import { DipositReqListComponent } from './diposit-req-list/diposit-req-list.component';
import { DipositReqComponent } from './diposit-req/diposit-req.component';
import { ProfileComponent } from './profile/profile.component';
import { TransectionReqListComponent } from './transection-req-list/transection-req-list.component';
import { TransectionReqComponent } from './transection-req/transection-req.component';
import { UHomeComponent } from './u-home/u-home.component';

import { UregistrationComponent } from './uregistration/uregistration.component';

import { UserComponent } from './user/user.component';
import { WithdrolReqListComponent } from './withdrol-req-list/withdrol-req-list.component';
import { WithdrolReqComponent } from './withdrol-req/withdrol-req.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'withdrolreq',
    component:WithdrolReqComponent
  },
  {
    path:'trasectionReq',
    component:TransectionReqComponent
  },
  {
    path:'dipositreq',
    component:DipositReqComponent
  },
  {
    path:'chackbookreq',
    component:ChechbookReqComponent
  },
  {
    path:'addaccount',
    component:AddaccountComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'uregistration',
    component:UregistrationComponent
  },
  {
    path:'u-home',
    component:UHomeComponent
  },
  {
    path:'aHome',
    component:AHomeComponent
  },
  {
    path:'withdrolReqList',
    component:WithdrolReqListComponent
  },
  {
    path:'dipositReqList',
    component:DipositReqListComponent
  },
  {
    path:'checkbookReqList',
    component:ChechbookReqListComponent
  },
  {
    path:'transectionReqList',
    component:TransectionReqListComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
