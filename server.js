const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// South African Fast Food Menu (ZAR)
const menuData = {
  "Burgers & Meals": [
    { id: 1, name: "Classic Boerie Burger", price: 49.90, calories: 680, description: "Boerewors patty, caramelised onions, tomato chutney on a toasted bun.", image: "https://picsum.photos/id/1080/400/250" },
    { id: 2, name: "Flame-Grilled Cheeseburger", price: 42.90, calories: 520, description: "100% beef patty, cheese, pickles, special sauce.", image: "https://picsum.photos/id/292/400/250" },
    { id: 3, name: "Double Boerie Burger", price: 69.90, calories: 920, description: "Double boerewors patties with cheese and onions.", image: "https://picsum.photos/id/431/400/250" }
  ],
  "Flame-Grilled Chicken": [
    { id: 4, name: "Peri-Peri Chicken Burger", price: 54.90, calories: 480, description: "Flame-grilled chicken breast with peri-peri sauce.", image: "https://picsum.photos/id/106/400/250" },
    { id: 5, name: "Grilled Chicken Strips (6pc)", price: 48.90, calories: 350, description: "Tender flame-grilled chicken strips.", image: "https://picsum.photos/id/201/400/250" }
  ],
  "Sides & Extras": [
    { id: 6, name: "Chakalaka Fries (Medium)", price: 29.90, calories: 410, description: "Crispy fries topped with spicy chakalaka.", image: "https://picsum.photos/id/1080/400/250" },
    { id: 7, name: "Pap & Relish", price: 22.90, calories: 280, description: "Traditional maize meal with tomato & onion relish.", image: "https://picsum.photos/id/1081/400/250" }
  ],
  "Desserts & Drinks": [
    { id: 8, name: "Oreo Milkshake", price: 39.90, calories: 520, description: "Creamy Oreo milkshake.", image: "https://picsum.photos/id/870/400/250" },
    { id: 9, name: "Malva Pudding", price: 32.90, calories: 380, description: "Warm South African malva pudding with custard.", image: "https://picsum.photos/id/1081/400/250" }
  ],
  "Coffee & McCafé": [
    { id: 10, name: "Mzansi Flat White", price: 28.90, calories: 120, description: "Rich espresso with steamed milk.", image: "https://picsum.photos/id/1083/400/250" },
    { id: 11, name: "Iced Rooibos Latte", price: 34.90, calories: 150, description: "Refreshing rooibos iced latte.", image: "https://picsum.photos/id/1060/400/250" }
  ]
};

app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Mzansi Fast Foods server running on port ${PORT}`);
});
