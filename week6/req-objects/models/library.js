var library = [
	{
		title: "How to tell if your cat is plotting to kill you",
		author : 'The Oatmeal',
		genre  : 'comedy',
	},{
		title  : 'Exiting Vim',
		author : 'O\'Rly',
		genre  : 'horror',
	},{
		title  : 'It',
		author : 'Stephen King',
		genre  : 'horror',
	}
];

// Find books
function findAll (){
	return library
}

// Find a book
function findOne (index){
	return library[index]
}

// Find all books based on genre
function findGenre (genre){
	return library.filter(function(book){
		return book.genre === genre
	})
}

// [1,2,3] => [2,4,6]

// [1, 4, 16, 23] => [1, 23]

// Adding a book to the library
function addBook (bookInfo){
	library.push(bookInfo);
}

module.exports = {
	findAll   : findAll,
	findOne	  : findOne,
	findGenre : findGenre,
	addBook   : addBook,
}