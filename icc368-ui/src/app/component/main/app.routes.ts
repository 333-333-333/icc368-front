import { Routes } from '@angular/router';
import { HomeComponent } from '../view/home/home.component';
import { UnavailableSearchListComponent } from '../view/unavailable-search-list/unavailable-search-list.component';
import { VisitorSearchListComponent } from '../view/visitor-search-list/visitor-search-list.component';
import { VisitorsAndExhibitionsComponent } from '../searches/visitor/visitors-and-exhibitions/visitors-and-exhibitions.component';
import { VisitorsByDateComponent } from '../searches/visitor/visitors-by-date/visitors-by-date.component';
import { VisitorsByAttendancesComponent } from '../searches/visitor/visitors-by-attendances/visitors-by-attendances.component';
import { VisitorsChangeRateComponent } from '../searches/visitor/visitors-change-rate/visitors-change-rate.component';


export const routes: Routes = [
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
    { path: 'visitors-by-attendances', component: VisitorsByAttendancesComponent },
    { path: 'visitors-change-rate', component: VisitorsChangeRateComponent },
  ];
