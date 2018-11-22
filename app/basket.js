let balance = 0;

let booksInBasket = 0;

function addToBasket(book) {
    booksInBasket++;
    if(booksInBasket > 10 ) {
        balance = balance + ( book.price * 0.75 );
    }
    else {
        balance = balance + book.price;
    }
    
}

function removeFromBasket(book) {
    booksInBasket--;
    balance = balance - book.price;
}

function addMultipleBooksToBasket(book, numberOfBooks) {
    for(i = 0; i < numberOfBooks; i++) {
        addToBasket(book);
    }
}

function emptyBasket() {
    balance = 0;
    booksInBasket=0;
}

function getBalance() {
    return balance;
}

function getBooksInBasket() {
    return booksInBasket;
}


module.exports = {
    addToBasket,
    getBalance,
    removeFromBasket,
    addMultipleBooksToBasket,
    emptyBasket,
    getBooksInBasket
};