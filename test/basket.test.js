const basket = require('../app/basket');


let fantasticMrFox = {
    price: 7,
    title: "Fantastic Mr Fox",
    author: "Roald Dahl",
    isbn: "12345678"
};

test('From empty basket, add one book', () => {

    basket.emptyBasket();

    expect(basket.getBalance()).toBe(0);

    basket.addToBasket(fantasticMrFox);

    expect(basket.getBalance()).toBe(7);
});

test('From a basket with one book, remove the book', () => {

    basket.emptyBasket();

    expect(basket.getBalance()).toBe(0);

    basket.addToBasket(fantasticMrFox);
    basket.removeFromBasket(fantasticMrFox);

    expect(basket.getBalance()).toBe(0);
});

test('Add multiple books', () => {

    basket.emptyBasket();

    expect(basket.getBalance()).toBe(0);

    basket.addMultipleBooksToBasket(fantasticMrFox, 5);

    expect(basket.getBalance()).toBe(35);

    expect(basket.getBooksInBasket()).toBe(5);
});

test('Check discount applied', () => {

    basket.emptyBasket();

    expect(basket.getBalance()).toBe(0);

    basket.addMultipleBooksToBasket(fantasticMrFox, 11);

    expect(basket.getBalance()).toBe(75.25);

    expect(basket.getBooksInBasket()).toBe(11);
});

test('Check discount not applied for 10 or less', () => {

    basket.emptyBasket();

    expect(basket.getBalance()).toBe(0);

    basket.addMultipleBooksToBasket(fantasticMrFox, 10);

    expect(basket.getBalance()).toBe(70);

    expect(basket.getBooksInBasket()).toBe(10);
});

test('Check balance updated correctly when discount applied and book removed ', () => {

    basket.emptyBasket();

    expect(basket.getBalance()).toBe(0);

    basket.addMultipleBooksToBasket(fantasticMrFox, 11);

    expect(basket.getBalance()).toBe(75.25);

    basket.removeFromBasket(fantasticMrFox);

    expect(basket.getBooksInBasket()).toBe(10);
    expect(basket.getBalance()).toBe(70);
});

