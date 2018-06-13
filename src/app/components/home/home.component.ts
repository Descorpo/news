import { Component, OnInit } from '@angular/core';
import { NewsApiService } from "../../services/news-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsList = [];
  checkoutSource: boolean = false;
  currentCategory = 'technology';
  currentCountry = 'ua';
  currentSource = '';
  categoryList = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ];
  countryList = [
    'ua',
    'us',
    'ng',
    'ch'
  ];
  sourceList = [];

  constructor(
    public news: NewsApiService,
  ) { }

  ngOnInit() {
    // Get news
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });
    // get all sources
    this.news.getSource(this.currentCountry, this.currentCategory).subscribe( source => {
      if(source['sources'].length) {
        this.sourceList = source['sources'];
        this.checkoutSource = false;
      } else {
        this.sourceList = [];
        this.checkoutSource = true;
      }
    });

  }

  onChange() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => {
      this.newsList = news['articles'];
    });

    this.news.getSource(this.currentCountry, this.currentCategory).subscribe( source => {
      if(source['sources'].length) {
        this.sourceList = source['sources'];
        this.checkoutSource = false;
      } else {
        this.sourceList = [];
        this.checkoutSource = true;
      }
    });
  }

  changeSource() {
    this.news.getNewsBySource(this.currentSource).subscribe( news => {
      this.newsList = news['articles'];
    });
  }

}
