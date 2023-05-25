import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import { faPersonSkiing } from '@fortawesome/free-solid-svg-icons';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { faPersonSkating } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})


export class HomePageComponent {

  constructor(private router:Router){
  }

  faYoutube = faYoutube;
  faPersonBiking = faPersonBiking;
  faPersonSkiing = faPersonSkiing;
  faPersonRunning = faPersonRunning;
  faPersonSwimming = faPersonSwimming;
  faPersonHiking = faPersonHiking;
  faPersonSkating = faPersonSkating;

  signInClicked(){
    this.router.navigate(['/sign-in'])
  }

  contactUsClicked(){
    this.router.navigate(['/contact-us'])
  }
 //about product page is created. Still have't merged. Need to create new routing link when merged
  aboutProductClicked(){
    this.router.navigate(['/about-product'])
  }
}
