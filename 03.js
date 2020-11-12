function solve(input) {
    let bookShelf = input.shift().split('&')

    for (let element of input) {
        let [command, book, bookSwap] = element.split(' | ')

        if (command == 'Add Book') {
            if (!bookShelf.includes(book)) {
                bookShelf.unshift(book)
            }
        }
        else if (command == 'Take Book') {
            if (bookShelf.includes(book)) {
                bookShelf.splice(bookShelf.indexOf(book), 1)
            }
        }
        else if (command == 'Insert Book') {
            bookShelf.push(book)
        }
        else if (command == 'Check Book') {
            book = Number(book)
            if (book >= 0 && book < bookShelf.length) {
                console.log(bookShelf[book]);
            }
        }
        else if (command == 'Swap Books') {
            if (bookShelf.includes(book) && bookShelf.includes(bookSwap)){
                let a = bookShelf.indexOf(book)
                let b = bookShelf.indexOf(bookSwap)
                bookShelf[a] = bookSwap;
                bookShelf[b] = book;
            }
        }
        else if (command == 'Done') {
            console.log(bookShelf.join(', '));
            
        }
    }




}
solve([
    "Anna Karenina&Heart of Darkness&Catch-22& The Stranger",
    "Add Book | David Copperfield",
    "Add Book | One Thousand and One Nights",
    "Swap Books | One Thousand and One Nights | Catch-22",
    "Take Book | David Copperfield",
    "Insert Book | The Stories of Anton Chekhov",
    "Check Book | 17",
    "Done"
])