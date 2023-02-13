import { Component } from '@angular/core';
import {TranslationService} from "./i18n";

import {locale as enLang} from './i18n/en';
import {locale as viLang} from './i18n/vi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web_shop_v1';

  constructor(private translationService: TranslationService) {
    // load cái này là nhất thiết => load lên vi và en ở i18n
    // b1: constructor ở translate service
    // b2: chạy vào đây, chính là hàm ở translate service
    this.translationService.loadTranslations(
      enLang,
      viLang
    );
  }

}


