

function storageUnification(productsInStorage, orderedProducts) {
    let storage = {};

    // Първо пълним наличното в склада
    for (let i = 0; i < productsInStorage.length; i += 2) {
        storage[productsInStorage[i]] = Number(productsInStorage[i + 1]);
    }

    // Добавяме поръчаните продукти
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);

        // ПРОВЕРКА: Дали ключът съществува в обекта
        if (storage.hasOwnProperty(productName)) {
            storage[productName] += quantity; 
        } else {
            storage[productName] = quantity; 
        }
    }

    // При обекти използваме for...in за обхождане на ключовете !!! (да си го запомня!!!)
    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}

storageUnification(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2'],
                   ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30'])