import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component'; 
import { TokenInterceptor } from './token-interceptor';

import {Routes, RouterModule} from '@angular/router';
import { ProductComponent } from 'src/product/product.component';


const MWA_ROUTES = [
    {path:'products', component: ProductComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(MWA_ROUTES)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
