import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser'


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config: any): any {
    config = {
      title: 'Tawhidbank',
      desctiption: 'Official Tawhidbank\'s web site',
      image: './assets/images/logo-tj.png',
      slug: ''
    }

    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({name: 'twitter:site', content: '@angularfirebase'});
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.desctiption});
    this.meta.updateTag({name: 'twitter:image', content: config.image});

    this.meta.updateTag({name: 'og:type', content: 'article'});
    this.meta.updateTag({name: 'og:site_name', content: 'tawhidbank.tj'});
  }
}
