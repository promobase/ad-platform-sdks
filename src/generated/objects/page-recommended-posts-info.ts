import type { PagePostFields } from "./page-post.ts";
import type { PostFields } from "./post.ts";
import type { RecommendedPagePostFields } from "./recommended-page-post.ts";

export interface PageRecommendedPostsInfoFields {
  recommendation_source: string;
  recommended_posts: RecommendedPagePostFields[];
}

