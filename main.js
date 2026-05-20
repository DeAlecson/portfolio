// ---- Theme toggle ----
(function () {
  var btn = document.getElementById('theme-btn');
  var label = document.getElementById('theme-label');

  function sync() {
    var t = document.documentElement.getAttribute('data-theme') || 'light';
    if (label) label.textContent = t === 'dark' ? 'Dark' : 'Light';
  }

  sync();

  if (btn) {
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') || 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('aq-theme', next); } catch (e) {}
      sync();
    });
  }
})();

// ---- Scroll reveal ----
(function () {
  if (typeof IntersectionObserver === 'undefined') return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .kpi-grid').forEach(function (el) {
    io.observe(el);
  });
})();
