let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeItem(item) {
  const remove = shoppingList.indexOf(item);
  if (remove !== -1) {
    shoppingList.splice(remove, 1);
  }
}

addItem("Books");
addItem("Accessories");
addItem("Snacks");
addItem("Clothes");
addItem("Painting materials");
addItem("Stationeries");

function displayShoppingList() {
  console.log("My Shopping List:");
 for (let i = 0; i < shoppingList.length; i++) {
      console.log((i + 1) + ". " + shoppingList[i]);
    }
  }
  
removeItem("Accessories");
removeItem("Stationeries");

displayShoppingList();