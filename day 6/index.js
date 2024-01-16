const shoppingList = [];
let running = true;

while (running) {
    if (shoppingList.length === 0) {
        let option = prompt("What do you want to [1] add an item from your shopping list? Type [quit] to exit.");
        option = (String(option)).toLowerCase();
        if (option === "quit") {
            running = false;
        } else {
            let newItem = prompt("What item would you like to add?");
            shoppingList.push(newItem);
        }
    } else {
        let option = prompt("What do you want to [1] add or [2] remove an item from your shopping list? Type [quit] to exit and [3] to show the current list.");
        option = (String(option)).toLowerCase();
        if (option === "quit") {
            running = false;
        } else if (option === "1") {
            let newItem = prompt("What item would you like to add?");
            shoppingList.push(newItem);
        } else if (option === "2") {
            let removeItem = prompt("What item would you like to remove?");
            if (shoppingList.indexOf(removeItem) === -1) {
                alert("That item is not on your shopping list.");
            } else {
                shoppingList.splice(shoppingList.indexOf(removeItem), 1);
            }
        } else if (option === "3") {
            alert(`Your current shopping list is: ${shoppingList.join(", ")}.`);
        }
    }
}