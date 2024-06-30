import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { HomeComponent } from '../view/home/home.component';
import { VisitorsByDateComponent } from '../searches/visitor/visitors-by-date/visitors-by-date.component';
import { VisitorsAndExhibitionsComponent } from '../searches/visitor/visitors-and-exhibitions/visitors-and-exhibitions.component';
import { VisitorSearchListComponent } from '../view/visitor-search-list/visitor-search-list.component';
import { UnavailableSearchListComponent } from '../view/unavailable-search-list/unavailable-search-list.component';
import { VisitorExhibitionCountComponent } from '../searches/visitor/visitor-exhibition-count/visitor-exhibition-count.component';

const routes: Routes = [
    { 
      path: 'home', 
      component: HomeComponent,
      children: [
        { path: 'visitors-and-exhibitions', component: VisitorsAndExhibitionsComponent },
        { path: 'visitors-by-date', component: VisitorsByDateComponent },
      ]
    },
    { 
      path: 'visitor-search-list', 
      component: VisitorSearchListComponent,
      children: [
        { path: 'visitors-and-exhibitions', component: VisitorsAndExhibitionsComponent },
        { path: 'visitors-by-date', component: VisitorsByDateComponent },
      ]
    },
    { path: 'unavailable-search-list', component: UnavailableSearchListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'visitors-and-exhibitions', component: VisitorsAndExhibitionsComponent },
    { path: 'visitors-by-date', component: VisitorsByDateComponent },
    { path: 'visitor-exhibition-count', component: VisitorExhibitionCountComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
    ]
})
export class AppModule { }
