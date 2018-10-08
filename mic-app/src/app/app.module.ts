import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/navigation/desktop/nav/nav.component';
import { HealthformComponent } from './product/health/desktop/healthform/healthform.component';
import { HealthSectionComponent } from './product/health/desktop/healthform/health-section/health-section.component';
import { FooterComponent } from './layout/footer/desktop/footer/footer.component';
import { FooterNavComponent } from './layout/footer/desktop/footer/footer-nav/footer-nav.component';
import { FooterSocialComponent } from './layout/footer/desktop/footer/footer-social/footer-social.component';
import { ProductBarComponent } from './product/product-bar/product-bar.component';
import { FeatureComponent } from './product/feature/feature.component';
import { TestimonialComponent } from './product/testimonial/testimonial.component';
import { AboutProductComponent } from './product/health/about-product/about-product.component';
import { ProductBlogComponent } from './product/product-blog/product-blog.component';
import { ProductContentComponent } from './product/health/product-content/product-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HealthformComponent,
    HealthSectionComponent,
    FooterComponent,
    FooterNavComponent,
    FooterSocialComponent,
    ProductBarComponent,
    FeatureComponent,
    TestimonialComponent,
    AboutProductComponent,
    ProductBlogComponent,
    ProductContentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'mic-app'}),
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

