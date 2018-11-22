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

// if there are more than 10 books in basket and you remove one make sure you only subtract the
//  discounted price from the balance.
function removeFromBasket(book) {
    if(booksInBasket > 10 ) {
        balance = balance - ( book.price * 0.75 );
    }
    else {
        balance = balance - book.price;
    }

    booksInBasket--;
   
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