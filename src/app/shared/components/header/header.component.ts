import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imagenBackground = '../../../../assets/images/fondoaa2.jpg';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
