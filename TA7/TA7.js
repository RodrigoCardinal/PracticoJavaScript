function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log(titles);
}

const books = [
    { title: 'Book', author: 'Name' },
    { title: 'Book2', author: 'Name2' }
];
getTheTitles(books);  