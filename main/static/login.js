document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + name).classList.add('active');
    });
  });

  document.querySelectorAll('[data-switch-tab]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const name = link.dataset.switchTab;
      document.querySelector(`.tab-btn[data-tab="${name}"]`)?.click();
    });
  });

  document.querySelectorAll('.show-pass').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.password-wrap').querySelector('input');
      if (input.type === 'password') {
        input.type = 'text';
        btn.textContent = 'hide';
      } else {
        input.type = 'password';
        btn.textContent = 'show';
      }
    });
  });
});
