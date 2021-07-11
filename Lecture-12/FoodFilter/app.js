const menu = [
  "Palak Paneer",
  "Chicken Biryani",
  "Kadhai Chicken",
  "Chhole Bhature",
  "Kaju Masala",
  "Paneer Roll",
  "Egg Curry",
  "Garlic Bread",
  "Chicken peri peri",
  "Butter Chicken",
  "Garlic Naan",
  "Onion Rings",
  "Onion Pizza",
  "Garlic Naan",
  "Chaap",
  "Onion Pakore",
  "Egg Bhurji",
  "Garlic Mushroom",
  "Egg Roll",
];

function isVeg(food) {
  if (
    food.toLowerCase().indexOf("chicken") !== -1 ||
    food.toLowerCase().indexOf("egg") !== -1
  ) {
    return false;
  }

  return true;
}

function isOnionGarlicFree(food) {
  if (
    food.toLowerCase().indexOf("onion") !== -1 ||
    food.toLowerCase().indexOf("garlic") !== -1
  ) {
    return false;
  }
  return true;
}

let vegMenu = menu.filter(isVeg);

let jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);
