# Arka Mali landing page

Open `index.html` in a browser or serve this directory as a static site. The page is RTL and responsive.

## Lead form integration

The form in `index.html` uses these stable field names: `full_name`, `company_name`, `phone_number`, `biggest_financial_challenge`, and `source`. Required fields have native validation. To connect directly to Make, set `LEAD_WEBHOOK_URL` in `script.js` to a configured webhook URL. The page sends JSON and shows success only after an HTTP success response. Configure the webhook to accept requests from your domain and test cross-origin access before publishing. Keep sensitive webhook URLs server-side if the receiving service cannot safely expose them in a public page; use a server-side proxy instead.

For WordPress, replace the contents of `#lead-form` with the WPForms embed, create matching fields, and configure its webhook/Make integration in WordPress. Retain the `assessment` section ID so all CTA links reach the form. Replace the footer email with the confirmed business address before publishing.
