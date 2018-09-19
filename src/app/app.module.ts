import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
let routes: Routes = [
  {
    path: 'feature',
    component: FeatureComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    PricingComponent,
    LoginComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
