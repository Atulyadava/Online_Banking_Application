import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule } from '@angular/common/http'
import { UregistrationComponent } from './uregistration/uregistration.component';
import { UHomeComponent } from './u-home/u-home.component';
import { AHomeComponent } from './a-home/a-home.component';
import { ProfileComponent } from './profile/profile.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { WithdrolReqComponent } from './withdrol-req/withdrol-req.component';
import { DipositReqComponent } from './diposit-req/diposit-req.component';
import { ChechbookReqComponent } from './chechbook-req/chechbook-req.component';
import { TransectionReqComponent } from './transection-req/transection-req.component';
import { ChechbookReqListComponent } from './chechbook-req-list/chechbook-req-list.component';
import { TransectionReqListComponent } from './transection-req-list/transection-req-list.component';
import { DipositReqListComponent } from './diposit-req-list/diposit-req-list.component';
import { WithdrolReqListComponent } from './withdrol-req-list/withdrol-req-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    
    UregistrationComponent,
         UHomeComponent,
         AHomeComponent,
         ProfileComponent,
         AddaccountComponent,
         WithdrolReqComponent,
         DipositReqComponent,
         ChechbookReqComponent,
         TransectionReqComponent,
         ChechbookReqListComponent,
         TransectionReqListComponent,
         DipositReqListComponent,
         WithdrolReqListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
