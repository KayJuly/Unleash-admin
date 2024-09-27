import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../../services/nav.service';
import { ClickOutsideDirective } from '../../../directives/outside.directive';

interface selectedLanguage {
  language?: string;
  code?: any;
  type?: string;
  icon?: string;
}

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
    standalone: true,
    imports: [ClickOutsideDirective]
})
export class LanguageComponent {

  public language: boolean = false;

  public languages: selectedLanguage[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'pt'
  }]

  public selectedLanguage: selectedLanguage = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  constructor(public navServices: NavService, private translate: TranslateService) { }

  changeLanguage(lang: selectedLanguage) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }


}
