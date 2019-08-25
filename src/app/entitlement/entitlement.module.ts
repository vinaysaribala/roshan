import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitlementRoutingModule } from './entitlement-routing.module';
import { IndexComponent } from './index.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { WorkgroupComponent } from './workgroup/workgroup.component';
import { EntitlementComponent } from './entitlement/entitlement.component';


@NgModule({
  declarations: [
    IndexComponent, 
    HomeComponent, 
    WorkgroupComponent, 
    EntitlementComponent
  ],
  imports: [
    CommonModule,
    EntitlementRoutingModule,
    SharedModule
  ]
})
export class EntitlementModule { }
