import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBooks } from './actions/index'
import Books from './components/books'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      books: {}
     }
  }

  componentDidMount(){
    this.props.getBooks()
  }

  render(){
    // console.log(this.props.books)
    const books = this.props.books.map( book => <li id={book.id}>{book.title} - {book.author.name}</li>)
    
    return (
      <Router>
      <Route path="/" component={ Books } />
      </Router>
      )
    
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}



export default connect(mapStateToProps, { getBooks })(App)
