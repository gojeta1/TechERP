import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


declare var M:any;

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(private router: Router, private el: ElementRef) { }


  ngOnInit(): void {

    if(typeof document !== 'undefined'){
      const elemns = document.querySelectorAll('.collapsible');
      const instances = M.Collapsible.init(elemns,{})
 
      const elems = document.querySelectorAll('.modal');
      const instances2 = M.Modal.init(elems,{})
    }
  } 




}