import React, { Component } from 'react'
import { connect } from 'react-redux'

class Books extends Component {
    render() {
        const books = this.props.books.map( (book) => <p> {book.title} - {book.author.name} </p>)

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