import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../../services/news.service";
import {LanguageServiceService} from "../../../services/language-service.service";
import {AnnouncementsService} from "../../../services/announcements.service";

@Component({
  selector: 'app-announcements-detail',
  templateUrl: './announcements-detail.component.html',
  styleUrls: ['./announcements-detail.component.scss']
})
export class AnnouncementsDetailComponent {
  displayingTjNews: any = null;
  displayingEnNews: any = null;
  displayingRuNews: any = null;
  news: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private announcementsService: AnnouncementsService,
    private languageService: LanguageServiceService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('newsId')!;
    this.announcementsService.getAnnouncementById(id).subscribe({
      next: (news) => {
        this.processNewsData(news);

        const language = sessionStorage.getItem('lang') || 'en';
        this.updateDisplayingNewsBasedOnLanguage(language);

        this.languageService.selectedLanguage$.subscribe((langCode: string) => {
          this.updateDisplayingNewsBasedOnLanguage(langCode);
        });
      },
      error: (err) => console.error('Error fetching news:', err)
    });
  }

  processNewsData(data: any): void {
    const newsItem = data; // Assuming `data` contains the news item directly

    this.displayingTjNews = {
      id: newsItem.id,
      author_id: newsItem.author_id,
      post_date: newsItem.post_date,
      title: newsItem.title_tj,
      description: this.formatDescription(newsItem.description_tj),
      image: newsItem.image
    };

    this.displayingEnNews = {
      id: newsItem.id,
      author_id: newsItem.author_id,
      post_date: newsItem.post_date,
      title: newsItem.title_en,
      description: this.formatDescription(newsItem.description_en),
      image: newsItem.image
    };

    this.displayingRuNews = {
      id: newsItem.id,
      author_id: newsItem.author_id,
      post_date: newsItem.post_date,
      title: newsItem.title_ru,
      description: this.formatDescription(newsItem.description_ru),
      image: newsItem.image
    };
  }

  updateDisplayingNewsBasedOnLanguage(langCode: string): void {
    this.news = [];

    if (langCode === 'tj' && this.displayingTjNews !== null) {
      this.news.push(this.displayingTjNews);
    } else if (langCode === 'ru' && this.displayingRuNews !== null) {
      this.news.push(this.displayingRuNews);
    } else {
      this.news.push(this.displayingEnNews);
    }
    console.log(this.news);
  }

  formatDescription(description: string): string {
    const tabSpaces = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    const tabTwoSpaces = '&nbsp;&nbsp;&nbsp;&nbsp;';
    return tabSpaces + description.replace(/•\t/g, `${tabTwoSpaces}<br>${tabTwoSpaces}•`);
  }
}
