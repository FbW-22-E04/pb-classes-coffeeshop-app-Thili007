const menuCard = [
  {
    item: "Espresso",
    type: "Drink",
    price: 2,
  },
  {
    item: "Latte",
    type: "Drink",
    price: 2.5,
  },
  {
    item: "Iced Coffee",
    type: "Drink",
    price: 3,
  },
  {
    item: "Bagels",
    type: "Food",
    price: 1.5,
  },
  {
    item: "Donuts",
    type: "Food",
    price: 1.5,
  },
  {
    item: "Croissant",
    type: "Food",
    price: 1.8,
  },
  {
    item: "Iced Tea",
    type: "Food",
    price: 4,
  },
];

// console.log(menuCard);

class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addItemsToMenu(...item) {
    this.menu.push(...item);
  }

  listItems() {
    for (let item of [this.menu.length]) {
      console.log("Our Menu: Total items of", item, this.menu);
    }
  }

  addOrder(...items) {
    if (this.menu.findIndex((element) => element.item === items)) {
      this.orders.push(items);
      console.log(
        `Your Order is/are added ${items}, Total is = ${this.dueAmount(
          ...items
        )}
         `
      );
    } else {
      console.log("This item is currently unavailable!");
    }
  }

  listOfOrders(...everyItems) {
    const elementPrice = this.menu.forEach((element) => {
      if (element.item == this.orders) {
        console.log(element.price);
      }
    });
    console.log(
      `Your ${this.orders} is Total ${this.dueAmount(...everyItems)} €`
    );
  }

  fulFillOrder() {
    const orderArr = this.orders;
    if (orderArr.length === 0) {
      console.log("All Orders are Finished...!!");
    } else {
      console.log(`The ${this.orders.shift()} is ready`);
    }
  }

  dueAmount(...orderItems) {
    let orderSum = 0;

    let orderArr = [...orderItems];
    if (orderArr.length > 0) {
      for (let product of menuCard) {
        for (let el of orderArr) {
          if (el == product.item) {
            orderSum += product.price;
          }
        }
      }
      return orderSum;
    }
  }

  cheapestItem() {
    return this.menu.sort((a, b) => a.price - b.price)[0].item;
  }

  drinksOnly() {
    return this.menu
      .filter((item) => item.type === "Drink")
      .map((item) => item.item);
  }

  foodOnly() {
    return this.menu
      .filter((item) => item.type === "Food")
      .map((item) => item.item);
  }
}

const shop = new CoffeeShop("StarBucks", menuCard);

// Adding Items to Menu
shop.addItemsToMenu({ item: "Black Tea", type: "Drink", price: 1.5 });
shop.addItemsToMenu({ item: "Black Coffee", type: "Drink", price: 1.8 });

// List Items
shop.listItems();

// Adding Order
shop.addOrder("Latte", "Black Tea", "Croissant");

// List Orders
shop.listOfOrders();

// check array
shop.fulFillOrder();

// Total
// shop.dueAmount();

// Chap Items
console.log(shop.cheapestItem());

// Drinks Only
console.log(shop.drinksOnly());

// Food Only
console.log(shop.foodOnly());

// Shop Items
console.log(shop);
