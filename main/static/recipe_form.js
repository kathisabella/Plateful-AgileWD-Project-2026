document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.item-row').remove());
  });

  document.querySelectorAll('.add-btn[data-list]').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = document.getElementById(btn.dataset.list);
      const name = btn.dataset.name;
      const tag = btn.dataset.tag || 'input';

      const row = document.createElement('div');
      row.className = 'item-row';

      const field = document.createElement(tag);
      field.name = name;
      if (tag === 'textarea') {
        field.rows = 2;
      } else {
        field.type = 'text';
      }

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'remove-btn';
      removeBtn.textContent = '✕';
      removeBtn.addEventListener('click', () => row.remove());

      row.appendChild(field);
      row.appendChild(removeBtn);
      list.appendChild(row);
      field.focus();
    });
  });
});
