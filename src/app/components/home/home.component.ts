import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavComponent,
    DashboardComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
}
