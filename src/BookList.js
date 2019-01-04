import React from 'react';

const DisplayBooks = (props) => {
    const bookArray = props.books.length ? props.books.map(b => {
        // to mitigate against missing thumbnail urls
        let thumbnail = b.imageLinks ? b.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
        return (
            <li key={b.id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e)=>{props.updateShelf(b, e)}} value={b.shelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{b.title}</div>
                    <div className="book-authors">{b.author}</div>
                </div>
            </li>
        )
    }) : 'No Books found based on your search';

    return(
        <ol className="books-grid">
            {bookArray}
        </ol>
    );
}

export default DisplayBooks;