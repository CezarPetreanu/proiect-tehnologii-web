import { Injectable } from '@angular/core';
import { ScrapedItem } from '../../../../backend/scraped-item';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private scrapedData: Array<ScrapedItem> = [
    {
      id: 0,
      title: 'A dive into Web Scraper world',
      details:
        'DK Mahto, L Singh - 2016 3rd International Conference on ... - ieeeexplore.ieee.org',
      link: 'https://ieeexplore.ieee.org/abstract/document/7724353',
    },
    {
      id: 1,
      title: 'A comparative study on web scraping',
      details: 'DS Sisuriya - 2015 - rku.ac.lk',
      link: 'http://ir.kdu.ac.lk/handle/345/1051',
    },
    {
      id: 2,
      title: 'A review on web scrapping and its applications',
      details:
        'V Singrodia, A Mitra, S Paul - 2019 international conference on …, 2019 - ieeexplore.ieee.org',
      link: 'https://ieeexplore.ieee.org/abstract/document/8821809',
    },
  ];
  constructor() {}

  getData(): Array<ScrapedItem> {
    return this.scrapedData;
  }

  addItem(item: ScrapedItem): void {
    this.scrapedData.push(item);
  }

  getLastId(): number {
    return Math.max.apply(
      Math,
      this.scrapedData.map(function (o) {
        return o.id;
      })
    );
  }

  getItemById(id: number): ScrapedItem {
    return this.scrapedData.filter((x) => x.id == id)[0];
  }
}
