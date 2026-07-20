const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Professional South African Fast Food Menu (ZAR)
const menuData = {
  "Burgers & Meals": [
    { id: 1, name: "Classic Boerie Burger", price: 54.90, calories: 720, description: "Premium boerewors patty, caramelised onions, tomato relish & secret sauce.", image: "https://picsum.photos/id/1080/400/250" },
    { id: 2, name: "Flame-Grilled Cheeseburger", price: 48.90, calories: 550, description: "100% beef patty, melted cheese, fresh lettuce, tomato & special sauce.", image: "https://picsum.photos/id/292/400/250" },
    { id: 3, name: "Double Boerie Deluxe", price: 79.90, calories: 980, description: "Double boerewors patties, cheese, onions and peri-peri sauce.", image: "https://picsum.photos/id/431/400/250" }
  ],
  "Flame-Grilled Chicken": [
    { id: 4, name: "Peri-Peri Chicken Burger", price: 59.90, calories: 510, description: "Flame-grilled chicken breast with fiery peri-peri sauce.", image: "https://picsum.photos/id/106/400/250" },
    { id: 5, name: "Grilled Chicken Strips (8pc)", price: 52.90, calories: 420, description: "Tender flame-grilled chicken strips with lemon herb seasoning.", image: "https://picsum.photos/id/201/400/250" }
  ],
  "Sides & Extras": [
    { id: 6, name: "Chakalaka Fries (Large)", price: 34.90, calories: 480, description: "Crispy fries topped with spicy chakalaka relish.", image: "https://picsum.photos/id/1080/400/250" },
    { id: 7, name: "Pap & Chakalaka", price: 26.90, calories: 310, description: "Traditional maize meal served with spicy chakalaka.", image: "https://picsum.photos/id/1081/400/250" }
  ],
  "Desserts & Drinks": [
    { id: 8, name: "Oreo Milkshake", price: 42.90, calories: 550, description: "Thick & creamy Oreo milkshake.", image: "https://picsum.photos/id/870/400/250" },
    { id: 9, name: "Malva Pudding", price: 36.90, calories: 410, description: "Warm malva pudding with Amarula-infused custard.", image: "https://picsum.photos/id/1081/400/250" }
  ],
  "Coffee & McCafé": [
    { id: 10, name: "Mzansi Flat White", price: 29.90, calories: 110, description: "Double espresso with perfectly steamed milk.", image: "https://picsum.photos/id/1083/400/250" },
    { id: 11, name: "Iced Rooibos Latte", price: 34.90, calories: 160, description: "Refreshing rooibos tea latte over ice.", image: "https://picsum.photos/id/1060/400/250" }
  ]
};

app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Mzansi Fast Foods running on http://localhost:${PORT}`);
});
