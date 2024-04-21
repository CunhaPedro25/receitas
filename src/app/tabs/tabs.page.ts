import { Component } from '@angular/core';
import { LanguageService } from '../services/languages.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(protected languageService: LanguageService) {}

}
