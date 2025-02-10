import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedinIn, faBluesky);
  }
}
