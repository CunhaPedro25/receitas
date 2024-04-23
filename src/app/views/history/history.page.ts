import {Component, OnInit} from '@angular/core';
import {History} from "../../models/history.model";
import {LanguageService} from "../../services/languages.service";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class HistoryPage implements OnInit {
  history!: History;
  currentLanguage: string = "";

  constructor(protected languageService: LanguageService, private historyService: HistoryService) { }

  async ngOnInit() {
    this.currentLanguage = this.languageService.currentLanguage;
    this.loadHistory();
  }

  ionViewDidEnter(): void {
    this.currentLanguage = this.languageService.currentLanguage;
    this.languageService.switchLanguage(this.currentLanguage);
    this.loadHistory(); // Reload history data when entering the view
  }

  loadHistory(): void {
    this.historyService.getHistoryInformation().then(history =>
      this.history = history
    );
  }
}
