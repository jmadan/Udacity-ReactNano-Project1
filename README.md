# MyReads 

My Reads is a project from <a href="https://udacity.com">Udacity</a> 
This project render books from a back-end server, separate from shelves : 'currentlyReading', 'wantToRead', 'Read', move the books from shelves, also let the user search for books.

How to use : 

* `npm install`
* `npm start`


## Documentation 

`App.js` is the main component that has :
* On component mounting it loads all the books using book api.
* OnChange event updates the books shelf on user's action.

`HomePage.js` displays all the shelfs with books by using the BookList component. It passes filtered books based on the shelf as array to the component and function to handle the user action to change the book shelf.

`BookList.js` is the component which displays book with its attributes

`SearchPage.js` is the component which lets user search for books and lets them add books to their specific shelf that is "Currently reading" or "want to read" or "read".
 * `SearchBook` function takes in user input and uses BooksApi to fetch results with correctly displaying the correct shelf of the book.

`BooksAPI.js` was provide by Udacity and has 
*  getll(), update(), search() methods