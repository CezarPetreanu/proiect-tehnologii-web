export class ScrapedItem {
  id!: number;
  title!: string;
  details!: string;
  link!: string;

  constructor(item?: Partial<ScrapedItem>) {
    Object.assign(this, item);
  }
}
