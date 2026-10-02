# Arka Mali landing page

Open `index.html` in a browser or serve this directory as a static site. The page is RTL and responsive.

## Lead form integration

The form in `index.html` uses these stable field names: `full_name`, `company_name`, `email_address`, `phone_number`, `annual_revenue`, `biggest_financial_challenge`, and `source`. Required fields have native validation. The Make webhook URL is configured in `script.js`. The page sends URL-encoded form data (a simple cross-origin request) and shows success only after an HTTP success response. Put a Webhooks > Webhook response module at the end of the Make scenario, after Google Sheets > Add a Row and two Gmail > Send an email modules. Set status 200, body `OK`, and custom response header `Access-Control-Allow-Origin: *` (or your exact GitHub Pages origin). Test from the published site before going live; without that response header, the browser may send the request but cannot confirm success. Because GitHub Pages is static, the webhook endpoint is visible in the browser; protect the Make scenario against spam and avoid treating the URL as a secret.

Retain the `assessment` section ID so all CTA links reach the form. Replace the footer email with the confirmed business address before publishing.

`annual_revenue` is a required approximate annual revenue amount in toman, submitted as entered (digits and optional grouping separators). Both header and hero CTA links target `#assessment`.

Make sequence: Custom webhook → Google Sheets Add a Row → Gmail Send an email to `email_address` → Gmail Send an email to `arkamali2040@gmail.com` → Webhook response. Map email and all form fields from the webhook payload. Avoid treating a partial failure as a successful submission; check scenario execution and sheet rows before retrying.
