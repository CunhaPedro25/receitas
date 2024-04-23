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
  // Receber o nome da categoria por parâmetro
  @Input() categoryName: string = "";

  // Guardar categoria utilizando Modelo de categoria
  category: Category | undefined;
  currentLanguage: string = "";    //Utilizado para traduções


  constructor(protected languageService: LanguageService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage;
    // Chamar o serviço de categorias para procurar a categoria por nome
    this.categoryService.getCategoryByName(this.categoryName).then((category: Category) => { this.category = category; });
  }
}

