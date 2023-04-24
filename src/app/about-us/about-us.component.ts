import { Component } from '@angular/core';
import { faSquareFacebook, faLinkedin, faSquareInstagram, faSquareTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  faSquareFacebook = faSquareFacebook;
  faSquareTwitter = faSquareTwitter;
  faLinkedin = faLinkedin;
  faSquareInstagram = faSquareInstagram;
}
