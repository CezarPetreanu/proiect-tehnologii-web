export class ScrapedItem {
  id!: number;
  firstName!: string;
  lastName!: string;
  occupation!: string;
  nOfLists!: number;
  nOfScrapings!: number;
  nOfScrapedArticles!: number;
  password!: string;
  image!: URL;

  constructor(item?: Partial<ScrapedItem>) {
    Object.assign(this, item);
  }
}
