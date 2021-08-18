import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBooks } from './actions/index'

class App extends Component {

  componentDidMount(){
    this.props.getBooks()
    console.log(this.props.books)
  }

  render(){
    return (
      <div className="App">
  
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
