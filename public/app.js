let menuData = {};
let cart = [];

async function fetchMenu() {
  try {
    const res = await fetch('/api/menu');
    menuData = await res.json();
    renderCategoryFilters();
    renderMenu(Object.values(menuData).flat());
  } catch (err) {
    console.error(err);
  }
}

function renderCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  let html = `<button class="active" onclick="filterByCategory('all')">All</button>`;
  Object.keys(menuData).forEach(cat => {
    html += `<button onclick="filterByCategory('${cat}')">${cat}</button>`;
  });
  container.innerHTML = html;
}

function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <img src="${item.image}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <div class="price">R ${item.price.toFixed(2)}</div>
        <div class="calories">${item.calories} Cal</div>
        <p>${item.description}</p>
        <button onclick="addToCart(${item.id})" class="add-to-cart">Add to Order</button>
      </div>
    </div>
  `).join('');
}

function addToCart(id) {
  let item = null;
  Object.values(menuData).forEach(cat => {
    const found = cat.find(i => i.id === id);
    if (found) item = found;
  });
  if (!item) return;

  const existing = cart.find(i => i.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...item, quantity: 1 });

  updateCart();
}

function updateCart() {
  // Cart logic (can be expanded)
  console.log('Cart updated:', cart);
}

function filterByCategory(cat) {
  document.querySelectorAll('.category-filters button').forEach(b => b.classList.remove('active'));
  if (cat === 'all') document.querySelector('button').classList.add('active');
  else Array.from(document.querySelectorAll('button')).find(b => b.textContent === cat).classList.add('active');

  if (cat === 'all') renderMenu(Object.values(menuData).flat());
  else renderMenu(menuData[cat] || []);
}

function filterMenu() {
  const term = document.getElementById('searchInput').value.toLowerCase();
  const all = Object.values(menuData).flat();
  const filtered = term ? all.filter(i => i.name.toLowerCase().includes(term) || i.description.toLowerCase().includes(term)) : all;
  renderMenu(filtered);
}

function showSection(section) {
  console.log('Showing section:', section);
}

document.addEventListener('DOMContentLoaded', fetchMenu);
