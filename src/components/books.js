import React, { Component } from 'react'
import { connect } from 'react-redux'
import Book from './book'

class Books extends Component {
    render() {
        const books = this.props.books.map( book => 
            <Book 
                title={book.title}
                year_published={book.year_published} 
                author={book.author.name}
                description={book.description}  
            />
        )

        return (
            <div>
                { books }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      books: state.books
    }
}
export default connect(mapStateToProps)(Books)