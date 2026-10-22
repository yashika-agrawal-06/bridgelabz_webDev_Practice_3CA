const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

function calculateCartTotal(...prices) {
    let total = 0;

    for (const price of prices) {
        total += price;
    }

    return total;
}

function calculateItemTotal(item) {
    return item.price * item.quantity;
}

function calculateCartBill(cart) {
    const itemTotals = cart.items.map(calculateItemTotal);
    const subtotal = calculateCartTotal(...itemTotals);
    const discount = subtotal > 2000 ? subtotal * 0.1 : 0;

    return {
        subtotal,
        discount,
        finalAmount: subtotal - discount
    };
}

function displayCheckoutSummary(cart) {
    const bill = calculateCartBill(cart);

    console.log(`Customer: ${cart.customerName}`);
    console.log("");

    for (const item of cart.items) {
        const itemName = item.name.padEnd(11);
        const quantity = `x ${item.quantity}`.padEnd(7);
        console.log(`${itemName}${quantity}₹${calculateItemTotal(item)}`);
    }

    console.log("");
    console.log(`Subtotal:           ₹${bill.subtotal}`);
    console.log(`Discount:           ₹${bill.discount}`);
    console.log(`Final Amount:       ₹${bill.finalAmount}`);
}

const emptyCart = {
    customerName: "Asha",
    items: []
};

const singleItemCart = {
    customerName: "Neha",
    items: [
        { name: "Notebook", price: 80, quantity: 1 }
    ]
};

const highValueCart = {
    customerName: "Arjun",
    items: [
        { name: "Laptop", price: 45000, quantity: 1 },
        { name: "Mouse", price: 800, quantity: 2 }
    ]
};

console.log("Multiple-item cart:");
displayCheckoutSummary(shoppingCart);

console.log("\nEmpty cart:");
displayCheckoutSummary(emptyCart);

console.log("\nSingle-item cart:");
displayCheckoutSummary(singleItemCart);

console.log("\nMultiple items with discount:");
displayCheckoutSummary(highValueCart);
