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
      authors: ['DK Mahto', 'L Singh'],
      year: 2016,
      link: 'https://ieeexplore.ieee.org/abstract/document/7724353',
    },
    {
      id: 1,
      title: 'A comparative study on web scraping',
      authors: ['DS Sisuriya'],
      year: 2016,
      link: 'http://ir.kdu.ac.lk/handle/345/1051',
    },
    {
      id: 2,
      title: 'A review on web scrapping and its applications',
      authors: ['V Singrodia', 'A Mitra', 'S Paul'],
      year: 2019,
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
