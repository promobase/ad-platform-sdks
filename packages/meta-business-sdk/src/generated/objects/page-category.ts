import type { PageCategory } from "../enums.ts";

export interface PageCategoryFields {
  api_enum: string;
  fb_page_categories: PageCategory[];
  id: string;
  name: string;
}

