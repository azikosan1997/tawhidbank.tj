import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../../../services/news.service";
import {LanguageServiceService} from "../../../services/language-service.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  displayingTjNews: any = null;
  displayingEnNews: any = null;
  displayingRuNews: any = null;
  displayingNews: any[] = [];
  lang: string = 'tj'

  constructor(private newsService: NewsService,
              private router: Router,
              private languageService: LanguageServiceService,) {

  }

  ngOnInit() {

    this.newsService.getAllNews()
      .subscribe({
        next: (data: any) => {
          this.processNewsData(data);
          const language = sessionStorage.getItem('lang') || 'en';
          if (language === 'tj') {
            this.displayingNews = this.displayingTjNews;
          } else if (language === 'ru') {
            this.displayingNews = this.displayingRuNews;
          } else {
            this.displayingNews = this.displayingEnNews;
          }

          this.languageService.selectedLanguage$.subscribe(langCode => {
            this.updateDisplayingNewsBasedOnLanguage(langCode);
          });
        },
        error: (error: any) => {

        }
      })
  }

  processNewsData(data: any): void {
    this.displayingTjNews = [];
    this.displayingEnNews = [];
    this.displayingRuNews = [];

    if (data && data.length > 0) {
      data.forEach((newsItem: any) => {
        this.displayingTjNews.push({
          id: newsItem.id,
          author_id: newsItem.author_id,
          post_date: newsItem.post_date,
          title: newsItem.title_tj,
          description: this.formatDescription(newsItem.description_tj),
          image: newsItem.image
        });

        this.displayingEnNews.push({
          id: newsItem.id,
          author_id: newsItem.author_id,
          post_date: newsItem.post_date,
          title: newsItem.title_en,
          description: this.formatDescription(newsItem.description_en),
          image: newsItem.image
        });

        this.displayingRuNews.push({
          id: newsItem.id,
          author_id: newsItem.author_id,
          post_date: newsItem.post_date,
          title: newsItem.title_ru,
          description: this.formatDescription(newsItem.description_ru),
          image: newsItem.image
        });
      });
    }
  }

  updateDisplayingNewsBasedOnLanguage(langCode: string): void {
    if (langCode === 'tj') {
      this.displayingNews = this.displayingTjNews;
    } else if (langCode === 'ru') {
      this.displayingNews = this.displayingRuNews;
    } else {
      this.displayingNews = this.displayingEnNews;
    }
  }

  formatDescription(description: string): string {
    const tabSpaces = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    const tabTwoSpaces = '&nbsp;&nbsp;&nbsp;&nbsp;';
    return tabSpaces + description.replace(/•\t/g, `${tabTwoSpaces}<br>${tabTwoSpaces}•`);
  }

  goToNewsPage(id: string): void {
    this.router.navigate(['/o-banke/news', id]);
  }
}
