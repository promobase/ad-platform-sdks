---
"@openpromo/meta": patch
---

Accept Facebook long-lived OAuth responses that omit `expires_in` and apply the existing 60-day fallback. Expose the Page discovery fields needed by account setup through the OAuth adapter.
