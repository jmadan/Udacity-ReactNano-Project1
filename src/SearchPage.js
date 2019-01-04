import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
    state = {
        searchResult: []
    }

    searchBook = (e) => {
        const searchText = e.target.value;
        if (!searchText) {
            return this.state;
        }

        BooksAPI.search(searchText).then(response => {
            console.log(response);
            const resultsWithState = response.error ? response.items : response.map(b => {
                const exists = this.props.books.find(book => book.id === b.id);
                exists ? b.shelf=exists.shelf : b.shelf="none";
                return b;
            });
            this.setState({
                searchResult: resultsWithState
            })
        })
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" />
                  {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input type="text" placeholder="Search by title or author" onChange={this.searchBook}/>
    
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    <BookList books={this.state.searchResult} updateShelf={this.props.updateShelf}/>
                  </ol>
                </div>
              </div>
        );
    }
    
    
}

export default SearchPage;