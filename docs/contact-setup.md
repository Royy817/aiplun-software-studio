# Consultation form activation

The site posts to `/api/contact`. The handler uses the Resend REST API server-side.
The recipient is fixed to the existing business mailbox, `royryu221317@gmail.com`.
The visitor's email is used only as Reply-To. No automatic visitor email is sent.

Set these Vercel project environment variables for Production:

- `RESEND_API_KEY`: a Resend sending API key. Keep this server-side; never use a `NEXT_PUBLIC_` prefix or commit it.
- `CONTACT_FROM_EMAIL`: an address authorized to send through that Resend account, for example `Aiplun Studio <contact@your-verified-domain>`.

Verify the sender domain with Resend before using it. Redeploy after configuring
the variables. `GET /api/contact` returns only `{ "ready": true }` when both
variables exist; this indicates configuration presence, not successful delivery.

Before considering the form active, send one owner-authorized test inquiry from
the public website, check the receiving inbox, and confirm Reply-To works.
Provider acceptance is required before showing success. Missing settings,
validation errors, provider rejection, and network errors never show success.
The visitor's input stays on the page after failure. During missing configuration,
submission is disabled and a direct email contact remains visible.

Protections: fixed recipient, origin check, JSON/body-size validation, consent,
honeypot, best-effort per-instance throttling (5 attempts / 10 minutes), and
Resend idempotency using a request UUID plus normalized-content hash. Throttling
does not provide a global limit across serverless instances. No raw IPs, API keys,
or form bodies are logged by this handler. See Vercel Firewall for stronger
deployment-wide protection if actual spam warrants it.

Focused checks (mocked provider; no email sent):

```sh
node --test tests/contact.test.mjs
```
