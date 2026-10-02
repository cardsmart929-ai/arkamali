// Make scenario: webhook → Google Sheets → applicant email → owner email → webhook response.
const LEAD_WEBHOOK_URL = 'https://hook.us2.make.com/lq4dhcbquqv2kelwcrb8ow5v2k1dtdli';

const form = document.getElementById('lead-form');
const status = document.getElementById('form-status');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  if (!LEAD_WEBHOOK_URL) {
    status.textContent = 'درگاه ثبت درخواست هنوز فعال نشده است. لطفاً از طریق ایمیل پایین صفحه با ما در ارتباط باشید.';
    status.className = 'form-status error';
    return;
  }

  submitButton.disabled = true;
  status.textContent = 'در حال ثبت درخواست شما...';
  status.className = 'form-status';
  try {
    const payload = new URLSearchParams(new FormData(form));
    payload.set('submitted_at', new Date().toISOString());
    const response = await fetch(LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: payload.toString()
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    status.textContent = 'درخواست شما ثبت شد. برای هماهنگی جلسه با شما تماس می‌گیریم.';
    status.className = 'form-status success';
    form.reset();
  } catch (error) {
    status.textContent = 'ثبت درخواست انجام نشد. لطفاً دوباره تلاش کنید یا به ایمیل پایین صفحه پیام دهید.';
    status.className = 'form-status error';
  } finally {
    submitButton.disabled = false;
  }
});

document.getElementById('year').textContent = new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(new Date().getFullYear());
