import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from '../../services/languages.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-chip',
  templateUrl: './category-chip.component.html',
  styleUrls: ['./category-chip.component.scss']
})
export class CategoryChipComponent implements OnInit {
  @Input() categoryName: string = "";
  category: Category | undefined;
  currentLanguage: string = "";

  constructor(protected languageService: LanguageService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage;
    this.categoryService.getCategoryByName(this.categoryName).then((category: Category) => { this.category = category; });
  }
}
