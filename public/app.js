let menuData = {};
let cart = [];

async function fetchMenu() {
  const res = await fetch('/api/menu');
  menuData = await res.json();
  renderFilters();
  renderMenu(Object.values(menuData).flat());
}

function renderFilters() {
  // Category filter logic
}

function addToCart(id) {
  // Cart logic (ZAR)
}

function showModal(type) {
  alert(type + " content");
}

document.addEventListener('DOMContentLoaded', fetchMenu);
