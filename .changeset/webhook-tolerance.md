---
"@openpromo/meta": patch
"@openpromo/tiktok": patch
---

Make webhook payload schemas tolerant of provider-added fields and event
kinds. Meta change arrays previously rejected any delivery carrying an
unmodeled `field` (e.g. `likes`, `leadgen`, `story_insights`), and Threads
rejected unknown `values.field` values; TikTok rejected unknown event kinds.
Known fields/events keep their rich parse (catch-alls sit last in the
unions); unknown ones now deliver instead of dropping the whole payload.
Adds production-tolerance tests covering unknown-field deliveries and
signature rejection.
