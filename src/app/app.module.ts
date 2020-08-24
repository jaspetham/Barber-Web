
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { OurBarbersComponent } from './our-barbers/our-barbers.component';
import { OurWorksComponent } from './our-works/our-works.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutUsComponent,
    ServiceComponent,
    OurBarbersComponent,
    OurWorksComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    GalleryModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
