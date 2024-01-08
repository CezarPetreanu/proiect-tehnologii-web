export class ScrapedItem {
  id!: number;
  title!: string;
  authors!: string[];
  year!: number;
  link!: string;

  constructor(item?: Partial<ScrapedItem>) {
    Object.assign(this, item);
  }
}
