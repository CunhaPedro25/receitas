import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../services/languages.service";
import {AboutService} from "../../services/about.service";
import {About} from "../../models/about.model";

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit{
  about!: About;
  currentLanguage: string = "";

  constructor(protected languageService: LanguageService, private aboutService: AboutService) { }

  ngOnInit() {
    this.currentLanguage = this.languageService.currentLanguage;
    this.loadAbout();
  }

  ionViewDidEnter(): void {
    this.currentLanguage = this.languageService.currentLanguage;
    this.languageService.switchLanguage(this.currentLanguage);
    this.loadAbout();
  }

  loadAbout(): void {
    this.aboutService.getAboutInformation().then(about =>
      this.about = about
    );
  }
}
