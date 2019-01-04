import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    if(!this.state.books.length){
      BooksAPI.getAll().then(response => {
        this.updateState(response);
      })
    }
  }

  updateState(data){
    this.setState({
      books: data
    })
  }
  handleChange(book, e){
    const shelf = e.target.value;
    book.shelf= shelf;
    const tempBooks = this.state.books.map(b => 
      {
        if(b.id === book.id) {
          b.shelf = shelf;
        }
        return b;
      });
    if(!tempBooks.find(t => t.id === book.id)){
      tempBooks.push(book);
    }
    this.setState({
      books: tempBooks
    });


    // if(!this.state.books.find(b => b.id === book.id)){
    //   this.setState({
    //     books: this.state.books.concat([book])
    //   })
    //   console.log(this.state.books);
    // }
    
    // BooksAPI.update(book, shelf);
  }

  render() {
    const currentlyreading = this.state.books.filter(b=>b.shelf==="currentlyReading");
    const wantToRead = this.state.books.filter(b=>b.shelf==="wantToRead");
    const reading = this.state.books.filter(b=>b.shelf==="read");
    return (
      <div className="app">
        <Router>
          <Switch>
          <Route exact path="/" 
            render={() => <HomePage 
              books={this.state.books}
              currentlyreading={currentlyreading}
              wantToRead={wantToRead}
              reading={reading} 
              updateShelf={this.handleChange}/>
            }
          />
          <Route exact path="/search" 
            render={() => <SearchPage
              books={this.state.books}
              updateShelf={this.handleChange}
            />} />
          </Switch>  
        </Router>
      </div>
    )
  }
}

export default BooksApp
