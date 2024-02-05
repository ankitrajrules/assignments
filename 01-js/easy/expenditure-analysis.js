/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    let categoryWiseAmount = {}; // Store total amount spent in each category

    for (const transaction of transactions) {
        if (!categoryWiseAmount[transaction.category]) {
            categoryWiseAmount[transaction.category] = 0; // Initialize to 0 if category doesn't exist
        }
        categoryWiseAmount[transaction.category] += transaction.price;
    }

    const categories = Object.keys(categoryWiseAmount);

    return categories.reduce((arr, cat) => {
        arr.push({ category: cat, totalSpent: categoryWiseAmount[cat] });
        return arr;
    }, []);
}

module.exports = calculateTotalSpentByCategory;
