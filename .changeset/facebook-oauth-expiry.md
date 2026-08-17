---
"@openpromo/meta": patch
---

Accept Facebook long-lived OAuth responses that omit `expires_in` and apply the existing 60-day fallback. Expose the Page discovery fields needed by account setup through the OAuth adapter, normalize numeric Instagram and Threads user IDs, apply the Instagram token-expiry fallback, and add a typed current Page Post Insights facade.
