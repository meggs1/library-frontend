import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from './actions/index'

class App extends Component {

  state = {
    books: {}
  }

  componentDidMount(){
    this.props.getBooks()
  }

  render(){
    console.log(this.props.books)
    const books = this.props.books.map( book => <p>{book.title} - {book.author.name}</p>)
    return (
      <div className="App">
        {books}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}



export default connect(mapStateToProps, { getBooks })(App)
