(function () {
  var css = '' +
    '#bkp{position:fixed;inset:0;background:rgba(42,26,36,.55);display:grid;place-items:center;z-index:100;padding:20px}' +
    '#bkp[hidden]{display:none}' +
    '.bkp-box{position:relative;background:#fff;border-radius:16px;width:100%;max-width:440px;max-height:92vh;overflow-y:auto;padding:28px 26px;box-shadow:0 20px 60px rgba(0,0,0,.25)}' +
    '.bkp-x{position:absolute;top:10px;right:14px;background:none;border:0;font-size:28px;line-height:1;cursor:pointer;color:var(--muted,#6a5a64)}' +
    '.bkp-h small{color:var(--green,#4d8a12);font-weight:600;font-size:12px}' +
    '.bkp-h h3{margin:2px 0 6px;font-size:22px}' +
    '.bkp-h p{color:var(--muted,#6a5a64);font-size:13px;margin:0 0 16px}' +
    '#bkp-f label{display:block;font-size:12px;font-weight:600;color:var(--plum,#6b1a4f);margin-bottom:12px}' +
    '#bkp-f input,#bkp-f select,#bkp-f textarea{margin-top:5px;font-size:13px;padding:10px 12px;background:#fdfaf7}' +
    '#bkp-f .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
    '#bkp-f .btn{width:100%;background:var(--green,#4d8a12);border-color:var(--green,#4d8a12);margin-top:4px}' +
    '#bkp-f .btn:hover{background:var(--green-d,#3b6c0d);border-color:var(--green-d,#3b6c0d)}' +
    '@media(max-width:520px){#bkp-f .row{grid-template-columns:1fr}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var wrap = document.createElement('div');
  wrap.id = 'bkp';
  wrap.hidden = true;
  wrap.innerHTML =
    '<div class="bkp-box" role="dialog" aria-modal="true" aria-labelledby="bkp-t">' +
      '<button class="bkp-x" type="button" aria-label="Close">&times;</button>' +
      '<div class="bkp-h"><small>Book appointment</small><h3 id="bkp-t">Book your visit</h3>' +
      '<p>Fill in your details and we will open WhatsApp with your request.</p></div>' +
      '<form id="bkp-f">' +
        '<label>Full name <i style="color:var(--teal,#d82b7e);font-style:normal">*</i><input type="text" name="name" placeholder="Enter your full name" required></label>' +
        '<label>Phone number <i style="color:var(--teal,#d82b7e);font-style:normal">*</i><input type="tel" name="phone" placeholder="Enter your phone number" required></label>' +
        '<label>Email address (optional)<input type="email" name="email" placeholder="Enter your email address"></label>' +
        '<label>Select query type<select name="service" required><option value="">Choose an option</option>' +
          '<option>Acne treatment</option><option>Dark spots &amp; pigmentation</option><option>Hair fall treatment</option>' +
          '<option>Dandruff &amp; scalp care</option><option>Psoriasis</option><option>Fungal infection</option>' +
          '<option>Allergy &amp; dry skin</option><option>Other</option></select></label>' +
        '<div class="row">' +
          '<label>Date<input type="date" name="date"></label>' +
          '<label>Time<input type="time" name="time"></label>' +
        '</div>' +
        '<label>Your message<textarea name="msg" rows="3" placeholder="Type your message here..."></textarea></label>' +
        '<button class="btn" type="submit">Send on WhatsApp &rarr;</button>' +
        '<p class="bkn" style="font-size:12px;color:var(--muted,#6a5a64);text-align:center;margin:10px 0 0">This will open WhatsApp with your message.</p>' +
      '</form>' +
    '</div>';
  document.body.appendChild(wrap);

  var form = wrap.querySelector('#bkp-f');

  function open() {
    wrap.hidden = false;
    document.body.style.overflow = 'hidden';
    form.elements.name.focus();
  }
  function close() {
    wrap.hidden = true;
    document.body.style.overflow = '';
  }

  // Open the popup when any "Book Appointment" link or #book link is clicked
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var text = a.textContent.trim().toLowerCase();
    if (href.indexOf('#book') !== -1 || text === 'book appointment') {
      e.preventDefault();
      open();
    }
  });

  wrap.addEventListener('click', function (e) {
    if (e.target === wrap || e.target.classList.contains('bkp-x')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !wrap.hidden) close();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (n) { return form.elements[n] ? form.elements[n].value.trim() : ''; };
    var t = 'Appointment request%0AName: ' + encodeURIComponent(v('name')) +
      '%0APhone: ' + encodeURIComponent(v('phone')) +
      (v('email') ? '%0AEmail: ' + encodeURIComponent(v('email')) : '') +
      '%0AService: ' + encodeURIComponent(v('service')) +
      (v('date') ? '%0ADate: ' + encodeURIComponent(v('date')) : '') +
      (v('time') ? '%0ATime: ' + encodeURIComponent(v('time')) : '') +
      (v('msg') ? '%0AMessage: ' + encodeURIComponent(v('msg')) : '');
    window.open('https://wa.me/919096827135?text=' + t, '_blank', 'noopener');
    form.reset();
    close();
  });
})();
