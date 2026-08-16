import { GoogleBusinessProfile } from "@openpromo/google-business-profile";
import { LinkedIn } from "@openpromo/linkedin";
/**
 * Quickstart — construct typed clients for every platform from the umbrella
 * package, then use the generated provider surface.
 *
 * Requires provider tokens in env, then:
 *   META_TOKEN=... TIKTOK_TOKEN=... bun examples/quickstart.ts
 */
import { Facebook, Instagram } from "@openpromo/meta";
import { TikTok } from "@openpromo/tiktok";
import { YouTube } from "@openpromo/youtube";

// --- Meta: one Graph client shared by Facebook / Instagram / Threads ---
const graph = Facebook.createGraphClient({ accessToken: process.env.META_TOKEN! });

const page = Facebook.createClient({
  pageId: "page_123",
  accessToken: process.env.META_TOKEN!,
});
await page.feed.publishPost({ message: "Hello from Mosaic!" }); // typed fields

const instagram = Instagram.createClient({
  api: graph,
  igAccountId: "ig_123",
  accessToken: process.env.META_TOKEN!,
});
// await instagram.media.publishVideo({ videoUrl: "https://cdn.example.com/reel.mp4", caption: "..." });

// --- TikTok Business ---
const tiktok = TikTok.createClient({
  accessToken: process.env.TIKTOK_TOKEN!,
  businessId: process.env.TIKTOK_BUSINESS_ID!,
});
// const { shareId } = await tiktok.videos.publish({ videoUrl: "https://cdn.example.com/v.mp4", caption: "..." });

// --- LinkedIn, YouTube, Google Business Profile ---
const linkedin = LinkedIn.createClient({ accessToken: process.env.LINKEDIN_TOKEN! });
const youtube = YouTube.createClient({ accessToken: process.env.YOUTUBE_TOKEN! });
const gbp = GoogleBusinessProfile.createClient({ accessToken: process.env.GBP_TOKEN! });

console.log("Clients ready:", {
  page: !!page,
  instagram: !!instagram,
  tiktok: !!tiktok,
  linkedin: !!linkedin,
  youtube: !!youtube,
  gbp: !!gbp,
});
