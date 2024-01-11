import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
declare var M: any;

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet/>
    `,
    imports: [
        CommonModule,
        RouterOutlet,
    ]
})
export class AppComponent  {
  title = 'techno';
}
