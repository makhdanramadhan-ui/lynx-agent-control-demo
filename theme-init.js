(function () {
  var theme = 'light';
  try {
    var saved = localStorage.getItem('lynx-theme-v2');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f1efec' : '#0f0f12');
})();
