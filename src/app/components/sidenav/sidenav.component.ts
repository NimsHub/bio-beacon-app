import { Route, Router } from '@angular/router'
import {Component, ElementRef, HostListener} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder,private elementRef: ElementRef, private router: Router) {}
  

  contactUSClicked(){
    this.router.navigate(['/contact-us'])
  }

}
