// ── LOGIN ─────────────────────────────────────────────────────────────────────

function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + name).classList.add('active');
}

function switchTabByName(name) {
  const idx = name === 'login' ? 0 : 1;
  switchTab(name, document.querySelectorAll('.tab-btn')[idx]);
}

function togglePass(id, btn) {
  const input = document.getElementById(id);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = 'hide';
  } else {
    input.type = 'password';
    btn.textContent = 'show';
  }
}

// ── PROFILE ───────────────────────────────────────────────────────────────────

function switchProfileTab(name, btn) {
  document.querySelectorAll('.pnav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

// ── PAGE-SPECIFIC ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {

  // Upload recipe: dynamic ingredient / step rows
  document.querySelectorAll('.add-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const listInput = this.previousElementSibling;
      const last = listInput.lastElementChild;
      const clone = last.cloneNode(true);
      clone.value = '';
      listInput.appendChild(clone);
      clone.focus();
    });
  });

  // Explore: filter pills
  document.querySelectorAll('.filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Explore: search bar (.search-bar input)
  const exploreSearch = document.querySelector('.search-bar input');
  if (exploreSearch) {
    exploreSearch.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll('.recipe-card').forEach(function (card) {
        card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none';
      });
    });
  }

  // Dashboard: search bar (.search-wrap input)
  const dashSearch = document.querySelector('.search-wrap input');
  if (dashSearch) {
    dashSearch.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll('.recipe-card').forEach(function (card) {
        card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none';
      });
    });
  }

  // Meal planner: shuffle buttons
  const btnSolid = document.querySelector('.btn-solid');
  const btnSoft = document.querySelector('.btn-soft');
  if (btnSolid && btnSoft) {
    const recipePool = [
      'Avocado Toast', 'Scrambled Eggs', 'Banana Pancakes', 'Overnight Oats',
      'Caesar Salad', 'Chicken Wrap', 'Tomato Soup', 'Club Sandwich',
      'Pasta Bolognese', 'Grilled Salmon', 'Stir Fry Noodles', 'Chicken Curry',
      'Veggie Tacos', 'Beef Stew', 'Mushroom Risotto', 'Fried Rice', 'Lentil Soup'
    ];

    function randomRecipe() {
      return recipePool[Math.floor(Math.random() * recipePool.length)];
    }

    function fillCell(cell) {
      cell.innerHTML = '<p class="meal-name">' + randomRecipe() + '</p>';
    }

    btnSolid.addEventListener('click', function () {
      document.querySelectorAll('.meal-card').forEach(fillCell);
    });

    btnSoft.addEventListener('click', function () {
      const rows = document.querySelectorAll('tbody tr');
      const numDays = rows[0].querySelectorAll('.meal-card').length;
      const dayIndex = Math.floor(Math.random() * numDays);
      rows.forEach(function (row) {
        fillCell(row.querySelectorAll('.meal-card')[dayIndex]);
      });
    });
  }

});
