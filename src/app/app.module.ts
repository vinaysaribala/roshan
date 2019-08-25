import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntitlementService } from './service/entitlement.service';
import { HttpService } from './service/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NikeInterceptor } from 'src/Interceptor/nikeinterceptor';
import { SharedModule } from './shared/shared.module';
import { EntitlementModule } from './entitlement/entitlement.module';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './entitlement/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    EntitlementModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent }
    ])
  ],
  providers: [ 
    EntitlementService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NikeInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
