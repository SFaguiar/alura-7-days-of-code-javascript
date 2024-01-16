const shoppingList = {
    "Fruit": [],
    "Dairy": [],
    "Drink": [],
    "Fast Food": [],
    "Sweets": [],
    "Meat": [],
    "Vegetables": [],
    "Bakery": []
};

class shoppingItem {
    constructor(name, type, price) {
        this.name = String(name);
        this.type = String(type);
        this.price = Number(price);

    } 
}

const Banana = new shoppingItem("Banana", "Fruit", 1.5);
const Apple = new shoppingItem("Apple", "Fruit", 1.5);
const Grape = new shoppingItem("Grape", "Fruit", 1.5);
const Strawberry = new shoppingItem("Strawberry", "Fruit", 1.5);
const Cherry = new shoppingItem("Cherry", "Fruit", 1.5);
const Peach = new shoppingItem("Peach", "Fruit", 1.5);
const Pear = new shoppingItem("Pear", "Fruit", 1.5);
const Mango = new shoppingItem("Mango", "Fruit", 1.5);
const Lemon = new shoppingItem("Lemon", "Fruit", 1.5);
const Kiwi = new shoppingItem("Kiwi", "Fruit", 1.5);
const Avocado = new shoppingItem("Avocado", "Fruit", 1.5);
const Orange = new shoppingItem("Orange", "Fruit", 1.5);
const Wine = new shoppingItem("Wine", "Drink", 5);
const Beer = new shoppingItem("Beer", "Drink", 2);
const Water = new shoppingItem("Water", "Drink", 1);
const Coffee = new shoppingItem("Coffee", "Drink", 2);
const Chocolate = new shoppingItem("Chocolate", "Sweets", 3);
const Milk = new shoppingItem("Milk", "Dairy", 2);
const Cheese = new shoppingItem("Cheese", "Dairy", 3);
const Butter = new shoppingItem("Butter", "Dairy", 2);
const Pizza = new shoppingItem("Pizza", "Fast Food", 10);
const Burger = new shoppingItem("Burger", "Fast Food", 5);
const Sandwich = new shoppingItem("Sandwich", "Fast Food", 3);
const Bread = new shoppingItem("Bread", "Bakery", 1);
const Cake = new shoppingItem("Cake", "Bakery", 5);
const Cookies = new shoppingItem("Cookies", "Bakery", 2);
const Cucumber = new shoppingItem("Cucumber", "Vegetables", 2);
const Carrot = new shoppingItem("Carrot", "Vegetables", 1);
const Potato = new shoppingItem("Potato", "Vegetables", 1);
const Onion = new shoppingItem("Onion", "Vegetables", 1);
const Tomato = new shoppingItem("Tomato", "Vegetables", 1);
const Pepper = new shoppingItem("Pepper", "Vegetables", 1);
const Cabbage = new shoppingItem("Cabbage", "Vegetables", 2);
const Beans = new shoppingItem("Beans", "Vegetables", 5);
const Chicken = new shoppingItem("Chicken", "Meat", 10);
const Fish = new shoppingItem("Fish", "Meat", 5);
const Lamb = new shoppingItem("Lamb", "Meat", 15);
const Beef = new shoppingItem("Beef", "Meat", 10);
const Pork = new shoppingItem("Pork", "Meat", 5);

const allGroceryItems = [Apple, Avocado, Banana, Beer, Beef, Bread, Burger, Butter, Cabbage, Cake, Carrot, Cheese, Chicken, Cherry, Chocolate, Coffee, Cookies, Cucumber, Fish, Grape, Kiwi, Lamb, Lemon, Mango, Milk, Orange, Peach, Pear, Pepper, Pork, Potato, Pizza, Sandwich, Strawberry, Tomato, Water, Wine, Beans, Onion];
let types = Object.keys(shoppingList);
let totalPrice = 0;
let strList = `Shopping list: \n`;

alert(`Time to the grocery store! Let's make a shopping list, shall we? I'll show you ${allGroceryItems.length} items and you will answer if you want to add it to your shopping list or not.`)

allGroceryItems.forEach(item => {
    let answer = prompt(`Do you want to add ${item.name} to your shopping list? Type "yes" if you do.`);
    if (answer.toLocaleUpperCase() == "YES") {
        shoppingList[item.type].push(item);
    }  
})

for (i in shoppingList) {
    strList += `${i}: `;
    for (j in shoppingList[i]) {
        if (j == shoppingList[i].length - 1) {
            strList += `${shoppingList[i][j]["name"]}`;
        } else {
            strList += `${shoppingList[i][j]["name"]}, `;
        }
        totalPrice += shoppingList[i][j]["price"];
    }
    strList += `\n`;
}
strList += `Total price: ${totalPrice}`;

alert(`Your shopping list is ${strList}.`);