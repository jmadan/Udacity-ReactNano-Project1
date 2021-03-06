import React from 'react';
import DisplayBooks from './BookList';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    {props.books.length > 0 && <DisplayBooks books={props.currentlyreading} updateShelf={props.updateShelf}/>} 
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  {props.books.length > 0 && <DisplayBooks books={props.wantToRead} updateShelf={props.updateShelf}/>} 
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  {props.books.length > 0 && <DisplayBooks books={props.reading} updateShelf={props.updateShelf}/>} 
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
    );
}

export default HomePage;