import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBooks } from './actions/index'
import Books from './components/books'
import NavBar from './components/navBar'
import Home from './components/home'

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
    return (
      
      <Router>
        <NavBar />
        <Route path="/" component={ Home } />
        <Route path="/books" component={ Books } />
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
